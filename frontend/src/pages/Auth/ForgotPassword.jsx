import LayoutOut from "../../layout/LayoutOut";

const ForgotPassword = () => {
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
          <div className="flex flex-col justify-center items-center w-full h-screen bg-cover bg-center" style={{ backgroundImage: "url('../../../assets/background.png')" }}>
            <div className="flex flex-col w-full max-w-lg p-6 bg-[#FAFAFA] rounded-lg shadow-lg">
                <h1 className="text-3xl font-bold text-center mb-4">Forgot Password</h1>
              <p className="text-center text-gray-600 mb-6">
                Please enter your registered email address to receive permission to edit your account password.
              </p>

              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-700">
                </label>
                <input
                  type="email"
                  placeholder="Enter your Email Address"
                  className="mt-1 mb-5 p-2 py-3 border border-gray-500 rounded-lg outline-none focus:ring-1 focus:ring-gray-600"
                />
              </div>

              <div className="text-center mt-6 text-gray-600 py-2 px-10 bg-[#537F19]">  
                  <a href="/reset-password" className=" text-white">Verify</a>
              </div>

              <div className="flex justify-center mb-2">
                <div className="text-center mt-4 text-gray-600">
                  <p>Already have an account? 
                    <a href="/signin" className="text-[#90B74B] hover:underline"> Sign in</a>
                    </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </LayoutOut>
    </>
  );
};

export default ForgotPassword;