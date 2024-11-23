import { IoAttachOutline, IoSend } from "react-icons/io5";
import PropTypes from "prop-types";

const InputTextContainer = ({ inputMessage, setInputMessage, handleSendMessage, handleFileChange }) => {
  return (
    <div className="flex items-center p-4 bg-white shadow-md space-x-2">
      <input
        type="text"
        value={inputMessage}
        onChange={(e) => setInputMessage(e.target.value)}
        placeholder="Type your message..."
        className="flex-1 border border-gray-300 rounded-full px-4 py-2 text-gray-700 outline-none min-w-0"
      />
      <button className="text-gray-500">
        <input
          type="file"
          onChange={handleFileChange}
          className="hidden"
          id="file-upload"
        />
        <label htmlFor="file-upload" className="cursor-pointer text-gray-500">
          <IoAttachOutline size={24} />
        </label>
      </button>
      <button className="text-[#537F19]" onClick={handleSendMessage}>
        <IoSend size={24} />
      </button>
    </div>
  );
};

InputTextContainer.propTypes = {
  inputMessage: PropTypes.string.isRequired,
  setInputMessage: PropTypes.func.isRequired,
  handleSendMessage: PropTypes.func.isRequired,
  handleFileChange: PropTypes.func.isRequired,
};

export default InputTextContainer;
