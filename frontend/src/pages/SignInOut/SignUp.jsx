import LayoutOut from "../../layout/LayoutOut";
import TermsPolicyModal from "../../components/Modals/TermsPolicyModal";
import { useState } from 'react';

const SignUp = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };
  return (
    <>
      <LayoutOut>
        <section
          id="sign-in"
          className={`flex md:flex-col flex-col`} 
          style={{ 
            backgroundImage: "url('src/assets/bck-opac.png')", 
            backgroundSize: 'auto 70%',
            backgroundPosition: 'right bottom', 
            backgroundRepeat: 'no-repeat'
          }}
        >
          <div className="flex items-center justify-center min-h-screen p-4 pt-4 md:pt-6">
            <div className="bg-[#F1F1F1] shadow-lg rounded-lg p-6 w-full max-w-4xl relative overflow-auto">
              <h2 className="absolute top-0 left-0 bg-black text-white py-3 px-7 sm:px-25 md:px-25 lg:px-40 rounded-br-lg font-semibold text-base md:text-lg lg:text-xl">
                Create an account
              </h2>
              <form className="grid grid-cols-1 md:grid-cols-2 gap-4 p-5">
                {/* First Name */}
                <div className="flex flex-col mt-12">
                  <label className="text-sm font-medium text-gray-700">
                    First Name <span className="text-red-500">*</span>
                  </label>
                <input
                  type="text"
                  placeholder="Enter your First Name"
                  className="mt-1 p-2 border border-gray-500 rounded-lg outline-none focus:ring-1 focus:ring-gray-600"
                />
              </div>

              {/* Password */}
              <div className="flex flex-col lg:mt-12 md:mt-12">
                <label className="text-sm font-medium text-gray-700">
                  Password <span className="text-red-500">*</span>
                </label>
                <input
                  type="password"
                  placeholder="Enter your Password"
                  className="mt-1 p-2 border border-gray-500 rounded-lg outline-none focus:ring-1 focus:ring-gray-600"
                />
              </div>

              {/* Last Name */}
              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-700">
                  Last Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter your Last Name"
                  className="mt-1 p-2 border border-gray-500 rounded-lg outline-none focus:ring-1 focus:ring-gray-600"
                />
              </div>

              {/* Confirm Password */}
              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-700">
                  Confirm Password <span className="text-red-500">*</span>
                </label>
                <input
                  type="password"
                  placeholder="Re-enter your Password"
                  className="mt-1 p-2 border border-gray-500 rounded-lg outline-none focus:ring-1 focus:ring-gray-600"
                />
              </div>

              {/* Email Address */}
              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-700">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  placeholder="Enter your Email Address"
                  className="mt-1 p-2 border border-gray-500 rounded-lg outline-none focus:ring-1 focus:ring-gray-600"
                />
              </div>

              {/* City / Municipality */}
              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-700">
                  City / Municipality <span className="text-red-500">*</span>
                </label>
                <select className="mt-1 p-2 border border-gray-500 rounded-lg outline-none focus:ring-1 focus:ring-gray-600">
                  <option>Select City / Municipality</option>
                  <option>Lucena City</option>
                  <option>Tayabas City</option>
                  <option>Agdangan</option>
                  <option>Alabat</option>
                  <option>Atimonan</option>
                  <option>Buenavista</option>
                  <option>Burdeos</option>
                  <option>Calauag</option>
                  <option>Candelaria</option>
                  <option>Catanauan</option>
                  <option>Dolores</option>
                  <option>General Luna</option>
                  <option>General Nakar</option>
                  <option>Guinayangan</option>
                  <option>Gumaca</option>
                  <option>Infanta</option>
                  <option>Jomalig</option>
                  <option>Lopez</option>
                  <option>Lucban</option>
                  <option>Macalelon</option>
                  <option>Mauban</option>
                  <option>Mulanay</option>
                  <option>Padre Burgos</option>
                  <option>Pagbilao</option>
                  <option>Panukulan</option>
                  <option>Patnanungan</option>
                  <option>Perez</option>
                  <option>Pitogo</option>
                  <option>Plaridel</option>
                  <option>Polillo</option>
                  <option>Quezon</option>
                  <option>Real</option>
                  <option>Sampaloc</option>
                  <option>San Andres</option>
                  <option>San Antonio</option>
                  <option>San Francisco</option>
                  <option>San Narciso</option>
                  <option>Sariaya</option>
                  <option>Tagkawayan</option>
                  <option>Unisan</option>
                </select>
              </div>

              {/* Phone Number */}
              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-700">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  placeholder="Enter your Phone Number"
                  className="mt-1 p-2 border border-gray-500 rounded-lg outline-none focus:ring-1 focus:ring-gray-600"
                />
              </div>

              {/* Language */}
              <div className="flex flex-col">
                <label className="text-sm font-medium text-black-700">
                  Language <span className="text-red-500">*</span>
                </label>
                <select className="mt-1 p-2 border border-gray-500 rounded-lg outline-none focus:ring-1 focus:ring-gray-600">
                  <option>Select Language</option>
                  <option>Filipino</option>
                  <option>English</option>
                </select>
              </div>

              {/* Terms and Conditions */}
              <div className="col-span-1 md:col-span-2 flex items-start mt-6">
                <input type="checkbox" className="mr-2 mt-1" />
                <p className="text-sm text-gray-700">
                  By signing up, you acknowledge and agree to our{' '}
                  <button
                    onClick={toggleModal} className="text-[#537F19] underline">
                    Terms & Privacy Policy
                  </button>. You may receive SMS notifications from us and can opt out at any time.
                </p>
              </div>

              {/* Sign Up Button */}
              <div className="col-span-1 md:col-span-2 w-full px-4 md:px-8 lg:px-12 xl:px-20 bg-[#537F19] text-white py-2 hover:bg-[#3B5B12] transition duration-200 rounded-tr-lg rounded-bl-lg text-center mt-15">
                <a href="/signin" type="submit" className=" w-full px-20 bg-[#537F19] text-white py-2 hover:bg-[#3B5B12] transition duration-200 rounded-tr-lg rounded-bl-lg text-center">
                  Sign up
                </a> 
              </div>

              {/* Sign In Link */}
              <div className="col-span-1 md:col-span-2 text-center">
                <p className="text-sm text-gray-700">
                  Already have an account?{' '}
                  <a href="/signin" className="text-[#537F19] underline">
                    Sign in
                  </a>
                </p>
              </div>
            </form>
            </div>
            <TermsPolicyModal isOpen={isModalOpen} onClose={toggleModal} />
          </div>
        </section>
      </LayoutOut>
    </>
  );
};

export default SignUp;