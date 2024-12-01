import { useNavigate } from 'react-router-dom';
import Layout from "../../layout/Layout";
import styles from "../../style";
import { useState } from 'react';
import { IoChevronBack } from 'react-icons/io5'; 
import FAQsImage from "../../assets/FAQsImage.png";

const FAQs = () => {
  const navigate = useNavigate();
  const [openFAQ, setOpenFAQ] = useState(null); 

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index); 
  };

  const goBack = () => {
    navigate(-1); 
  };

  return (
    <>
      <Layout>
        <div className="relative flex-1 overflow-y-auto overflow-hidden ">    
          <div className={`bg-primary ${styles.flexStart}`}>
            <div className={`${styles.boxWidth}`}>
              <div className="flex flex-col items-center py-15 lg:mx-10 xl:mx-10">
                <div className="py-4 bg-white">
                  <div className="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row justify-between items-start">
                    {/* FAQ Content */}
                    <div className="w-full lg:w-2/3">
                      <div className="my-container mt-5"> 
                        <button
                          onClick={goBack}
                          className="flex items-start justify-start bg-transparent border-none cursor-pointer hover:underline rounded-md"
                        >
                          <IoChevronBack size={24} color="black" /> Go Back
                        </button>
                      </div>
                      <div className="text-left mt-8">
                        <h3 className="text-2xl sm:text-3xl leading-normal font-bold tracking-tight text-gray-900">
                          FREQUENTLY ASKED QUESTIONS
                        </h3>
                        <ul className="w-full mt-10 space-y-3">
                          {[
                            "How do I reset my password?",
                            "What should I do if I encounter a bug or error in the app?",
                            "Is there a way to contact customer support directly from the app?",
                            "Can I use the app on multiple devices with the same account?"
                          ].map((question, index) => (
                            <li key={index}>
                              <button
                                className={`relative flex items-center w-full px-5 py-4 text-base font-semibold text-left border border-gray-200 rounded-lg transition-colors ${
                                  openFAQ === index
                                    ? "bg-gray-50 text-gray-900"
                                    : "bg-white text-gray-600 hover:bg-gray-50"
                                }`}
                                aria-expanded={openFAQ === index}
                                onClick={() => toggleFAQ(index)}
                              >
                                <span className="flex-1">{question}</span>
                                <svg
                                  className={`w-5 h-5 ml-auto transition-transform ${
                                    openFAQ === index ? "rotate-180" : ""
                                  }`}
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 20 20"
                                  fill="currentColor"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M5.25 7.5a.75.75 0 011.06 0L10 11.19l3.69-3.69a.75.75 0 111.06 1.06l-4.25 4.25a.75.75 0 01-1.06 0L5.25 8.56a.75.75 0 010-1.06z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                              </button>
                              <div
                                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                                  openFAQ === index ? "max-h-screen" : "max-h-0"
                                }`}
                              >
                                <div className="px-5 py-4 leading-relaxed bg-gray-50 text-gray-700 border-t border-gray-200">
                                  Lorem ipsum dolor ep isum elrum cada forem isda tilapia bangus dilis galunggong lala fishda Lorem ipsum dolor ep isum elrum cada forem isda tilapia bangus dilis galunggong lala fishda
                                </div>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Image Section */}
                    <div className="hidden lg:block lg:w-1/3">
                      <img src={FAQsImage} alt="FAQ Illustration" className="w-full h-auto" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default FAQs;










// import { useNavigate } from 'react-router-dom';
// import Layout from "../../layout/Layout";
// import styles from "../../style";
// import { useState } from 'react';
// import { IoChevronBack } from 'react-icons/io5'; 

// const FAQs = () => {
//   const navigate = useNavigate();
//   const [openFAQ, setOpenFAQ] = useState(null); 

//   const toggleFAQ = (index) => {
//     setOpenFAQ(openFAQ === index ? null : index); 
//   };

//   const goBack = () => {
//     navigate(-1); 
//   };

//   return (
//     <>
//       <Layout>
//         <div className="relative flex-1 overflow-y-auto overflow-hidden ">    
//           <div className={`bg-primary ${styles.flexStart}`}>
//             <div className={`${styles.boxWidth}`}>
//               <div className="flex flex-col items-center py-15 lg:mx-10 xl:mx-10">
//                 <div className="py-4 bg-white">
//                   <div className="max-w-screen-md mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-between">
//                     <div className="my-container mt-5"> 
//                       <button
//                         onClick={goBack}
//                         className="flex items-start justify-start bg-transparent border-none cursor-pointer hover:underline rounded-md"
//                       >
//                         <IoChevronBack size={24} color="black" /> Go Back
//                       </button>
//                     </div>
//                     <div className="text-center">
//                       <p className="text-sm leading-7 text-gray-500 font-regular mt-5">
//                         F.A.Q
//                       </p>
//                       <h3 className="text-2xl sm:text-3xl leading-normal font-bold tracking-tight text-gray-900">
//                         Frequently Asked <span className="text-[#537F19]">Questions</span>
//                       </h3>

//                       <ul className="basis-1/2 mt-10">
//                         <li>
//                           <button
//                             className="relative flex gap-2 items-center w-full py-5 text-base font-semibold text-left border-t md:text-lg border-base-content/10"
//                             aria-expanded={openFAQ === 0}
//                             onClick={() => toggleFAQ(0)}
//                           >
//                             <span className="flex-1 text-base-content">How do I reset my password?</span>
//                             <svg className="flex-shrink-0 w-4 h-4 ml-auto fill-current" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
//                               <rect y="7" width="16" height="2" rx="1" className="transform origin-center transition duration-200 ease-out" />
//                               <rect y="7" width="16" height="2" rx="1" className="transform origin-center rotate-90 transition duration-200 ease-out" />
//                             </svg>
//                           </button>
//                           <div className={`transition-all duration-300 ease-in-out ${openFAQ === 0 ? 'max-h-screen' : 'max-h-0 overflow-hidden'}`}>
//                             <div className="pb-5 leading-relaxed">
//                               <div className="space-y-2 text-start">
//                                 Lorem ipsum dolor ep isum elrum cada forem isda tilapia bangus dilis galunggong lala fishda Lorem ipsum dolor ep isum elrum cada forem isda tilapia bangus dilis galunggong lala fishda
//                               </div>
//                             </div>
//                           </div>
//                         </li>
                        
//                         <li>
//                           <button
//                             className="relative flex gap-2 items-center w-full py-5 text-base font-semibold text-left border-t md:text-lg border-base-content/10"
//                             aria-expanded={openFAQ === 1}
//                             onClick={() => toggleFAQ(1)}
//                           >
//                             <span className="flex-1 text-base-content">What should I do if I encounter a bug or error in the app?</span>
//                             <svg className="flex-shrink-0 w-4 h-4 ml-auto fill-current" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
//                               <rect y="7" width="16" height="2" rx="1" className="transform origin-center transition duration-200 ease-out" />
//                               <rect y="7" width="16" height="2" rx="1" className="transform origin-center rotate-90 transition duration-200 ease-out" />
//                             </svg>
//                           </button>
//                           <div className={`transition-all duration-300 ease-in-out ${openFAQ === 1 ? 'max-h-screen' : 'max-h-0 overflow-hidden'}`}>
//                             <div className="pb-5 leading-relaxed">
//                               <div className="space-y-2 text-start">Lorem ipsum dolor ep isum elrum cada forem isda tilapia bangus dilis galunggong lala fishda Lorem ipsum dolor ep isum elrum cada forem isda tilapia bangus dilis galunggong lala fishda </div>
//                             </div>
//                           </div>
//                         </li>

//                         <li>
//                           <button
//                             className="relative flex gap-2 items-center w-full py-5 text-base font-semibold text-left border-t md:text-lg border-base-content/10"
//                             aria-expanded={openFAQ === 2}
//                             onClick={() => toggleFAQ(2)}
//                           >
//                             <span className="flex-1 text-base-content">Is there a way to contact customer support directly from the app?</span>
//                             <svg className="flex-shrink-0 w-4 h-4 ml-auto fill-current" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
//                               <rect y="7" width="16" height="2" rx="1" className="transform origin-center transition duration-200 ease-out" />
//                               <rect y="7" width="16" height="2" rx="1" className="transform origin-center rotate-90 transition duration-200 ease-out" />
//                             </svg>
//                           </button>
//                           <div className={`transition-all duration-300 ease-in-out ${openFAQ === 2 ? 'max-h-screen' : 'max-h-0 overflow-hidden'}`}>
//                             <div className="pb-5 leading-relaxed">
//                               <div className="space-y-2  text-start">Lorem ipsum dolor ep isum elrum cada forem isda tilapia bangus dilis galunggong lala fishda Lorem ipsum dolor ep isum elrum cada forem isda tilapia bangus dilis galunggong lala fishda </div>
//                             </div>
//                           </div>
//                         </li>
                        
//                         <li>
//                           <button
//                             className="relative flex gap-2 items-center w-full py-5 text-base font-semibold text-left border-t md:text-lg border-base-content/10"
//                             aria-expanded={openFAQ === 3}
//                             onClick={() => toggleFAQ(3)}
//                           >
//                             <span className="flex-1 text-base-content">Can I use the app on multiple devices with the same account?</span>
//                             <svg className="flex-shrink-0 w-4 h-4 ml-auto fill-current" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
//                               <rect y="7" width="16" height="2" rx="1" className="transform origin-center transition duration-200 ease-out" />
//                               <rect y="7" width="16" height="2" rx="1" className="transform origin-center rotate-90 transition duration-200 ease-out" />
//                             </svg>
//                           </button>
//                           <div className={`transition-all duration-300 ease-in-out ${openFAQ === 3 ? 'max-h-screen' : 'max-h-0 overflow-hidden'}`}>
//                             <div className="pb-5 leading-relaxed">
//                               <div className="space-y-2 text-start">Lorem ipsum dolor ep isum elrum cada forem isda tilapia bangus dilis galunggong lala fishda Lorem ipsum dolor ep isum elrum cada forem isda tilapia bangus dilis galunggong lala fishda </div>
//                             </div>
//                           </div>
//                         </li>
//                       </ul>

//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </Layout>
//     </>
//   );
// };

// export default FAQs;