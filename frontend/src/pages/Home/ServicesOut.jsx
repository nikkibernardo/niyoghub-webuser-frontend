// import disease from "../../assets/disease.png";
// import soil from "../../assets/soil.png";
// import chat from "../../assets/chat.png";
import { useState } from "react";

const ServicesOut = () => {
  // Modal for resources 
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const openModal = (message) => {
    setModalMessage(message);
    setIsModalOpen(true);
  };
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <section id="services" className="flex flex-col items-center py-10">
        <div className="w-full flex flex-col items-center lg:px-10  xl:px-0 sm:px-16 px-6 ml-0 lg:ml-10 ">
          <h1 className="font-bold text-[35px] ss:text-[50px] text-center mt-5">SERVICES WE OFFER</h1>

          {/* services Button */}
          <div className="w-full flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0 sm:space-x-4 mt-4 lg:px-10 mb-10">
            {/* Tree Disease Identification */}
            <button
              onClick={() => openModal("To use the Disease Identification service, please log in first to NiyogHub.")}
              className="group flex flex-col sm:flex-row justify-center items-center border border-[#537F19] rounded-lg p-6 bg-white shadow hover:shadow-lg cursor-pointer transition-all w-[380px] h-[140px] hover:bg-gradient-to-r hover:from-[#578D10] hover:to-[#EACD40] hover:border-transparent text-center sm:text-left"
            >
              <div className="flex sm:flex-row flex-col items-center sm:items-start justify-center">
                <div className="w-12 h-12 text-[#537F19] group-hover:text-[#AD8F00] transition-colors mr-3 mb-2 sm:mb-0">
                  {/* Tree Icon */}
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C9.24 2 7 4.24 7 7c0 2.51 1.86 4.6 4.28 4.94V17h-3.5v5h8v-5h-3.5v-5.06c2.42-.34 4.28-2.43 4.28-4.94 0-2.76-2.24-5-5-5z" />
                  </svg>
                </div>
                <p className="text-[22px] font-bold text-[#537F19] group-hover:text-white transition-colors">
                  TREE DISEASE IDENTIFICATION
                </p>
              </div>
            </button>

            {/* Soil Profile */}
            <button
              onClick={() => openModal("To use the Soil Profile Service, please log in first to NiyogHub.")}
              className="group flex items-center border border-[#537F19] rounded-lg p-6 bg-white shadow hover:shadow-lg cursor-pointer transition-all w-[380px] h-[140px] hover:bg-gradient-to-r hover:from-[#578D10] hover:to-[#EACD40] hover:border-transparent"
            >
              {/* Icon */}
              <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center text-[#537F19] group-hover:text-[#AD8F00] transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                  <circle cx="12" cy="12" r="10" fill="currentColor" />
                  <path d="M4 14h16v1H4zM6 17h12v1H6zM2 11h20v1H2z" fill="white" />
                  <path d="M12 6l-3 3h2v5h2V9h2l-3-3z" fill="white" />
                </svg>
              </div>
              {/* Text */}
              <div className="ml-4 flex items-center">
                <p className="text-[22px] font-bold text-[#537F19] group-hover:text-white transition-colors">
                  SOIL PROFILE
                </p>
              </div>
            </button>

            {/* Real-Time Chat Support */}
            <button
              onClick={() => openModal("To use the Chat Support Service, please log in first to NiyogHub.")}
              className="group flex flex-col sm:flex-row justify-center items-center border border-[#537F19] rounded-lg p-6 bg-white shadow hover:shadow-lg cursor-pointer transition-all w-[380px] h-[140px] hover:bg-gradient-to-r hover:from-[#578D10] hover:to-[#EACD40] hover:border-transparent text-center sm:text-left"
            >
              <div className="flex sm:flex-row flex-col items-center sm:items-start justify-center">
                <div className="w-12 h-12 text-[#537F19] group-hover:text-[#AD8F00] transition-colors mr-3 mb-2 sm:mb-0">
                  {/* Chat Icon */}
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M2 12c0 3.31 2.69 6 6 6h1v4l4-4h5c3.31 0 6-2.69 6-6s-2.69-6-6-6H8c-3.31 0-6 2.69-6 6zm15 0c0-2.76-2.24-5-5-5s-5 2.24-5 5 2.24 5 5 5 5-2.24 5-5z" />
                  </svg>
                </div>
                <p className="text-[22px] font-bold text-[#537F19] group-hover:text-white transition-colors">
                  REAL-TIME CHAT SUPPORT
                </p>
              </div>
            </button>

            {/* Popup Modal for Resources Services*/}
            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                  <div className="bg-white rounded-lg shadow-lg max-w-sm w-full p-6">
                    <h2 className="text-lg font-semibold text-gray-800 mb-4">Please Log In</h2>
                    <p className="text-gray-600 mb-6">{modalMessage}</p>
                    <div className="flex justify-end space-x-4">
                      <button
                        onClick={closeModal}
                        className="px-4 py-2 text-sm text-gray-600 border rounded hover:bg-gray-100"
                      >
                        Cancel
                      </button>
                      <a
                        href="/signin"
                        className="px-4 py-2 text-sm text-white bg-[#537F19] rounded hover:bg-[#3e6213]"
                      >
                        Log In
                      </a>
                    </div>
                  </div>
                </div>
              )}
          </div>

        </div>
      </section>
    </>
  );
};

export default ServicesOut;



