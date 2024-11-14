import TermsPolicyModal from "../Modals/TermsPolicyModal";
import { useState, useEffect } from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaGoogle } from "react-icons/fa";
import logoImage from "../../assets/niyoghub.png";
import { IoIosArrowDown } from "react-icons/io";

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
                  <ul className="flex flex-row font-medium md:p-0 mt-4 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 mr-5 items-start">
                    <li>
                      <a href="/" className="block py-2 px-3 rounded text-black hover:text-[#537F19] hover:underline" aria-current="page">Home</a>
                    </li>
                    <li>
                      <a href="/about" className="block py-2 px-3 rounded text-black hover:text-[#537F19] hover:underline">About</a>
                    </li>

                    <li className={`relative hidden md:block`}>
                      <a
                        type="button"
                        onClick={toggleResourcesDropdown}
                        className="flex items-center block rounded block py-2 px-3 rounded text-black hover:text-[#537F19] hover:underline"
                      >
                        <span className="mr-2">Resources</span>
                        <IoIosArrowDown size={18}/>
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
                        className="flex justify-between w-full px-4 py-2 rounded block py-2 px-3 rounded text-black hover:text-[#537F19] hover:underline"
                        onClick={toggleNestedDropdown}
                      >
                        Resources
                        <IoIosArrowDown size={18}/>
                      </button>

                      {isNestedDropdownOpen && (
                        <div className="z-10 ml-4 mt-2 w-50 max-h-60 overflow-y-auto origin-top-left bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5">
                          <div className="py-1" role="menu" aria-orientation="vertical">
                            <a
                              href="/disease-identification"
                              className="block px-4 py-2 text-sm block py-2 px-3 rounded text-black hover:text-[#537F19] hover:underline"
                              role="menuitem"
                            >
                              Disease Identification
                            </a>
                            <a
                              href="/soil-profile"
                              className="block px-4 py-2 text-sm block py-2 px-3 rounded text-black hover:text-[#537F19] hover:underline"
                              role="menuitem"
                            >
                              Soil Profile
                            </a>
                            <a
                              href="/chat-support"
                              className="block px-4 py-2 text-sm block py-2 px-3 rounded text-black hover:text-[#537F19] hover:underline"
                              role="menuitem"
                            >
                              Chat Support
                            </a>
                          </div>
                        </div>
                      )}
                    </li>

                    <li>
                      <a href="/faqs" className="block py-2 px-3 rounded block py-2 px-3 rounded text-black hover:text-[#537F19] hover:underline">FAQs</a>
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
            <div className="col-span-1 ml-0 xl:ml-10 lg:ml-10">
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
