
import Layout from "../../layout/Layout";
import { useState } from "react";
import SettingsAccountModal from "../../components/Modals/SettingsAccountModal";

const Settings = () => {
  const [activeTab, setActiveTab] = useState("Account");

  const tabClasses = (tabName) =>
    `pb-2 cursor-pointer ${
      activeTab === tabName ? "border-b-2 border-[#537F19] text-black" : "text-gray-400"
    } hover:text-black`;
  


    const [modalVisible, setModalVisible] = useState(false);
    const [currentField, setCurrentField] = useState("");
    const [currentValue, setCurrentValue] = useState("");

    const handleChangeClick = (field, value) => {
      setCurrentField(field);
      setCurrentValue(value);
      setModalVisible(true);
    };

    const handleModalClose = () => {
      setModalVisible(false);
      setCurrentField("");
      setCurrentValue("");
    };

    const handleModalSubmit = (newValue) => {
      // Here you would send `newValue` to your backend or update your state
      console.log(`Updated ${currentField} to:`, newValue);
      handleModalClose();
    };

  return (
    <>
      <Layout>
        <div className="my-container mt-5"> 
          <a href="/" className="flex items-center space-x-2">
            <svg
              className="w-5 h-5 text-black-500 transition"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M15.354 1.646a.5.5 0 0 1 0 .708L9.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
              />
            </svg>
            <span className="text-black-500">Go back</span>
          </a>
        </div>

        <div 
          className="text-start"
        >
          <h3 className="mt-10 text-2xl sm:text-xl leading-normal font-bold tracking-tight text-gray-900">
            USER SETTINGS
          </h3>
        </div>




        <div className="w-full max-w-2xl mx-auto p-4 sm:p-8 lg:p-12">
          <div className="flex space-x-6 border-b border-gray-200 mb-6 justify-start">
            <div className={tabClasses("Account")} onClick={() => setActiveTab("Account")}>
              Account
            </div>
            <div className={tabClasses("Profile")} onClick={() => setActiveTab("Profile")}>
              Profile
            </div>
            <div className={tabClasses("Notifications")} onClick={() => setActiveTab("Notifications")}>
              Notifications
            </div>
          </div>

          {activeTab === "Account" && (
            <div>
              <h2 className="text-2xl font-semibold mb-4">Account Settings</h2>
              <div className="space-y-8">
                <div>
                  <h3 className="text-gray-500 uppercase tracking-wide text-sm">User Preferences</h3>
                  <div className="mt-4 space-y-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="font-semibold">Full Name</p>
                        <p className="text-gray-500">Juan Dela</p>
                      </div>
                      <button className="text-[#537F19] border border-[#537F19] px-4 py-1 rounded-full hover:bg-[#537F19] hover:text-white">
                        Change
                      </button>
                    </div><div className="flex justify-between items-start">
                      <div>
                        <p className="font-semibold">Email Address</p>
                        <p className="text-gray-500">stellaluna@example.com</p>
                      </div>
                      <button className="text-[#537F19] border border-[#537F19] px-4 py-1 rounded-full hover:bg-[#537F19] hover:text-white">
                        Change
                      </button>
                    </div>
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="font-semibold">Contact Number</p>
                        <p className="text-gray-500">+63 912 345 6789</p>
                      </div>
                      <button className="text-[#537F19] border border-[#537F19] px-4 py-1 rounded-full hover:bg-[#537F19] hover:text-white">
                        Change
                      </button>
                    </div>
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="font-semibold">City / Municipality</p>
                        <p className="text-gray-500">Lucena City</p>
                      </div>
                      <button className="text-[#537F19] border border-[#537F19] px-4 py-1 rounded-full hover:bg-[#537F19] hover:text-white">
                        Change
                      </button>
                    </div>
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="font-semibold">Language</p>
                        <p className="text-gray-500">English (US)</p>
                      </div>
                      <button className="text-[#537F19] border border-[#537F19] px-4 py-1 rounded-full hover:bg-[#537F19] hover:text-white">
                        Change
                      </button>
                    </div>
                  </div>

      <div>
        <h3 className="text-gray-500 uppercase tracking-wide text-sm">Password</h3>
        <div className="flex justify-between items-start mt-4">
          <p className="font-semibold">Change password</p>
          <button
            className="text-[#537F19] border border-[#537F19] px-4 py-1 rounded-full hover:bg-[#537F19] hover:text-white"
            onClick={() => handleChangeClick("Password", "******")}
          >
            Change
          </button>
        </div>
      </div>

      {modalVisible && (
        <SettingsAccountModal
          visible={modalVisible}
          field={currentField}
          currentValue={currentValue}
          onClose={handleModalClose}
          onSubmit={handleModalSubmit}
        />
      )}
                </div>

                <div>
                  <h3 className="text-gray-500 uppercase tracking-wide text-sm">Password</h3>
                  <div className="flex justify-between items-start mt-4">
                    <p className="font-semibold">Change password</p>
                    <button className="text-[#537F19] border border-[#537F19] px-4 py-1 rounded-full hover:bg-[#537F19] hover:text-white">
                      Change
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "Profile" && (
            <div>
              <h2 className="text-2xl font-semibold mb-4">Profile Settings</h2>
              {/* Add your Profile settings content here */}
              <p className="text-gray-600">This is where you can edit your profile information.</p>
            </div>
          )}

          {activeTab === "Notifications" && (
            <div>
              <h2 className="text-2xl font-semibold mb-4">Notification Settings</h2>
              {/* Add your Notification settings content here */}
              <p className="text-gray-600">Manage your notification preferences here.</p>
            </div>
          )}
        </div>
       
      </Layout>
    </>
  );
};

export default Settings;