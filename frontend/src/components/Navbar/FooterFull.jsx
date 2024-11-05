import TermsPolicyModal from "../Modals/TermsPolicyModal";
import { useState, useEffect } from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaGoogle } from "react-icons/fa";
import logoImage from "../../assets/niyoghub.png";

function FooterFull() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  const [isResourcesDropdownOpen, setIsResourcesDropdownOpen] = useState(false); 
  const [isNestedDropdownOpen, setNestedDropdownOpen] = useState(false);

  const toggleResourcesDropdown = () => {
    setIsResourcesDropdownOpen((prev) => !prev);
  };
  const handleClickOutsideResource = (event) => {
    const resourceDropdown = document.getElementById("resources-dropdown");

    if (resourceDropdown && !resourceDropdown.contains(event.target)) {
      setIsResourcesDropdownOpen(false);
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutsideResource); 
    return () => {
      document.removeEventListener("mousedown", handleClickOutsideResource); 
    };
  }, []);

  const toggleNestedDropdown = (e) => {
    e.stopPropagation(); 
    setNestedDropdownOpen((prev) => !prev);
  };

  return (
    <>
      <footer className="bg-[#F1F1F1] border-t border-gray-200 dark:bg-gray-900 w-full px-auto">
        <div >
          
          <div className="pt-4">
            <div className="max-w-screen-xl flex flex-col md:flex-row items-start justify-between mx-auto p-4">
              <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse pr-15 mr-10">
                <img src={logoImage} className="h-6 ml-0 lg:ml-8 xl:ml-8" alt="NiyogHub Logo" />
                <span className="text-black font-bold self-center text-l font-semibold whitespace-nowrap dark:text-white ">
                  NiyogHub
                </span>
              </a>

                <div className="flex flex-end">
                  <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 mr-5 items-start">
                    <li>
                      <a href="/" className="block py-2 px-3 text-white bg-[#537F19] rounded md:bg-transparent md:text-[#537F19] md:p-0" aria-current="page">Home</a>
                    </li>
                    <li>
                      <a href="/about" className="block py-2 px-3 text-gray-900 rounded hover:bg-[#537F19] hover:text-white md:hover:bg-transparent md:hover:text-[#537F19] md:p-0 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white">About</a>
                    </li>

                    <li className={`relative hidden md:block`}>
                      <a
                        type="button"
                        onClick={toggleResourcesDropdown}
                        className="flex items-center block text-gray-900 rounded hover:text-[#537F19]"
                      >
                        <span className="mr-2">Resources</span>
                        <svg
                          className="ml-1 fill-current"
                          width="12"
                          height="8"
                          viewBox="0 0 12 8"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M0.410765 0.910734C0.736202 0.585297 1.26384 0.585297 1.58928 0.910734L6.00002 5.32148L10.4108 0.910734C10.7362 0.585297 11.2638 0.585297 11.5893 0.910734C11.9147 1.23617 11.9147 1.76381 11.5893 2.08924L6.58928 7.08924C6.26384 7.41468 5.7362 7.41468 5.41077 7.08924L0.410765 2.08924C0.0853277 1.76381 0.0853277 1.23617 0.410765 0.910734Z"
                            fill=""
                          />
                        </svg>
                      </a>

                      {isResourcesDropdownOpen && (
                        <ul className="flex flex-col z-50 mt-2 w-48 max-h-60 overflow-y-auto bg-white divide-y divide-gray-100 rounded-lg shadow-lg dark:bg-gray-700 absolute">
                          <li>
                            <a href="/disease-identification" className="block px-4 py-2 text-sm text-gray-700 hover:text-[#537F19]">Disease Identification</a>
                          </li>
                          <li>
                            <a href="/soil-profile" className="block px-4 py-2 text-sm text-gray-700 hover:text-[#537F19]">Soil Profile</a>
                          </li>
                          <li>
                            <a href="/chat-support" className="block px-4 py-2 text-sm text-gray-700 hover:text-[#537F19]">Chat Support</a>
                          </li>
                        </ul>
                      )}
                    </li>

                    <li className={`relative md:hidden`}>
                      <button
                        type="button"
                        className="flex justify-between w-full px-4 py-2 text-gray-900 rounded hover:bg-[#537F19] hover:text-white md:hover:bg-transparent md:hover:text-[#537F19] md:p-0 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white"
                        onClick={toggleNestedDropdown}
                      >
                        Resources
                        <svg
                          className="mt-1.5 -mr-1 h-6 w-5  fill-current"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"

                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M0.410765 0.910734C0.736202 0.585297 1.26384 0.585297 1.58928 0.910734L6.00002 5.32148L10.4108 0.910734C10.7362 0.585297 11.2638 0.585297 11.5893 0.910734C11.9147 1.23617 11.9147 1.76381 11.5893 2.08924L6.58928 7.08924C6.26384 7.41468 5.7362 7.41468 5.41077 7.08924L0.410765 2.08924C0.0853277 1.76381 0.0853277 1.23617 0.410765 0.910734Z"
                            fill=""
                          />
                        </svg>
                      </button>

                      {isNestedDropdownOpen && (
                        <div className="z-10 ml-4 mt-2 w-50 max-h-60 overflow-y-auto origin-top-left bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5">
                          <div className="py-1" role="menu" aria-orientation="vertical">
                            <a
                              href="/disease-identification"
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#537F19] hover:text-white"
                              role="menuitem"
                            >
                              Disease Identification
                            </a>
                            <a
                              href="/soil-profile"
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#537F19] hover:text-white"
                              role="menuitem"
                            >
                              Soil Profile
                            </a>
                            <a
                              href="/chat-support"
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#537F19] hover:text-white"
                              role="menuitem"
                            >
                              Chat Support
                            </a>
                          </div>
                        </div>
                      )}
                    </li>

                    <li>
                      <a href="/faqs" className="block py-2 px-3 text-gray-900 rounded hover:bg-[#537F19] hover:text-white md:hover:bg-transparent md:hover:text-[#537F19] md:p-0 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white">FAQs</a>
                    </li>
                  </ul>
                </div>
              </div>
          </div>

          <div className="max-w-screen-xl mx-auto p-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {/* Address Section */}
            <div className="col-span-1 lg:ml-10 xl:ml-10">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126758.78535058876!2d121.44034993282412!3d13.942697637742328!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33962a3bd59796f9%3A0x569e7a4bb1f07a99!2sManuel%20S.%20Enverga%20University%20Foundation!5e0!3m2!1sen!2sph!4v1686736732398!5m2!1sen!2sph"
                width="100%"
                height="150"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                className="rounded-lg"
              ></iframe>
              <div className="text-sm mt-2">
                <p className="font-bold">Manuel S. Enverga University Foundation</p>
                <p>Enverga Blvd, Ibabang Dupay, Lucena, 4301 Quezon Province</p>
                <p className="mt-2">📞 (123456) 7899</p>
                <p>📧 email@example.com</p>
              </div>
            </div>

            {/* Affiliates Section */}
            <div className="col-span-1">
              <h4 className="font-bold text-lg mb-2">Affiliates</h4>
              <ul className="space-y-1 text-sm">
                <li><a href="#" className="hover:text-gray-600">Link 1</a></li>
                <li><a href="#" className="hover:text-gray-600">Link 2</a></li>
                <li><a href="#" className="hover:text-gray-600">Link 3</a></li>
                <li><a href="#" className="hover:text-gray-600">Link 4</a></li>
                <li><a href="#" className="hover:text-gray-600">Link 5</a></li>
              </ul>
            </div>

            {/* App Download Section */}
            <div className="col-span-1">
              <h4 className="font-bold text-lg mb-2">Download App</h4>
              <div className="space-y-2">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                  alt="Google Play"
                  className="h-10 w-auto"
                />
                <img
                  src="https://developer.apple.com/app-store/marketing/guidelines/images/badge-example-preferred_2x.png"
                  alt="App Store"
                  className="h-10 w-auto"
                />
              </div>
            </div>

            {/* Social Media Section */}
            <div className="col-span-1">
              <h4 className="font-bold text-lg mb-2">Follow Us</h4>
              <div className="flex space-x-3">
                <FaFacebook className="h-6 w-6 hover:text-gray-600" />
                <FaInstagram className="h-6 w-6 hover:text-gray-600" />
                <FaTwitter className="h-6 w-6 hover:text-gray-600" />
                <FaGoogle className="h-6 w-6 hover:text-gray-600" />
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-300 mt-6 pt-4">
          <div className="max-w-screen-xl flex flex-col md:flex-row items-center justify-between mx-auto p-4">
            <span className="text-black text-sm md:text-sm whitespace-nowrap dark:text-white ml-10">
              NiyogHub Team © 2024. All rights reserved.
            </span>

            <button
              onClick={toggleModal}
              className="mt-2 md:mt-0 py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
            >
              <span className="whitespace-nowrap dark:text-white mr-5">
                Terms and Privacy Policy
              </span>
            </button>

            {/* Terms and Privacy Policy Modal */}
            <TermsPolicyModal isOpen={isModalOpen} onClose={toggleModal} />
          </div>
        </div>
      </footer>
    </>
  );
}

export default FooterFull;
