import { useState } from "react";
import logoImage from "../../assets/black.png";
import { IoMdSearch } from "react-icons/io";
import { IoMenu, } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

function HeaderRegisterOut() {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false); 
  
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleSignin = () => {
    navigate('/signin'); 
  };

  const handleSignup = () => {
    navigate('/signup'); 
  };

  return (
    <>
      <nav className="bg-white border-b border-gray-200 dark:bg-gray-900 fixed w-full z-10 top-0 px-auto">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse pr-15 mr-10">
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
          <div className={`items-start justify-between w-full md:flex md:w-auto md:order-1 ${isMenuOpen ? 'block' : 'hidden'}`} id="navbar-user">
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
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
                <a href="/about-out" className="block py-2 px-3 text-gray-900 rounded hover:bg-[#537F19] hover:text-white md:hover:bg-transparent md:hover:text-[#537F19] md:p-0 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white">About</a>
              </li>

              <li>
                <a href="/faqs-out" className="block py-2 px-3 text-gray-900 rounded hover:bg-[#537F19] hover:text-white md:hover:bg-transparent md:hover:text-[#537F19] md:p-0 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white">FAQs</a>
              </li>

              {/* Sign In and Register Buttons in Dropdown */}
              <li className="flex flex-row items-center space-y-2 px-4 md:hidden lg:hidden mt-1">
                <button onClick={handleSignin} className="w-full px-5 py-2 border border-[#537F19] text-[#537F19] font-medium rounded-md hover:bg-[#537F19] hover:text-white transition mr-1">
                  Sign In
                </button>
                <button onClick={handleSignup} className="ml-1 w-full px-5 py-2 bg-[#537F19] text-white font-medium rounded-md hover:opacity-90 transition">
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




// import { useState } from "react";
// import logoImage from "../../assets/black.png";
// import { IoMdSearch } from "react-icons/io";
// import { IoMenu } from "react-icons/io5";

// function HeaderRegisterOut() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen((prev) => !prev);
//   };

//   return (
//     <>
//       <nav className="bg-white border-b border-gray-200 dark:bg-gray-900 fixed w-full z-10 top-0 px-auto">
//         <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
//           {/* Logo Section */}
//           <a
//             href="/"
//             className="flex items-center space-x-3 rtl:space-x-reverse"
//           >
//             <img src={logoImage} className="h-8" alt="NiyogHub Logo" />
//             <span className="text-black font-bold text-xl whitespace-nowrap dark:text-white">
//               NiyogHub
//             </span>
//           </a>

//           {/* Desktop Navigation Links */}
//           <div className="hidden md:flex space-x-6">
//             <a
//               href="/about-out"
//               className="text-gray-900 hover:text-[#537F19] dark:text-white dark:hover:text-[#537F19] transition"
//             >
//               About
//             </a>
//             <a
//               href="/faqs-out"
//               className="text-gray-900 hover:text-[#537F19] dark:text-white dark:hover:text-[#537F19] transition"
//             >
//               FAQs
//             </a>
//           </div>

//           {/* Mobile Menu Toggle */}
//           <button
//             type="button"
//             className="md:hidden p-2 text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
//             onClick={toggleMenu}
//           >
//             <IoMenu size={28} />
//             <span className="sr-only">Open menu</span>
//           </button>
//         </div>

//         {/* Dropdown Menu for Tablet and Mobile */}
//         <div
//           className={`md:hidden ${isMenuOpen ? "block" : "hidden"} bg-white dark:bg-gray-900 rounded-lg shadow-md`}
//         >
//           <ul className="flex flex-col py-2 space-y-2">
//             <li>
//               <a
//                 href="/about-out"
//                 className="block py-2 px-4 text-gray-900 hover:bg-[#537F19] hover:text-white dark:text-white dark:hover:bg-gray-700"
//               >
//                 About
//               </a>
//             </li>
//             <li>
//               <a
//                 href="/faqs-out"
//                 className="block py-2 px-4 text-gray-900 hover:bg-[#537F19] hover:text-white dark:text-white dark:hover:bg-gray-700"
//               >
//                 FAQs
//               </a>
//             </li>

//             {/* Search Bar in Dropdown */}
//             <li className="block px-4">
//               <div className="relative">
//                 <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
//                   <IoMdSearch size={22} className="text-gray-500" />
//                 </div>
//                 <input
//                   type="text"
//                   id="search-navbar"
//                   className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-full bg-gray-50 focus:ring-[#537F19] focus:border-[#537F19] dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#537F19] dark:focus:border-[#537F19]"
//                   placeholder="Search..."
//                 />
//               </div>
//             </li>

//             {/* Sign In and Register Buttons in Dropdown */}
//             <li className="flex flex-col items-center space-y-2 px-4">
//               <button className="w-full px-5 py-2 border border-[#537F19] text-[#537F19] font-medium rounded-md hover:bg-[#537F19] hover:text-white transition">
//                 Sign In
//               </button>
//               <button className="w-full px-5 py-2 bg-[#537F19] text-white font-medium rounded-md hover:opacity-90 transition">
//                 Register
//               </button>
//             </li>
//           </ul>
//         </div>
//       </nav>
//     </>
//   );
// }

// export default HeaderRegisterOut;
