import LayoutOut from "../../layout/LayoutOut";

const ResetPassword = () => {
  return (
    <>
      <LayoutOut>
        <section
          className="flex flex-col h-screen p-0 items-center"
          style={{ 
              backgroundImage: "url('src/assets/bck-opac.png')", 
              backgroundSize: 'auto 70%',
              backgroundPosition: 'right bottom', 
              backgroundRepeat: 'no-repeat'
          }}
        >
          <div className="flex flex-col justify-center items-center w-full h-screen bg-cover bg-center" style={{ backgroundImage: "url('../../../assets/background.png')" }}>
            <div className="flex flex-col w-full max-w-lg p-6 bg-[#FAFAFA] rounded-lg shadow-lg">
                <h1 className="text-3xl font-bold text-center mb-4">Reset Password</h1>
              <p className="text-center text-gray-600 mb-6">
                Please enter your current password along with your desired new password to reset your account password.
              </p>

              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-700">
                </label>
                <input
                  type="password"
                  placeholder="Current password"
                  className="mt-1 mb-5 p-2 py-3 border border-gray-500 rounded-lg outline-none focus:ring-1 focus:ring-gray-600"
                />
              </div>

              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-700">
                </label>
                <input
                  type="password"
                  placeholder="New password"
                  className="mt-1 mb-5 p-2 py-3 border border-gray-500 rounded-lg outline-none focus:ring-1 focus:ring-gray-600"
                />
              </div>

              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-700">
                </label>
                <input
                  type="password"
                  placeholder="Confirm new password"
                  className="mt-1 mb-5 p-2 py-3 border border-gray-500 rounded-lg outline-none focus:ring-1 focus:ring-gray-600"
                />
              </div>

              <div className="text-center mt-6 text-gray-600 py-2 px-10 bg-[#537F19]">  
                  <a href="/otp" className=" text-white">Change password</a>
              </div>

              <div className="flex justify-center mb-2">
                <div className="text-center my-4 text-gray-600">
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

export default ResetPassword;