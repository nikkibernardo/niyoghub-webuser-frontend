import PropTypes from 'prop-types';

const ChatModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative w-full max-w-2xl bg-white rounded-lg shadow-lg p-6 mx-10">
        <div className="flex justify-between items-center border-b pb-4">
          <div className="flex flex-col">
            <h2 className="text-xl font-semibold text-gray-800">HOW TO USE EAL-TIME CHAT SUPPORT?</h2>
            <h5 className="text-l text-gray-600">Last Updated October 2024</h5>
          </div>
          <button onClick={onClose} className="text-black-500 hover:text-black-700">
            ×
          </button>
        </div>
        <div className="mt-4 py-2">
            <p className="text-gray-700 font-semibold">Initiate the Chat: </p>
            <p className="text-gray-700">Click on the chat option to start the conversation. You might need to provide some basic information like your name or email address.</p>

            <p className="text-gray-700 font-semibold mt-2">Describe Your Issue: </p>
            <p className="text-gray-700">Once connected, briefly describe your issue or question. Be as clear and detailed as possible to help the support agent understand your problem.</p>

            <p className="text-gray-700 font-semibold mt-2">Be Patient and Responsive: </p>
            <p className="text-gray-700">Chat support can sometimes take a few moments between responses. Be patient and stay engaged in the conversation to ensure a quick resolution.</p>

            <p className="text-gray-700 font-semibold mt-2">End the Chat: </p>
            <p className="text-gray-700">Once your issue is resolved or you have all the information you need, thank the support agent and end the chat session. </p>
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

ChatModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ChatModal;
