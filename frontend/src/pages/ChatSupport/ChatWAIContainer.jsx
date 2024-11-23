import InputTextContainer from "./InputTextContainer";

const ChatWAIContainer = () => {
  return (
    <>
      <div className="flex-1 flex flex-col items-center justify-center text-center my-20">
        <h2 className="text-2xl font-bold text-[#537F19]">Chat with AI...</h2>
        <p className="text-gray-500 mt-4">The AI assistant is processing your input. Please wait...</p>
      </div>
      <InputTextContainer />
    </>
  );
};

export default ChatWAIContainer;
