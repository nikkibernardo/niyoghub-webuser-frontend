import logo from "../../assets/black.png";
import PropTypes from "prop-types";

const ConvoContainer = ({ messages, isLoading }) => {
  return (
    <div className="flex-1 overflow-y-auto px-4 py-2 max-h-[calc(90vh-180px)]">
      {messages.length === 0 ? (
        <div className="flex flex-col items-center mt-20">
          <img src={logo} alt="Logo" className="w-32 h-32 mb-4" />
          <p className="text-gray-500 text-center">How can we help you today? Just type your message.</p>
        </div>
      ) : (
        messages.map((message, index) => (
          <div key={index} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"} my-2`}>
            {message.role === "admin" && <img src={logo} alt="Admin" className="w-8 h-8 mr-2 rounded-full" />}
            <div
              className={`px-4 py-2 rounded-lg ${message.role === "user" ? "bg-[#90B74B] text-black" : "bg-gray-200 text-black"}`}
            >
              <p>{message.content}</p>
              <p className="text-xs text-gray-400 text-right">{message.timestamp}</p>
            </div>
          </div>
        ))
      )}
      {isLoading && (
        <div className="flex items-center space-x-2">
          <img src={logo} className="w-8 h-8 rounded-full" alt="Loading..." />
          <div className="animate-spin border-4 border-green-600 border-t-transparent rounded-full w-5 h-5"></div>
        </div>
      )}
    </div>
  );
};

ConvoContainer.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      content: PropTypes.string.isRequired,
      role: PropTypes.oneOf(["user", "admin"]).isRequired,
      timestamp: PropTypes.string.isRequired,
    })
  ).isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default ConvoContainer;
