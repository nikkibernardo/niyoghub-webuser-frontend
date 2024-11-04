import PropTypes from 'prop-types';

const DiaseaseAlertModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null; // Don't render the modal if it's not open

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg p-6 shadow-lg w-11/12 md:w-1/3">
        <h2 className="text-lg font-semibold">Alert Message</h2>
        <p className="mt-4">You haven`t uploaded or captured an image to diagnose.</p>
        <div className="flex justify-end mt-6">
          <button 
            onClick={onClose} 
            className="bg-[#90B74B] text-white py-2 px-4 rounded hover:bg-[#537F19] transition duration-200"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

DiaseaseAlertModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default DiaseaseAlertModal;
