import PropTypes from 'prop-types';

const DiseaseModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative w-full max-w-2xl bg-white rounded-lg shadow-lg p-6 mx-10">
        <div className="flex justify-between items-center border-b pb-4">
          <div className="flex flex-col">
            <h2 className="text-xl font-semibold text-gray-800">HOW TO USE DISEASE IDENTIFICATION?</h2>
            <h5 className="text-l text-gray-600">Last Updated October 2024</h5>
          </div>
          <button onClick={onClose} className="text-black-500 hover:text-black-700">
            ×
          </button>
        </div>
        <div className="mt-4 py-2">
            <p className="text-gray-700 font-semibold">Uploading an Image:</p>
            <p className="text-gray-700">• Look for the option to `Upload` or `Capture` an image.</p>
            <p className="text-gray-700">• If you have a photo of a leaf with a disease on your device, click on `Upload` and select the image from your device`s storage.</p>

            <p className="text-gray-700 font-semibold mt-2">Submitting the Image:</p>
            <p className="text-gray-700">• After uploading or capturing the image, look for a button that says `Diagnose`.</p>
            <p className="text-gray-700">• Click on this button to send the image to the app for analysis.</p>

            <p className="text-gray-700 font-semibold mt-2">Viewing the Diagnosis:</p>
            <p className="text-gray-700">• Once the analysis is complete, the app will display the diagnosis result.</p>
            <p className="text-gray-700">• Read the diagnosis to understand what disease or condition is affecting the leaf.</p>
        </div>
        <div className=" flex justify-center items-center mt-6 flex justify-end space-x-3 border-t pt-4">
          <button
            onClick={onClose}
            className="px-8 py-2 bg-[#90B74B] hover:bg-[#3B5B12] text-white rounded-ss"
          >
            I understand
          </button>
        </div>
      </div>
    </div>
  );
};

DiseaseModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default DiseaseModal;
