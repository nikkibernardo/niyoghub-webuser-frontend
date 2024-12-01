import { useState, useEffect } from "react";
import logoImage from "../../assets/black.png";
import userImage from "../../assets/farmer.png";
import { IoIosArrowDown, IoMdNotifications, IoMdSearch } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { IoMenu, IoSettingsSharp, IoChatboxEllipses, } from "react-icons/io5";
import { MdFeedback } from "react-icons/md";
import { BiSolidLogOut } from "react-icons/bi";

function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); 
  const [isMenuOpen, setIsMenuOpen] = useState(false); 
  const [isResourcesDropdownOpen, setIsResourcesDropdownOpen] = useState(false); 
  const [isNotificationDropdownOpen, setIsNotificationDropdownOpen] = useState(false); 
  const [isNestedDropdownOpen, setNestedDropdownOpen] = useState(false);

  // Toggle notification dropdown visibility
  const toggleNotificationDropdown = () => {
    setIsNotificationDropdownOpen((prev) => !prev);
  };
  const handleClickOutsideNotif = (event) => {
    const notificationDropdown = document.getElementById("notification-dropdown");

    if (notificationDropdown && !notificationDropdown.contains(event.target)) {
      setIsNotificationDropdownOpen(false);
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutsideNotif);
    return () => {
      document.removeEventListener("mousedown", handleClickOutsideNotif);
    };
  }, []);

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

  // Function to toggle the User dropdown
  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };
  const handleClickOutsideUser = (event) => {
    const userDropdown = document.getElementById("user-dropdown");

    if (userDropdown && !userDropdown.contains(event.target)) {
      setIsDropdownOpen(false);
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutsideUser); 
    return () => {
      document.removeEventListener("mousedown", handleClickOutsideUser); 
    };
  }, []);
  
  // Function to toggle the main menu and its nested dropdown for resources
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };
  const toggleNestedDropdown = (e) => {
    e.stopPropagation(); 
    setNestedDropdownOpen((prev) => !prev);
  };

  return (
    <>
      <nav className="bg-white border-b border-gray-200 dark:bg-gray-900 fixed w-full z-10 top-0 px-auto">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="/home-registered" className="flex items-center space-x-3 rtl:space-x-reverse pr-15 mr-2">
            <img src={logoImage} className="h-8 ml-0 lg:ml-10 xl:ml-10" alt="NiyogHub Logo" />
            <span className="text-black font-bold self-center text-xl font-semibold whitespace-nowrap dark:text-white ">
              NiyogHub
            </span>
          </a>

          {/* Search Bar, Notification, and User Buttons */}
          <div className="flex md:order-2 items-end space-x-3 ml-auto">
            <div className="relative flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse"> 
              <div className="flex md:order-1">
                {/* Search button for mobile */}
                <button
                  type="button"
                  data-collapse-toggle="navbar-search"
                  aria-controls="navbar-search"
                  aria-expanded="false"
                  className="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 me-1 relative hidden md:block"
                >
                  <IoMdSearch size={22} className="text-gray-500"/>
                  <span className="sr-only">Search</span>
                </button>
                
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
                
                {/* Notification button */}
                <div className="relative hidden md:block mx-4"> 
                  <button
                    id="notification-dropdown"
                    onClick={toggleNotificationDropdown}
                    className="relative inline-flex items-center text-sm font-medium text-center text-gray-500 hover:text-gray-900 focus:outline-none dark:hover:text-white dark:text-gray-400"
                    type="button"
                  >
                    <IoMdNotifications size={24} className="mt-2 text-gray-600"/>
                    <div className="absolute block w-3 h-3 bg-red-500 border-2 border-white rounded-full -top-0.5 start-2.5 dark:border-gray-900 mt-2"></div>
                  </button> 

                  {isNotificationDropdownOpen && (
                    <div
                      id="notification-dropdown"
                      className="absolute z-50 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-green-900 dark:divide-gray-700 sm:px-2 md:px-4 lg:px-6"
                      aria-labelledby="dropdownNotificationButton"
                    >
                      <div className="block py-2 font-medium text-center text-gray-700 rounded-t-lg bg-gray-50 dark:bg-gray-800 dark:text-white">
                        Notifications
                      </div>
                      <div className="divide-y divide-gray-100 dark:divide-gray-700">
                        <a
                          href="#"
                          className="flex py-1 hover:bg-gray-100 dark:hover:bg-gray-700 sm:flex-col sm:items-start lg:flex-row lg:items-center"
                        >
                          <div className="w-full ps-3">
                            <div className="text-gray-500 text-sm mb-1.5 dark:text-gray-400">
                              <span className="font-semibold text-gray-900 dark:text-white">Bonnie Green</span> liked your photo.
                            </div>
                            <div className="text-xs text-blue-600 dark:text-blue-500">a few seconds ago</div>
                          </div>
                        </a>
                        <a
                          href="#"
                          className="flex py-1 hover:bg-gray-100 dark:hover:bg-gray-700 sm:flex-col sm:items-start lg:flex-row lg:items-center"
                        >
                          <div className="w-full ps-3">
                            <div className="text-gray-500 text-sm mb-1.5 dark:text-gray-400">
                              <span className="font-semibold text-gray-900 dark:text-white">Syd Manalo</span> liked your photo.
                            </div>
                            <div className="text-xs text-blue-600 dark:text-blue-500">a few seconds ago</div>
                          </div>
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="relative flex items-center md:order-3 space-x-3 md:space-x-0 rtl:space-x-reverse">
              <div className="relative">
                <a
                  id="user-menu-button" 
                  aria-expanded={isDropdownOpen}
                  onClick={toggleDropdown}
                  className="flex items-center block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#537F19] md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  <img src={userImage} className="h-6 w-6 rounded-full object-cover" alt="Flowbite Logo" />
                  <span className="mr-2 whitespace-nowrap dark:text-white hidden md:block">NiyogHub User</span>
                  <IoIosArrowDown size={18} className="mr-0 lg:mr-10 xl:mr-10"/>
                </a>
     
                {/* User Dropdown */}
                {isDropdownOpen && (
                  <div className="absolute right-0 z-50 my-2 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow-lg dark:bg-gray-700 dark:divide-gray-600 w-auto min-w-max" id="user-menu-button">
                    <div className="px-4 py-3">
                      <span className="block text-sm text-gray-900 dark:text-white">NiyogHub User</span>
                      <span className="block text-sm text-gray-500 truncate dark:text-gray-400">username@gmail.com</span>
                    </div>
                    <ul className="py-2">
                      <li>
                        <a href="/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white flex flex-row">
                          <FaUser size={16} className="mr-2"/> Profile
                        </a>
                      </li>
                      <li>
                        <a href="/settings" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white flex flex-row">
                          <IoSettingsSharp size={16} className="mr-2"/>Settings
                        </a>
                      </li>
                      <li>
                        <a href="/chat-support" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white flex flex-row">
                          <IoChatboxEllipses size={16} className="mr-2"/> Chat Support
                        </a>
                      </li>
                      <li>
                        <a href="/feedback" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white flex flex-row">
                          <MdFeedback size={16} className="mr-2" />Feedback
                      </a>
                      </li>
                      <hr />
                      <li>
                        <a href="/signin" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white flex flex-row">
                          <BiSolidLogOut size={16} className="mr-2"/> Logout
                      </a>
                      </li>
                    </ul>
                  </div>
                  )}
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
          <div className={`items-start justify-between w-full md:flex md:w-auto md:order-1 ${isMenuOpen ? 'block' : 'hidden'}`} id="navbar-user">
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              {/* Search Bar in Dropdown */}
              <li className="block px-4 lg:hidden md:hidden my-2">
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
                  className="flex justify-between w-full px-4 py-2 text-gray-900 rounded hover:bg-[#537F19] hover:text-white md:hover:bg-transparent md:hover:text-[#537F19] md:p-0 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white"
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
      </nav>
    </>
  );
}

export default Header;


