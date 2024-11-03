import LayoutOut from "../../layout/LayoutOut";
import {  useState, useEffect} from "react";
import TwoFactorAuthOTPModal from "../../components/Modals/TwoFactorAuthOTPModal";
import { IoInformationCircleOutline } from 'react-icons/io5';

const Otp = () => {
  // const [otp, setOtp] = useState(Array(6).fill(""));
  const [countdown, setCountdown] = useState(300); // 5 minutes
  const [isCountdownActive, setIsCountdownActive] = useState(true);


  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  const handleResendCode = () => {
    console.log("Resending OTP...");
    setCountdown(300);
    setIsCountdownActive(true);
  };

  useEffect(() => {
    if (isCountdownActive) {
      const timerId = setInterval(() => {
        setCountdown((prev) => {
          if (prev <= 1) {
            clearInterval(timerId);
            setIsCountdownActive(false);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);

      return () => clearInterval(timerId);
    }
  }, [isCountdownActive]);

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
              <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-bold text-center mb-4">Two-Factor Authentication</h1>

                <button  className="text-black">
                  <IoInformationCircleOutline
                      size={24}
                      color="white"
                      onClick={toggleModal}
                      className="bg-gray-700 rounded-xl"
                    />
                </button>
              </div>

              <p className="text-center text-gray-600 mb-6">
                Please enter the One-Time Password (OTP) sent to your registered email to complete the sign-in process.
              </p>

              <div className="flex justify-between mb-6">
                {Array(6).fill().map((_, index) => (
                  <input
                    key={index}
                    // ref={otpRefs[index]}
                    className="w-12 h-12 border border-gray-300 rounded-lg text-center text-xl"
                    maxLength={1}
                    type="text"
                    // value={otp[index]}
                    // onChange={(e) => handleOTPChange(e.target.value, index)}
                  />
                ))}
              </div>

              <div className="flex justify-center mb-2">
                <span>Didn`t get the code? </span>
                <button onClick={handleResendCode} disabled={isCountdownActive} className="ml-1 text-[#90B74B] font-bold">
                  {isCountdownActive ? `Resend code in ${countdown}s` : "Resend Code"}
                </button>
              </div>
              <div className="text-center mb-6 text-gray-600">
                <p>Already have an account? 
                  <a href="/signin" className="text-[#90B74B] hover:underline"> Sign in</a>
                  </p>
              </div>

              <div className="text-center mt-4 text-gray-600 py-2 px-10 bg-[#537F19]">  
                  <a href="/signin" className=" text-white">Verify</a>
              </div>
            </div>
          </div>

        <TwoFactorAuthOTPModal isOpen={isModalOpen} onClose={toggleModal} />
        </section>
      </LayoutOut>
    </>
  );
};

export default Otp;