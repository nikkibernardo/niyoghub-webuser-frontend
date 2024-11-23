import { useState, useEffect } from "react";
import {
  IoMicOutline,
  IoChatbubbleEllipsesOutline,
  IoInformationCircleOutline,
} from "react-icons/io5";
import Layout from "../../layout/Layout";
import ChatModal from "../../components/Modals/ChatModal";
import ChatAIModal from "../../components/Modals/ChatAIModal"; 
import ConvoContainer from "./ConvoContainer";
import InputTextContainer from "./InputTextContainer";
import TalkWAIContainer from "./TalkWAIContainer";
import ChatWAIContainer from "./ChatWAIContainer";

const ChatScreen = () => {
  const [activeChatMode, setActiveChatMode] = useState("PCA"); 
  const [inputMessage, setInputMessage] = useState("");
  const [messages, setMessages] = useState(() => {
    const savedMessages = localStorage.getItem("messages");
    return savedMessages ? JSON.parse(savedMessages) : [];
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    localStorage.setItem("messages", JSON.stringify(messages));
  }, [messages]);

  useEffect(() => {
    if (activeChatMode === "TalkAI") {
      const talkAIResponse = {
        content: "The AI is now listening. Speak your query.",
        role: "AI",
        timestamp: new Date().toLocaleTimeString(),
      };
      setTimeout(() => setMessages((prev) => [...prev, talkAIResponse]), 500);
    } else if (activeChatMode === "ChatAI") {
      const chatAIResponse = {
        content: "The AI assistant is ready to chat. Type your message below.",
        role: "AI",
        timestamp: new Date().toLocaleTimeString(),
      };
      setTimeout(() => setMessages((prev) => [...prev, chatAIResponse]), 500);
    }
  }, [activeChatMode]);

  const handleSendMessage = () => {
    if (inputMessage.trim()) {
      const newMessage = {
        content: inputMessage,
        role: "user",
        timestamp: new Date().toLocaleTimeString(),
      };
      setMessages((prevMessages) => [...prevMessages, newMessage]);

      const adminReply = {
        content: "Thank you for your message! How can I assist you further?",
        role: "admin",
        timestamp: new Date().toLocaleTimeString(),
      };
      setTimeout(() => {
        setMessages((prevMessages) => [...prevMessages, adminReply]);
      }, 1000);

      setInputMessage("");
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    }
  };

  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const newMessage = {
        content: `File sent: ${file.name}`,
        role: "user",
        timestamp: new Date().toLocaleTimeString(),
      };
      setMessages((prevMessages) => [...prevMessages, newMessage]);
    }
  };

  const switchToPCA = () => setActiveChatMode("PCA");
  const switchToTalkAI = () => setActiveChatMode("TalkAI");
  const switchToChatAI = () => setActiveChatMode("ChatAI");

  return (
    <Layout>
      <div className="flex flex-col lg:px-20">
        <div className="outline-none outline outline-[2px] outline-gray-300 outline-t-1 outline-offset-[-1px] p-3 rounded-sm flex flex-col flex-grow max-h-[calc(100vh-180px)]">
          <header className="flex justify-between items-center p-4 bg-white shadow-md">
            <h1 className="text-xl font-bold text-[#537F19]">Chat with PCA</h1>
            <div className="flex items-center space-x-4">
              {/* Button for Chat with PCA */}
              {activeChatMode !== "PCA" && (
                <button
                  onClick={switchToPCA}
                  className="flex items-center bg-[#537F19] text-white px-3 py-1 rounded-full"
                >
                  <IoChatbubbleEllipsesOutline size={24} />
                  <span className="hidden md:inline ml-2">Chat with PCA</span>
                </button>
              )}

              {/* Button for Talk with AI */}
              {activeChatMode !== "TalkAI" && (
                <button
                  onClick={switchToTalkAI}
                  className="flex items-center bg-[#537F19] text-white px-3 py-1 rounded-full"
                >
                  <IoMicOutline size={24} />
                  <span className="hidden md:inline ml-2">Talk with AI</span>
                </button>
              )}

              {/* Button for Chat with AI */}
              {activeChatMode !== "ChatAI" && (
                <button
                  onClick={switchToChatAI}
                  className="flex items-center bg-[#537F19] text-white px-3 py-1 rounded-full"
                >
                  <IoChatbubbleEllipsesOutline size={24} />
                  <span className="hidden md:inline ml-2">Chat with AI</span>
                </button>
              )}

              {/* Dynamic Modal Trigger */}
              <IoInformationCircleOutline
                size={24}
                color="white"
                onClick={toggleModal}
                className="bg-gray-700 rounded-xl"
              />
            </div>
          </header>

          {/* Conditional Rendering for Different Modes */}
          {activeChatMode === "PCA" && (
            <>
              <ConvoContainer messages={messages} isLoading={isLoading} />
              <hr className="border-gray-300 my-2" />
              <InputTextContainer
                inputMessage={inputMessage}
                setInputMessage={setInputMessage}
                handleSendMessage={handleSendMessage}
                handleFileChange={handleFileChange}
              />
            </>
          )}

          {activeChatMode === "TalkAI" && <TalkWAIContainer />}

          {activeChatMode === "ChatAI" && <ChatWAIContainer />}

          {/* Dynamic Modal */}
          {isModalOpen &&
            (activeChatMode === "PCA" ? (
              <ChatModal isOpen={isModalOpen} onClose={toggleModal} />
            ) : (
              <ChatAIModal isOpen={isModalOpen} onClose={toggleModal} />
            ))}
        </div>
      </div>
    </Layout>
  );
};

export default ChatScreen;





// import { useState, useEffect } from "react";
// import {
//   IoMicOutline,
//   IoChatbubbleEllipsesOutline,
//   IoInformationCircleOutline,
// } from "react-icons/io5";
// import Layout from "../../layout/Layout";
// import ChatModal from "../../components/Modals/ChatModal";
// import ConvoContainer from "./ConvoContainer";
// import InputTextContainer from "./InputTextContainer";
// import TalkWAIContainer from "./TalkWAIContainer";
// import ChatWAIContainer from "./ChatWAIContainer";

// const ChatScreen = () => {
//   const [activeChatMode, setActiveChatMode] = useState("PCA");
//   const [inputMessage, setInputMessage] = useState("");
//   const [messages, setMessages] = useState(() => {
//     const savedMessages = localStorage.getItem("messages");
//     return savedMessages ? JSON.parse(savedMessages) : [];
//   });
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);

//   useEffect(() => {
//     localStorage.setItem("messages", JSON.stringify(messages));
//   }, [messages]);

//   const handleSendMessage = () => {
//     if (inputMessage.trim()) {
//       const newMessage = {
//         content: inputMessage,
//         role: "user",
//         timestamp: new Date().toLocaleTimeString(),
//       };
//       setMessages((prevMessages) => [...prevMessages, newMessage]);

//       // Simulate an admin reply
//       const adminReply = {
//         content: "Thank you for your message! How can I assist you further?",
//         role: "admin",
//         timestamp: new Date().toLocaleTimeString(),
//       };
//       setTimeout(() => {
//         setMessages((prevMessages) => [...prevMessages, adminReply]);
//       }, 1000);

//       setInputMessage("");
//       setIsLoading(true);
//       setTimeout(() => {
//         setIsLoading(false);
//       }, 1000);
//     }
//   };

//   const toggleModal = () => {
//     setIsModalOpen((prev) => !prev);
//   };

//   const handleFileChange = (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       const newMessage = {
//         content: `File sent: ${file.name}`,
//         role: "user",
//         timestamp: new Date().toLocaleTimeString(),
//       };
//       setMessages((prevMessages) => [...prevMessages, newMessage]);
//     }
//   };

//   const switchToPCA = () => setActiveChatMode("PCA");
//   const switchToTalkAI = () => setActiveChatMode("TalkAI");
//   const switchToChatAI = () => setActiveChatMode("ChatAI");

//   return (
//     <Layout>
//       <div className="flex flex-col lg:px-20">
//         <div className="outline-none outline outline-[2px] outline-gray-300 outline-t-1 outline-offset-[-1px] p-3 rounded-sm flex flex-col flex-grow max-h-[calc(100vh-180px)]">
//           <header className="flex justify-between items-center p-4 bg-white shadow-md">
//             <h1 className="text-xl font-bold text-[#537F19]">Chat App</h1>
//             <div className="flex items-center space-x-4">
//               {/* Button for Chat with PCA */}
//               {activeChatMode !== "PCA" && (
//                 <button
//                   onClick={switchToPCA}
//                   className="flex items-center bg-[#537F19] text-white px-3 py-1 rounded-full"
//                 >
//                   <IoChatbubbleEllipsesOutline size={24} />
//                   <span className="hidden md:inline ml-2">Chat with PCA</span>
//                 </button>
//               )}

//               {/* Button for Talk with AI */}
//               {activeChatMode !== "TalkAI" && (
//                 <button
//                   onClick={switchToTalkAI}
//                   className="flex items-center bg-[#537F19] text-white px-3 py-1 rounded-full"
//                 >
//                   <IoMicOutline size={24} />
//                   <span className="hidden md:inline ml-2">Talk with AI</span>
//                 </button>
//               )}

//               {/* Button for Chat with AI */}
//               {activeChatMode !== "ChatAI" && (
//                 <button
//                   onClick={switchToChatAI}
//                   className="flex items-center bg-[#537F19] text-white px-3 py-1 rounded-full"
//                 >
//                   <IoChatbubbleEllipsesOutline size={24} />
//                   <span className="hidden md:inline ml-2">Chat with AI</span>
//                 </button>
//               )}

//               <IoInformationCircleOutline
//                 size={24}
//                 color="white"
//                 onClick={toggleModal}
//                 className="bg-gray-700 rounded-xl"
//               />
//             </div>
//           </header>

//           {/* Conditional Rendering for Different Modes */}
//           {activeChatMode === "PCA" && (
//             <>
//               <ConvoContainer messages={messages} isLoading={isLoading} />
//               <hr className="border-gray-300 my-2" />
//               <InputTextContainer
//                 inputMessage={inputMessage}
//                 setInputMessage={setInputMessage}
//                 handleSendMessage={handleSendMessage}
//                 handleFileChange={handleFileChange}
//               />
//             </>
//           )}

//           {activeChatMode === "TalkAI" && <TalkWAIContainer />}

//           {activeChatMode === "ChatAI" && <ChatWAIContainer />}

//           {/* Chat Modal */}
//           <ChatModal isOpen={isModalOpen} onClose={toggleModal} />
//         </div>
//       </div>
//     </Layout>
//   );
// };

// export default ChatScreen;

















// import { useState, useEffect } from "react";
// import { IoMicOutline, IoChatbubbleEllipsesOutline, IoInformationCircleOutline } from "react-icons/io5";
// import Layout from "../../layout/Layout";
// import ChatModal from "../../components/Modals/ChatModal";
// import ConvoContainer from "./ConvoContainer";
// import InputTextContainer from "./InputTextContainer";
// import TalkWAiContainer from "./TalkWAIContainer";

// const ChatScreen = () => {
//   const [inputMessage, setInputMessage] = useState("");
//   const [messages, setMessages] = useState(() => {
//     const savedMessages = localStorage.getItem("messages");
//     return savedMessages ? JSON.parse(savedMessages) : [];
//   });
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);
//   const [activeChatMode, setActiveChatMode] = useState("PCA"); // State to toggle between PCA and AI modes

//   useEffect(() => {
//     localStorage.setItem("messages", JSON.stringify(messages));
//   }, [messages]);

//   const handleSendMessage = () => {
//     if (inputMessage.trim()) {
//       const newMessage = {
//         content: inputMessage,
//         role: "user",
//         timestamp: new Date().toLocaleTimeString(),
//       };
//       setMessages((prevMessages) => [...prevMessages, newMessage]);

//       // Simulate an admin reply
//       const adminReply = {
//         content: "Thank you for your message! How can I assist you further?",
//         role: "admin",
//         timestamp: new Date().toLocaleTimeString(),
//       };
//       setTimeout(() => {
//         setMessages((prevMessages) => [...prevMessages, adminReply]);
//       }, 1000);

//       setInputMessage("");
//       setIsLoading(true);
//       setTimeout(() => {
//         setIsLoading(false);
//       }, 1000);
//     }
//   };

//   const toggleModal = () => {
//     setIsModalOpen((prev) => !prev);
//   };

//   const handleFileChange = (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       const newMessage = {
//         content: `File sent: ${file.name}`,
//         role: "user",
//         timestamp: new Date().toLocaleTimeString(),
//       };
//       setMessages((prevMessages) => [...prevMessages, newMessage]);
//     }
//   };

//   const switchToAI = () => {
//     setActiveChatMode("AI"); // Switch to AI chat mode
//   };

//   const switchToPCA = () => {
//     setActiveChatMode("PCA"); // Switch to PCA chat mode
//   };

//   return (
//     <Layout>
//       <div className="flex flex-col lg:px-20">
//         <div className="outline-none outline outline-[2px] outline-gray-300 outline-t-1 outline-offset-[-1px] p-3 rounded-sm flex flex-col flex-grow max-h-[calc(100vh-180px)]">
//           <header className="flex justify-between items-center p-4 bg-white shadow-md">
//             <h1 className="text-xl font-bold text-[#537F19]">Chat with PCA</h1>
//             <div className="flex items-center space-x-4">
//               {/* Button to toggle Chat with PCA */}
//               <button
//                 onClick={switchToPCA}
//                 className={`flex items-center ${
//                   activeChatMode === "PCA" ? "bg-[#3B5B12]" : "bg-[#537F19]"
//                 } text-white px-3 py-1 rounded-full`}
//               >
//                 <IoChatbubbleEllipsesOutline size={24} />
//                 <span className="hidden md:inline ml-2">Chat with PCA</span>
//               </button>

//               {/* Button to toggle Chat with AI */}
//               <button
//                 onClick={switchToAI}
//                 className={`flex items-center ${
//                   activeChatMode === "AI" ? "bg-[#3B5B12]" : "bg-[#537F19]"
//                 } text-white px-3 py-1 rounded-full`}
//               >
//                 {activeChatMode === "AI" ? (
//                   <IoChatbubbleEllipsesOutline size={24} />
//                 ) : (
//                   <IoMicOutline size={24} />
//                 )}
//                 <span className="hidden md:inline ml-2">Chat with AI</span>
//               </button>

//               <IoInformationCircleOutline
//                 size={24}
//                 color="white"
//                 onClick={toggleModal}
//                 className="bg-gray-700 rounded-xl"
//               />
//             </div>
//           </header>

//           {/* Conditional Rendering for Chat Modes */}
//           {activeChatMode === "AI" ? (
//             <TalkWAiContainer /> // Display AI container
//           ) : (
//             <>
//               <ConvoContainer messages={messages} isLoading={isLoading} />
//               <hr className="border-gray-300 my-2" />
//               <InputTextContainer
//                 inputMessage={inputMessage}
//                 setInputMessage={setInputMessage}
//                 handleSendMessage={handleSendMessage}
//                 handleFileChange={handleFileChange}
//               />
//             </>
//           )}

//           {/* Chat Modal */}
//           <ChatModal isOpen={isModalOpen} onClose={toggleModal} />
//         </div>
//       </div>
//     </Layout>
//   );
// };

// export default ChatScreen;























// import { useState, useEffect } from "react";
// import { IoMicOutline, IoChatbubbleEllipsesOutline, IoInformationCircleOutline } from "react-icons/io5";
// import Layout from "../../layout/Layout";
// import ChatModal from "../../components/Modals/ChatModal";
// import ConvoContainer from "./ConvoContainer";
// import InputTextContainer from "./InputTextContainer";
// import TalkWAiContainer from "./TalkWAIContainer";

// const ChatScreen = () => {
//   const [inputMessage, setInputMessage] = useState("");
//   const [messages, setMessages] = useState(() => {
//     const savedMessages = localStorage.getItem("messages");
//     return savedMessages ? JSON.parse(savedMessages) : [];
//   });
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);
//   const [isTalkWithAI, setIsTalkWithAI] = useState(false); // Toggle between modes

//   useEffect(() => {
//     localStorage.setItem("messages", JSON.stringify(messages));
//   }, [messages]);

//   const handleSendMessage = () => {
//     if (inputMessage.trim()) {
//       const newMessage = {
//         content: inputMessage,
//         role: "user",
//         timestamp: new Date().toLocaleTimeString(),
//       };
//       setMessages((prevMessages) => [...prevMessages, newMessage]);

//       // Simulate an admin reply
//       const adminReply = {
//         content: "Thank you for your message! How can I assist you further?",
//         role: "admin",
//         timestamp: new Date().toLocaleTimeString(),
//       };
//       setTimeout(() => {
//         setMessages((prevMessages) => [...prevMessages, adminReply]);
//       }, 1000);

//       setInputMessage("");
//       setIsLoading(true);
//       setTimeout(() => {
//         setIsLoading(false);
//       }, 1000);
//     }
//   };

//   const toggleModal = () => {
//     setIsModalOpen((prev) => !prev);
//   };

//   const handleFileChange = (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       const newMessage = {
//         content: `File sent: ${file.name}`,
//         role: "user",
//         timestamp: new Date().toLocaleTimeString(),
//       };
//       setMessages((prevMessages) => [...prevMessages, newMessage]);
//     }
//   };

//   const handleTalkWithAI = () => {
//     setIsTalkWithAI((prev) => !prev); // Toggle the TalkWithAI mode
//   };

//   return (
//     <Layout>
//       <div className="flex flex-col lg:px-20">
//         <div className="outline-none outline outline-[2px] outline-gray-300 outline-t-1 outline-offset-[-1px] p-3 rounded-sm flex flex-col flex-grow max-h-[calc(100vh-180px)]">
//           <header className="flex justify-between items-center p-4 bg-white shadow-md">
//             <h1 className="text-xl font-bold text-[#537F19]">Chat with PCA</h1>
//             <div className="flex items-center space-x-4">
//               <button
//                 onClick={handleTalkWithAI}
//                 className="flex items-center bg-[#537F19] text-white px-3 py-1 rounded-full"
//               >
//                 {isTalkWithAI ? (
//                   <IoChatbubbleEllipsesOutline size={24} /> // Chat icon for AI mode
//                 ) : (
//                   <IoMicOutline size={24} /> // Microphone icon for Talk mode
//                 )}
//                 <span className="hidden md:inline ml-2">
//                   {isTalkWithAI ? "Chat with AI" : "Talk with AI"} {/* Dynamic text */}
//                 </span>
//               </button>
//               <IoInformationCircleOutline
//                 size={24}
//                 color="white"
//                 onClick={toggleModal}
//                 className="bg-gray-700 rounded-xl"
//               />
//             </div>
//           </header>

//           {/* Conditional Rendering for Chat Messages or TalkWithAI */}
//           {isTalkWithAI ? (
//             <TalkWAiContainer /> // Replace Chat Messages with TalkWithAI
//           ) : (
//             <ConvoContainer messages={messages} isLoading={isLoading} />
//           )}

//           <hr className="border-gray-300 my-2" />

//           {/* Input Section - Hidden in TalkWithAI Mode */}
//           {!isTalkWithAI && (
//             <InputTextContainer
//               inputMessage={inputMessage}
//               setInputMessage={setInputMessage}
//               handleSendMessage={handleSendMessage}
//               handleFileChange={handleFileChange}
//             />
//           )}

//           {/* Chat Modal */}
//           <ChatModal isOpen={isModalOpen} onClose={toggleModal} />
//         </div>
//       </div>
//     </Layout>
//   );
// };

// export default ChatScreen;





















// import { useState, useEffect } from "react";
// import { IoMicOutline, IoInformationCircleOutline, IoChatbubbleEllipsesOutline } from "react-icons/io5";
// import Layout from "../../layout/Layout";
// import ChatModal from "../../components/Modals/ChatModal";
// import ConvoContainer from "./ConvoContainer";
// import InputTextContainer from "./InputTextContainer";
// import TalkWithAI from "./TalkWAIContainer";

// const ChatScreen = () => {
//   const [inputMessage, setInputMessage] = useState("");
//   const [messages, setMessages] = useState(() => {
//     const savedMessages = localStorage.getItem("messages");
//     return savedMessages ? JSON.parse(savedMessages) : [];
//   });
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);
//   const [isTalkWithAI, setIsTalkWithAI] = useState(false); // New state for toggling TalkWithAI mode

//   useEffect(() => {
//     localStorage.setItem("messages", JSON.stringify(messages));
//   }, [messages]);

//   const handleSendMessage = () => {
//     if (inputMessage.trim()) {
//       const newMessage = {
//         content: inputMessage,
//         role: "user",
//         timestamp: new Date().toLocaleTimeString(),
//       };
//       setMessages((prevMessages) => [...prevMessages, newMessage]);

//       // Simulate an admin reply
//       const adminReply = {
//         content: "Thank you for your message! How can I assist you further?",
//         role: "admin",
//         timestamp: new Date().toLocaleTimeString(),
//       };
//       setTimeout(() => {
//         setMessages((prevMessages) => [...prevMessages, adminReply]);
//       }, 1000);

//       setInputMessage("");
//       setIsLoading(true);
//       setTimeout(() => {
//         setIsLoading(false);
//       }, 1000);
//     }
//   };

//   const toggleModal = () => {
//     setIsModalOpen((prev) => !prev);
//   };

//   const handleFileChange = (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       const newMessage = {
//         content: `File sent: ${file.name}`,
//         role: "user",
//         timestamp: new Date().toLocaleTimeString(),
//       };
//       setMessages((prevMessages) => [...prevMessages, newMessage]);
//     }
//   };

//   const handleTalkWithAI = () => {
//     setIsTalkWithAI(true); // Enable TalkWithAI mode
//   };

//   return (
//     <Layout>
//       <div className="flex flex-col lg:px-20">
//         <div className="outline-none outline outline-[2px] outline-gray-300 outline-t-1 outline-offset-[-1px] p-3 rounded-sm flex flex-col flex-grow max-h-[calc(100vh-180px)]">
//           <header className="flex justify-between items-center p-4 bg-white shadow-md">
//             <h1 className="text-xl font-bold text-[#537F19]">Chat with PCA</h1>
//             <div className="flex items-center space-x-4">
//               <button onClick={handleTalkWithAI} className="flex items-center bg-[#537F19] text-white px-3 py-1 rounded-full">
//                 <IoMicOutline size={24} />
//                 {/* <IoChatbubbleEllipsesOutline size={24}/> */}
//                 <span className="hidden md:inline ml-2">Talk with AI</span>
//               </button>
//               <IoInformationCircleOutline
//                 size={24}
//                 color="white"
//                 onClick={toggleModal}
//                 className="bg-gray-700 rounded-xl"
//               />
//             </div>
//           </header>

//           {/* Conditional Rendering for Chat Messages or TalkWithAI */}
//           {isTalkWithAI ? (
//             <TalkWithAI /> // Replace Chat Messages with TalkWithAI
//           ) : (
//             <ConvoContainer messages={messages} isLoading={isLoading} />
//           )}

//           <hr className="border-gray-300 my-2" />

//           {/* Input Section - Hidden in TalkWithAI Mode */}
//           {!isTalkWithAI && (
//             <InputTextContainer
//               inputMessage={inputMessage}
//               setInputMessage={setInputMessage}
//               handleSendMessage={handleSendMessage}
//               handleFileChange={handleFileChange}
//             />
//           )}

//           {/* Chat Modal */}
//           <ChatModal isOpen={isModalOpen} onClose={toggleModal} />
//         </div>
//       </div>
//     </Layout>
//   );
// };

// export default ChatScreen;



















// import { useState, useEffect } from 'react';
// import { IoMicOutline, IoInformationCircleOutline } from 'react-icons/io5';
// import Layout from '../../layout/Layout';
// import ChatModal from "../../components/Modals/ChatModal";
// import ConvoContainer from './ConvoContainer';
// import InputTextContainer from './InputTextContainer';

// const ChatScreen = () => {
//   const [inputMessage, setInputMessage] = useState('');
//   const [messages, setMessages] = useState(() => {
//     const savedMessages = localStorage.getItem('messages');
//     return savedMessages ? JSON.parse(savedMessages) : [];
//   });
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);

//   useEffect(() => {
//     localStorage.setItem('messages', JSON.stringify(messages));
//   }, [messages]);

//   const handleSendMessage = () => {
//     if (inputMessage.trim()) {
//       const newMessage = {
//         content: inputMessage,
//         role: 'user',
//         timestamp: new Date().toLocaleTimeString(),
//       };
//       setMessages((prevMessages) => [...prevMessages, newMessage]);

//       // Simulate an admin reply
//       const adminReply = {
//         content: "Thank you for your message! How can I assist you further?",
//         role: 'admin',
//         timestamp: new Date().toLocaleTimeString(),
//       };
//       setTimeout(() => {
//         setMessages((prevMessages) => [...prevMessages, adminReply]);
//       }, 1000);

//       setInputMessage('');
//       setIsLoading(true);
//       setTimeout(() => {
//         setIsLoading(false);
//       }, 1000);
//     }
//   };

//   const toggleModal = () => {
//     setIsModalOpen((prev) => !prev);
//   };

//   const handleFileChange = (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       const newMessage = {
//         content: `File sent: ${file.name}`,
//         role: 'user',
//         timestamp: new Date().toLocaleTimeString(),
//       };
//       setMessages((prevMessages) => [...prevMessages, newMessage]);
//     }
//   };

//   const handleTalkWithAI = () => {
//     // talk with AI
//   };

//   return (
//     <Layout>
//       <div className="flex flex-col lg:px-20">
//         <div className="outline-none outline outline-[2px] outline-gray-300 outline-t-1 outline-offset-[-1px] p-3 rounded-sm flex flex-col flex-grow max-h-[calc(100vh-180px)]">
//           <header className="flex justify-between items-center p-4 bg-white shadow-md">
//             <h1 className="text-xl font-bold text-[#537F19]">Chat with PCA</h1>
//             <div className="flex items-center space-x-4">
//               <button onClick={handleTalkWithAI} className="flex items-center bg-[#537F19] text-white px-3 py-1 rounded-full">
//                 <IoMicOutline size={24} />
//                 <span className="hidden md:inline ml-2">Talk with AI</span>
//               </button>
//               <IoInformationCircleOutline
//                 size={24}
//                 color="white"
//                 onClick={toggleModal}
//                 className="bg-gray-700 rounded-xl"
//               />
//             </div>
//           </header>

//           {/* Chat Messages Section */}
//           <ConvoContainer messages={messages} isLoading={isLoading} />

//           <hr className="border-gray-300 my-2" />

//           {/* Input Section */}
//           <InputTextContainer
//             inputMessage={inputMessage}
//             setInputMessage={setInputMessage}
//             handleSendMessage={handleSendMessage}
//             handleFileChange={handleFileChange}
//           />

//           {/* Chat Modal */}
//           <ChatModal isOpen={isModalOpen} onClose={toggleModal} />
//         </div>
//       </div>
//     </Layout>
//   );
// };

// export default ChatScreen;
















// import { useState, useEffect } from 'react';
// import { IoAttachOutline, IoSend, IoMicOutline, IoInformationCircleOutline } from 'react-icons/io5';
// import Layout from '../../layout/Layout';
// import ChatModal from "../../components/Modals/ChatModal";
// import logo from "../../assets/black.png";

// const ChatScreen = () => {
//   const [inputMessage, setInputMessage] = useState('');
//   const [messages, setMessages] = useState(() => {
//     const savedMessages = localStorage.getItem('messages');
//     return savedMessages ? JSON.parse(savedMessages) : [];
//   });
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);

//   useEffect(() => {
//     localStorage.setItem('messages', JSON.stringify(messages));
//   }, [messages]);

//   const handleSendMessage = () => {
//     if (inputMessage.trim()) {
//       const newMessage = {
//         content: inputMessage,
//         role: 'user',
//         timestamp: new Date().toLocaleTimeString(),
//       };
//       setMessages((prevMessages) => [...prevMessages, newMessage]);

//       // Simulate an admin reply
//       const adminReply = {
//         content: "Thank you for your message! How can I assist you further?",
//         role: 'admin',
//         timestamp: new Date().toLocaleTimeString(),
//       };
//       setTimeout(() => {
//         setMessages((prevMessages) => [...prevMessages, adminReply]);
//       }, 1000); // Simulate a short delay for the admin reply

//       setInputMessage('');
//       setIsLoading(true);
//       setTimeout(() => {
//         setIsLoading(false);
//       }, 1000);
//     }
//   };

//   const toggleModal = () => {
//     setIsModalOpen((prev) => !prev);
//   };

//   const handleFileChange = (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       const newMessage = {
//         content: `File sent: ${file.name}`,
//         role: 'user',
//         timestamp: new Date().toLocaleTimeString(),
//       };
//       setMessages((prevMessages) => [...prevMessages, newMessage]);
//     }
//   };

//   return (
//     <Layout>
//       <div className="flex flex-col lg:px-20">
//         <div className="outline-none outline outline-[2px] outline-gray-300 outline-t-1 outline-offset-[-1px] p-3 rounded-sm flex flex-col flex-grow max-h-[calc(100vh-180px)]"> 
//           <header className="flex justify-between items-center p-4 bg-white shadow-md">
//             <h1 className="text-xl font-bold text-[#537F19]">Chat with PCA</h1>
//             <div className="flex items-center space-x-4">
//               <button className="flex items-center bg-[#537F19] text-white px-3 py-1 rounded-full">
//                 <IoMicOutline size={24} />
//                 <span className="hidden md:inline ml-2">Talk with AI</span>
//               </button>
//               <IoInformationCircleOutline
//                 size={24}
//                 color="white"
//                 onClick={toggleModal}
//                 className="bg-gray-700 rounded-xl"
//               />
//             </div>
//           </header>

//           {/* Chat Messages */}
//           <div className="flex-1 overflow-y-auto px-4 py-2 max-h-[calc(90vh-180px)]">
//             {messages.length === 0 ? (
//               <div className="flex flex-col items-center mt-20">
//                 <img src={logo} alt="Logo" className="w-32 h-32 mb-4" />
//                 <p className="text-gray-500 text-center">How can we help you today? Just type your message.</p>
//               </div>
//             ) : (
//               messages.map((message, index) => (
//                 <div key={index} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"} my-2`}>
//                   {message.role === "admin" && <img src={logo} alt="Admin" className="w-8 h-8 mr-2 rounded-full" />}
//                   <div
//                     className={`px-4 py-2 rounded-lg ${message.role === "user" ? "bg-[#90B74B] text-black" : "bg-gray-200 text-black"}`}
//                   >
//                     <p>{message.content}</p>
//                     <p className="text-xs text-gray-400 text-right">{message.timestamp}</p>
//                   </div>
//                 </div>
//               ))
//             )}
//             {isLoading && (
//               <div className="flex items-center space-x-2">
//                 <img src={logo} className="w-8 h-8 rounded-full" />
//                 <div className="animate-spin border-4 border-green-600 border-t-transparent rounded-full w-5 h-5"></div>
//               </div>
//             )}
//           </div>

//           <hr className="border-gray-300 my-2" />

//           {/* Input Section */}
//           <div className="flex items-center p-4 bg-white shadow-md space-x-2">
//             <input
//               type="text"
//               value={inputMessage}
//               onChange={(e) => setInputMessage(e.target.value)}
//               placeholder="Type your message..."
//               className="flex-1 border border-gray-300 rounded-full px-4 py-2 text-gray-700 outline-none min-w-0"
//             />
//             <button className="text-gray-500">
//               <input
//                 type="file"
//                 onChange={handleFileChange}
//                 className="hidden"
//                 id="file-upload"
//               />
//               <label htmlFor="file-upload" className="cursor-pointer text-gray-500">
//                 <IoAttachOutline size={24} />
//               </label>
//             </button>
//             <button className="text-[#537F19]" onClick={handleSendMessage}>
//               <IoSend size={24} />
//             </button>
//           </div>

//           {/* Chat Modal */}
//           <ChatModal isOpen={isModalOpen} onClose={toggleModal} />
//         </div>
//       </div>
//     </Layout>
//   );
// };

// export default ChatScreen;