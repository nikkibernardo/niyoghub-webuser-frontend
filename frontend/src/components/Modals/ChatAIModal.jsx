import PropTypes from 'prop-types';

const ChatModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative w-full max-w-2xl bg-white rounded-lg shadow-lg p-6 mx-10">
        <div className="flex justify-between items-center border-b pb-4">
          <div className="flex flex-col">
            <h2 className="text-xl font-semibold text-gray-800">HOW TO USE THE AI ASSISTANT?</h2>
            <h5 className="text-l text-gray-600">Last Updated October 2024</h5>
          </div>
          <button onClick={onClose} className="text-black-500 hover:text-black-700">
            ×
          </button>
        </div>
        <div className="mt-4 py-2">
            <p className="text-gray-700 font-semibold">Starting a Chat: </p>
            <p className="text-gray-700">• Type your question or message in the input box at the bottom of the screen.</p>
            <p className="text-gray-700">• Press the Send icon to submit your message to NiyogHub`s Virtual AI Assistant`.</p>
            <p className="text-gray-700">• Press the Talk with AI button to switch to the chat assistant mode`.</p>

            <p className="text-gray-700 font-semibold mt-2">Using the Voice Assistant: </p>
            <p className="text-gray-700">• Press the green robot icon to speak your question, and the AI will respond accordingly.</p>

            <p className="text-gray-700 font-semibold mt-2">Viewing the Response: </p>
            <p className="text-gray-700">• After sending a message, the AI`s response will appear in the chat bubble`.</p>
            <p className="text-gray-700">• If your asking about PCA, the assistant will guide you to the relevant contact information`.</p>

            <p className="text-gray-700 font-semibold mt-2">Additional Tips: </p>
            <p className="text-gray-700">• You can scroll through previous messages in the conversation.</p>
            <p className="text-gray-700">• The assistant will respond based on your language—English or Filipino.</p>
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
