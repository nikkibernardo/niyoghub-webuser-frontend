import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import Layout from "../../layout/Layout";
import DiseaseModal from '../../components/Modals/DiseaseModal';
import DiaseaseAlertModal from "../../components/Modals/DiseaseDiagnoseAlertModal.jsx";
import { IoInformationCircleOutline, IoCloseSharp } from 'react-icons/io5';
import { IoIosCamera } from "react-icons/io";
import { ImUpload } from "react-icons/im";

const DiseaseIdentification = () => {
  const navigate = useNavigate(); 
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [image, setImage] = useState(null); // state to hold the image
  const [isAlertOpen, setShowAlert] = useState(false); // state for alert modal

  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  const toggleAlert = () => {
    setShowAlert((prev) => !prev);
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result); // set the image data to state
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCapture = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result); // set the image data to state
      };
      reader.readAsDataURL(file);
    }
  };

  const removeImage = () => {
    setImage(null); // for clearing the image
  };

  const handleDiagnoseClick = (e) => {
    e.preventDefault(); // prevent default anchor behavior
    if (!image) {
      toggleAlert(); // show alert modal if no image
    } else {
      navigate('/disease-diagnosed-result', { state: { image } }); 
    }
  };

  return (
    <>
      <Layout>
        <div className="flex flex-col md:flex-row bg-white items-center md:items-start justify-center p-4 space-y-4 md:space-y-0 md:space-x-6">
          <div className="flex flex-col md:flex-row w-full gap-6">
            {/* Sidebar */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-md w-full md:w-1/3 lg:w-2/5 min-h-full flex flex-col">
              <div className="flex items-center space-x-4 justify-between mb-5">
                <h2 className="text-[#537F19] font-semibold text-lg sm:text-xl md:text-2xl">DISEASE IDENTIFICATION</h2>
                <IoInformationCircleOutline
                  size={24}
                  onClick={toggleModal}
                  className="cursor-pointer text-gray-700"
                  // className="bg-gray-700 rounded-xl"
                />
              </div>
              <hr className="font-semibold"/>
              <p className="text-black mt-4">
                Introducing our Leaf Disease Identification for coconut trees!
              </p>
              <p className="text-black mt-2">
                Capture or upload photos of your coconut trees, and our platform quickly identifies any diseases or issues present.
              </p>
              <p className="text-black mt-2">
                Take the first step towards healthier coconut trees and a brighter future for your farm.
              </p>
              <p className="text-black text-sm mt-6 sm:mt-18 md:mt-20 lg:mt-29 xl:mt-32 font-semibold">
                NOTE: The accuracy of the diagnosis may vary depending on the quality of the image provided.
              </p>
            </div>

            {/* Upload Section */}
            <div className="flex flex-col items-start w-full md:w-2/3 lg:w-3/4 min-h-full">
              <h3 className="text-gray-800 font-semibold text-xl pt-2">Upload Image</h3>
              <div className="flex items-center justify-between w-full mb-2">
                <p className="text-gray-600">Upload image you want to diagnose</p>
                {/* <label className="text-[#90B74B] border border-[#90B74B] hover:text-white flex flex-col sm:flex-row items-center justify-center space-y-1 sm:space-y-0 sm:space-x-2 py-1 px-4 rounded-l hover:bg-[#90B74B] transition duration-200">
                  <IoIosCamera className="text-2xl" />
                  <span>Capture Image</span>
                  <input
                    type="file"
                    accept="image/*"
                    capture="camera"
                    onChange={handleCapture}
                    className="hidden" 
                  />
                </label> */}
              </div>

              <div className="flex justify-center items-center w-full border-2 border-dashed border-gray-300 rounded-lg p-6 h-65 md:h-96 lg:h-80 relative">
                {image ? (
                  <div className="relative w-full h-full flex items-center justify-center">
                    <img src={image} alt="Uploaded or captured" className="object-cover w-full h-full rounded" />
                    <button onClick={removeImage} className="absolute top-2 right-2 bg-black bg-opacity-70 text-white rounded-s p-2 text-extrabold">
                      <IoCloseSharp size={30} />
                    </button>
                  </div>
                ) : (
                  <div className="text-center space-y-2">
                    <div className="flex items-center justify-center">
                      <ImUpload
                        size={42}
                        color="#90B74B"
                        className="text-center rounded-xl"
                      />
                    </div>
                    <p className="text-gray-500">or drag & drop a file here</p>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleFileUpload}
                      className="hidden" 
                    />
                    <button
                      onClick={() => document.querySelector('input[type="file"]').click()}
                      className="bg-[#90B74B] text-white py-2 px-4 rounded-s hover:bg-[#537F19] transition duration-200"
                    >
                      Browse
                    </button>
                  </div>
                )}
              </div>

              <button 
                onClick={handleDiagnoseClick}
                className="mt-3 bg-[#90B74B] text-white w-full py-3 rounded-s hover:bg-[#537F19] transition duration-200 text-center"
              >
                Diagnose
              </button>

            </div>
          </div>
        </div>

        <DiseaseModal isOpen={isModalOpen} onClose={toggleModal} />
        <DiaseaseAlertModal isOpen={isAlertOpen} onClose={toggleAlert} />
      </Layout>
    </>
  );
};

export default DiseaseIdentification;
