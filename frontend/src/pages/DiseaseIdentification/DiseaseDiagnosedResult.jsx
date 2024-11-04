import { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import Layout from "../../layout/Layout";
import DiseaseInfoDropdown from './DiseaseInfoDropdown';

const DiseaseDiagnosedResult = () => {
  const location = useLocation();
  const { image } = location.state || {}; // Retrieve the image from state
  const [diagnosedDisease, setDiagnosedDisease] = useState(''); // State to hold the diagnosed disease title
  const [error, setError] = useState(''); // State to hold any error message
  const [loading, setLoading] = useState(true); // State for loading status

  // Function to send the image to the Roboflow API and get the disease prediction
  const getDiseasePrediction = async (imageSrc) => {
    try {
      // Set loading state to true
      setLoading(true);

      // Convert image URL to base64 format
      const response = await fetch(imageSrc);
      const blob = await response.blob();
      const reader = new FileReader();

      reader.readAsDataURL(blob);
      reader.onloadend = async () => {
        const base64data = reader.result.split(',')[1]; // Strip off the base64 prefix

        // API request to Roboflow
        const apiResponse = await axios({
          method: "POST",
          url: "https://detect.roboflow.com/niyoghub/2",
          params: {
            api_key: "zxo5ISsmlDjsnYJo36jv",
          },
          data: base64data,
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        });

        // Log the entire response from the API to help debug
        console.log('API Response:', apiResponse.data);

        // Extract predictions from the response object
        const predictions = apiResponse.data?.predictions || {};

        // Initialize variables to track the disease with the highest confidence
        let topPrediction = { class: '', confidence: 0 };

        // Loop through the predictions to find the class with the highest confidence
        for (const disease in predictions) {
          const predictionData = predictions[disease];
          if (predictionData.confidence > topPrediction.confidence) {
            topPrediction = { class: disease, confidence: predictionData.confidence };
          }
        }

        // Set the diagnosed disease only if confidence is above 50%
        if (topPrediction.confidence >= 0.50) {
          setDiagnosedDisease(topPrediction.class); // Set the disease name with the highest confidence
        } else {
          setDiagnosedDisease('No results found');
        }

        // Set loading to false after data is fetched
        setLoading(false);
      };
    } catch (error) {
      setError('Error fetching the prediction');
      console.error('Error:', error);
      setLoading(false); // Set loading to false even if there's an error
    }
  };

  // Use effect to trigger the prediction when the component mounts or the image changes
  useEffect(() => {
    if (image) {
      getDiseasePrediction(image);
    }
  }, [image]);

  return (
    <>
      <Layout>
        <div className="relative border border-[#90B74B]">
          {image && (
            <div className="relative">
              <img
                src={image}
                alt="Diagnosed"
                className="object-cover w-full h-64"
              />
              <h1 className="absolute bottom-2 left-2 text-2xl font-bold text-white bg-black bg-opacity-50 px-2 py-1 rounded">
                DIAGNOSED RESULT
              </h1>
            </div>
          )}
          <div className="w-full p-10 flex justify-center items-center">
            {loading ? (
              <div className="flex flex-col items-center">
                <h2 className="text-xl font-bold text-gray-600 mt-4">
                  Processing, please wait...
                </h2>
              </div>
            ) : diagnosedDisease !== 'No results found' ? (
              <div className="p-4">
                <h1 className="text-3xl font-bold text-[#537F19] flex justify-center items-center">
                  {diagnosedDisease === "WCLWD_Yellowing" && "Yellowing"}
                  {diagnosedDisease === "WCLWD_DryingofLeaflets" && "Drying of Leaflets"}
                  {diagnosedDisease === "WCLWD_Flaccidity" && "Flaccidity"}
                  {diagnosedDisease === "CCI_Caterpillars" && "Caterpillars"}
                  {diagnosedDisease === "CCI_Leaflets" && "Leaflets"}
                </h1>
                <DiseaseInfoDropdown
                  highestConfidenceClass={diagnosedDisease}
                />
              </div>
            ) : (
              <div className="text-center">
                <h2 className="text-xl font-bold text-gray-500">
                  No results found.
                </h2>
                <p className="text-md text-gray-600 mt-2">
                  Our app currently supports the identification of the following diseases:
                </p>
                <ul className="text-md text-gray-600 mt-1">
                  <li>- Yellowing</li>
                  <li>- Drying of Leaflets</li>
                  <li>- Flaccidity</li>
                  <li>- Caterpillars</li>
                  <li>- Leaflets</li>
                </ul>
                <p className="text-md text-gray-600 mt-2">
                  If the symptoms do not match any of these conditions, it may be outside the current detection capabilities of our app. Please consult a specialist for further diagnosis.
                </p>
                <button
                  className="mt-4 px-4 py-2 bg-[#537F19] text-white rounded"
                  onClick={() => window.history.back()}
                >
                  Diagnose Again
                </button>
              </div>
            )}
          </div>
        </div>
      </Layout>
    </>
  );
};

export default DiseaseDiagnosedResult;
