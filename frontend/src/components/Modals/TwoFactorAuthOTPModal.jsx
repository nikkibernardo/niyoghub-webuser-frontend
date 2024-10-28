import PropTypes from 'prop-types';

const TwoFactorAuthOTPModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative w-full max-w-2xl bg-white rounded-lg shadow-lg p-6 mx-10">
        <div className="flex justify-between items-center border-b pb-4">
          <div className="flex flex-col">
            <h2 className="text-xl font-bold text-gray-800">WHAT IS TWO FACTOR AUTHENTICATION (OTP)?</h2>
            <h5 className="text-l text-gray-600">Last Updated October 2024</h5>
          </div>
        </div>
        <div className="mt-4 space-y-4">
          <p className="text-gray-700">OTP verification, or One-Time Password verification, is a security measure used to protect your online accounts and transactions. <br />
          When you sign up or log in to a website or app, especially for sensitive activities like banking or shopping, you may receive a unique OTP code either through text message, email, or a dedicated authentication

          This code is usually valid for a short period and can only be used 

          It’s purpose is to confirm that you are the rightful owner of the account and that the login attempt is genuine. <br />

          By entering the OTP code, you add an extra layer of security to prevent unauthorized access to your personal information and ensure the safety of your online activities. <br /> </p>
        </div>
        <div className="items-center mt-6 flex justify-end space-x-3 border-t pt-4">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-[#90B74B] hover:bg-[#3B5B12] text-white rounded-ss"
          >
            I understand
          </button>
        </div>
      </div>
    </div>
  );
};

TwoFactorAuthOTPModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default TwoFactorAuthOTPModal;