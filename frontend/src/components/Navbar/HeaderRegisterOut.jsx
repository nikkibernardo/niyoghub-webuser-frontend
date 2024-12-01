import { useState, useEffect } from "react";
import logoImage from "../../assets/black.png";
import { IoMdSearch } from "react-icons/io";
import { IoMenu, } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";

function HeaderRegisterOut() {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false); 
  const [isResourcesDropdownOpen, setIsResourcesDropdownOpen] = useState(false); 
  const [isNestedDropdownOpen, setNestedDropdownOpen] = useState(false);

  // Modal for resources 
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const openModal = (message) => {
    setModalMessage(message);
    setIsModalOpen(true);
  };
  const closeModal = () => setIsModalOpen(false);
  
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleSignin = () => {
    navigate('/signin'); 
  };

  const handleSignup = () => {
    navigate('/signup'); 
  };

  // Function to toggle the Resources dropdown
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
      <nav className="bg-white border-b border-gray-200 dark:bg-gray-900 fixed w-full z-10 top-0 px-auto">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse pr-15 mr-2">
            <img src={logoImage} className="h-8 ml-0 lg:ml-10 xl:ml-10" alt="NiyogHub Logo" />
            <span className="text-black font-bold self-center text-xl font-semibold whitespace-nowrap dark:text-white ">
              NiyogHub
            </span>
          </a>

          {/* Search Bar, Notification, and User Buttons */}
          <div className="flex md:order-2 items-end space-x-3 ml-auto">
            <div className="relative flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse"> 
              <div className="flex md:order-1">
                {/* Search input for desktop */}
                <div className="relative hidden md:block">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <IoMdSearch size={22} className="text-gray-500"/>
                    <span className="sr-only">Search icon</span>
                  </div>
                  <input
                    type="text"
                    id="search-navbar"
                    className="block w-half p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-full bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Search..."
                  />
                </div>
              </div>
            </div>

            <div className="relative flex items-center md:order-3 space-x-3 md:space-x-0 rtl:space-x-reverse">
               <div className="relative">
                <div className="relative hidden md:block">
                  <div className=" flex flex-row">
                    <a href="/signin"
                    className="flex items-center py-2 px-6 text-[#537F19] border border-[#537F19] rounded-md mr-2"
                    >
                      <span className="mr-2 whitespace-nowrap dark:text-white hidden md:block">Sign in</span>
                    </a>
                    <a href="/signup"
                      className="flex items-center py-2 px-6 bg-[#537F19] rounded-md mr-10"
                    >
                      <span className="mr-2 whitespace-nowrap text-white hidden md:block">Register</span>
                    </a>
                  </div>
                </div>
              </div>

              <button
                type="button"
                className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                onClick={toggleMenu}
                aria-expanded={isMenuOpen}
              >
                <span className="sr-only">Open main menu</span>
                <IoMenu size={35}/>
              </button>
            </div>
          </div>

          {/* Main Menu for Medium and Small Screens */}
          <div className={`ml-0 items-start justify-between w-full md:flex md:w-auto md:order-1 ${isMenuOpen ? 'block' : 'hidden'}`} id="navbar-user">
            <ul className="flex flex-col font-medium p-4 md:p-0 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              {/* Search Bar in Dropdown */}
              <li className="block px-4 lg:hidden md:hidden">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <IoMdSearch size={22} className="text-gray-500" />
                  </div>
                  <input
                    type="text"
                    id="search-navbar"
                    className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-full bg-gray-50 focus:ring-black focus:border-black dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-black dark:focus:border-black"
                    placeholder="Search..."
                  />
                </div>
              </li>
              <li>
                <a href="/" className="ml-0 block py-2 px-3 text-gray-900 rounded hover:bg-[#537F19] hover:text-white md:hover:bg-transparent md:hover:text-[#537F19] md:p-0 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white">Home</a>
              </li>
              <li>
                <a href="/about-out" className="ml-0 block py-2 px-3 text-gray-900 rounded hover:bg-[#537F19] hover:text-white md:hover:bg-transparent md:hover:text-[#537F19] md:p-0 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white">About</a>
              </li>
              <li className={`relative hidden md:block`}>
                <a
                  type="button"
                  onClick={toggleResourcesDropdown}
                  className="flex items-center block text-gray-900 rounded hover:text-[#537F19]"
                >
                  <span className="mr-2">Resources</span>
                  <IoIosArrowDown size={18}/>
                </a>

                {isResourcesDropdownOpen && (
                  <ul className="flex flex-col z-50 mt-2 w-48 max-h-60 overflow-y-auto bg-white divide-y divide-gray-100 rounded-lg shadow-lg dark:bg-gray-700 absolute">
                    <li>
                      <button
                        onClick={() => openModal("To use the Disease Identification service, please log in first to NiyogHub.")}
                        className="block px-4 py-2 text-sm text-gray-700 hover:text-[#537F19]"
                      >
                        Disease Identification
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => openModal("To use the Soil Profile Service, please log in first to NiyogHub.")}
                        className="block px-4 py-2 text-sm text-gray-700 hover:text-[#537F19]"
                      >
                        Soil Profile
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => openModal("To use the Chat Support Service, please log in first to NiyogHub.")}
                        className="block px-4 py-2 text-sm text-gray-700 hover:text-[#537F19]"
                      >
                        Chat Support
                      </button>
                    </li>
                  </ul>
                )}
              </li>

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

              <li className={`relative md:hidden`}>
                <button
                  type="button"
                  className="flex justify-between w-full px-4 py-2 text-gray-900 rounded hover:bg-[#537F19] hover:text-white md:hover:bg-transparent md:hover:text-[#537F19] md:p-0 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white"
                  onClick={toggleNestedDropdown}
                >
                  Resources
                  <IoIosArrowDown size={18}/>
                </button>

                {isNestedDropdownOpen && (
                  <div className="z-10 ml-4 mt-2 w-50 max-h-60 overflow-y-auto origin-top-left bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5">
                    <div className="py-1" role="menu" aria-orientation="vertical">
                      <button
                        onClick={() => openModal("To use the Disease Identification service, please log in first to NiyogHub.")}
                        className="block px-4 py-2 text-sm text-gray-700 hover:text-[#537F19]"
                      >
                        Disease Identification
                      </button>
                      <button
                        onClick={() => openModal("To use the Soil Profile Service, please log in first to NiyogHub.")}
                        className="block px-4 py-2 text-sm text-gray-700 hover:text-[#537F19]"
                      >
                        Soil Profile
                      </button>
                      <button
                        onClick={() => openModal("To use the Chat Support Service, please log in first to NiyogHub.")}
                        className="block px-4 py-2 text-sm text-gray-700 hover:text-[#537F19]"
                      >
                        Chat Support
                      </button>
                    </div>
                  </div>
                )}
              </li>
              <li>
                <a href="/faqs-out" className="block py-2 px-3 text-gray-900 rounded hover:bg-[#537F19] hover:text-white md:hover:bg-transparent md:hover:text-[#537F19] md:p-0 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white">FAQs</a>
              </li>

              {/* Sign In and Register Buttons in Dropdown */}
              <li className="flex flex-row items-center space-y-1 px-4 md:hidden lg:hidden mt-1">
                <button onClick={handleSignin} className="w-full px-5 py-1 border border-[#537F19] text-[#537F19] font-medium rounded-md hover:bg-[#537F19] hover:text-white transition mr-1">
                  Sign In
                </button>
                <button onClick={handleSignup} className="ml-1 w-full px-5 py-1 bg-[#537F19] text-white font-medium rounded-md hover:opacity-90 transition">
                  Register
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default HeaderRegisterOut;

