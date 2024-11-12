import Layout from "../../layout/Layout";
import { useState } from "react";
import { FaRegImage } from "react-icons/fa6";

const Settings = () => {
  const [activeTab, setActiveTab] = useState("Account");

  /////ACCOUNT
  const [accountInfo, setAccountInfo] = useState([
    { label: "Full Name", value: "Juan Dela" },
    { label: "Email Address", value: "stellaluna@example.com" },
    { label: "Contact Number", value: "+63 912 345 6789" },
    { label: "City / Municipality", value: "Lucena City" },
    { label: "Language", value: "English (US)" },
    { label: "Password", value: "Change Password" }
  ]);
  
  const [currentField, setCurrentField] = useState("");
  const [newValue, setNewValue] = useState("");

  const tabClasses = (tabName) =>
    `pb-2 cursor-pointer ${
      activeTab === tabName ? "border-b-2 border-[#537F19] text-black" : "text-gray-400"
    } hover:text-black`;

  const openModal = (field) => {
    setCurrentField(field);
    const modal = document.getElementById("settingsModal");
    modal.style.display = "flex";
  };

  const closeModal = () => {
    const modal = document.getElementById("settingsModal");
    modal.style.display = "none";
    setNewValue("");  // Reset new value on close
  };

  const handleSave = () => {
    setAccountInfo((prevInfo) =>
      prevInfo.map((item) =>
        item.label === currentField ? { ...item, value: newValue || item.value } : item
      )
    );
    closeModal();
  };

  ///////PROFILE 
  const [profileInfo, setProfileInfo] = useState({
    // displayName: "Juan Dela",
    profilePicture: "../../assets/eli.png", 
  });
  const [currentFieldProf, setCurrentFieldProf] = useState("");

  const [newDisplayName, setNewDisplayName] = useState([
    { label: "Full Name", value: "Juan Dela" },
  ]);

  const handleSaveProf = () => {
    setNewDisplayName((prevInfo) =>
      prevInfo.map((item) =>
        item.label === currentField ? { ...item, value: newValue || item.value } : item
      )
    );
    closeModalProf();
  };

  const openModalProf = (field) => {
    setCurrentField(field);
    const modal = document.getElementById("profileModal");
    modal.style.display = "flex";
  };
  const closeModalProf = () => {
    const modal = document.getElementById("profileModal");
    modal.style.display = "none";
    setNewValue(""); 
  };

  const handleProfilePictureUpload = (e) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setProfileInfo({ ...profileInfo, profilePicture: event.target.result });
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };


  //////NOTIFICATION TOGGLES
  const [isToggledChat, setIsToggledChat] = useState(true);
  const handleToggleChat = () => {
    setIsToggledChat(prevState => !prevState);
  };

  const [isToggledNewsProg, setIsToggledNewsProg] = useState(true);
  const handleToggleNewsProg = () => {
    setIsToggledNewsProg(prevState => !prevState);
  };

  const [isToggledEvents, setIsToggledEvents] = useState(true);
  const handleToggleEvents = () => {
    setIsToggledEvents(prevState => !prevState);
  };

  const [isToggledAnnouncement, setIsToggledAnnouncement] = useState(true);
  const handleToggleAnnouncement = () => {
    setIsToggledAnnouncement(prevState => !prevState);
  };

  return (
    <>
      <Layout>
        <div className="my-container mt-5">
          <a href="/" className="flex items-start space-x-2">
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

        <div className="text-start">
          <h3 className="mt-10 text-2xl sm:text-xl leading-normal font-bold tracking-tight text-gray-900">
            USER SETTINGS
          </h3>
        </div>

        <div className="w-full max-w-2xl mx-auto p-4 sm:p-8 lg:p-12 items-start justify-start">
          <div className="flex space-x-6 border-b border-gray-200 mb-6">
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
                    {accountInfo.map((item, index) => (
                      <div key={index} className="flex justify-between items-start">
                        <div>
                          <p className="font-semibold">{item.label}</p>
                          <p className="text-gray-500">{item.value}</p>
                        </div>
                        <button
                          onClick={() => openModal(item.label)}
                          className="text-[#537F19] border border-[#537F19] px-4 py-1 rounded-full hover:bg-[#537F19] hover:text-white"
                        >
                          Change
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Settings Modal */}
          <div
            id="settingsModal"
            style={{ display: "none" }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
          >
            <div className="bg-white p-6 rounded-lg shadow-lg w-80 max-w-full">
              <h2 className="text-xl font-semibold mb-4">Change {currentField}</h2>
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded mb-4"
                placeholder={`New ${currentField}`}
                value={newValue}
                onChange={(e) => setNewValue(e.target.value)}
              />
              <div className="flex justify-end space-x-2">
                <button
                  onClick={closeModal}
                  className="px-4 py-2 rounded bg-gray-300 hover:bg-gray-400"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSave}
                  className="px-4 py-2 rounded bg-[#537F19] text-white hover:bg-[#406116]"
                >
                  Save
                </button>
              </div>
            </div>
          </div>


          {/* PROFILE TAB */}
          {activeTab === "Profile" && (
            <div>
              <h2 className="text-2xl font-semibold mb-4">Profile Settings</h2>
              <div className="space-y-8">
                <div>
                  <h3 className="text-gray-500 uppercase tracking-wide text-sm">Profile Information</h3>
                  
                  {/* Display Name */}
                  <div className="mt-4 space-y-4">
                    {newDisplayName.map((item, index) => (
                      <div key={index} className="flex justify-between items-start">
                        <div>
                          <p className="font-semibold">{item.label}</p>
                          <p className="text-gray-500">{item.value}</p>
                        </div>
                        <button
                          onClick={() => openModalProf(item.label)}
                          className="text-[#537F19] border border-[#537F19] px-4 py-1 rounded-full hover:bg-[#537F19] hover:text-white"
                        >
                          Change
                        </button>
                      </div>
                    ))}
                  </div>

                  <div className="flex space-x-8 mt-6">
                    {/* Current Profile Picture */}
                    <div className="text-center">
                      <p className="font-semibold mb-2">Current Profile Picture</p>
                      <img
                        src={profileInfo.profilePicture}
                        alt="Profile"
                        className="w-40 h-40  border p-2"
                      />
                    </div>

                    {/* Profile Picture Upload */}
                    <div className="text-center rounded-lg w-40">
                      <p className="font-semibold mb-2">Update Profile Picture</p>
                      <label
                        htmlFor="profilePictureUpload"
                        className="flex flex-col items-center cursor-pointer  border p-4"
                      >
                        <div className="text-[#537F19] bg-white p-2 rounded-full mb-2 ">
                        <FaRegImage size={40}/>
                        </div>
                        <span className="text-white bg-[#537F19] border border-[#537F19] px-4 py-1 rounded-large hover:text-[#537F19] hover:bg-white mb-2">
                          Browse
                        </span>
                        <span className="text-gray-400">or drag a file here</span>
                        <input
                          id="profilePictureUpload"
                          type="file"
                          className="hidden"
                          accept="image/*"
                          onChange={handleProfilePictureUpload}
                        />
                      </label>
                    </div>
                  </div>
                  
                </div>
              </div>
            </div>
          )}

          {/* PROFILE MODAL */}
          <div
            id="profileModal"
            style={{ display: "none" }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
          >
            <div className="bg-white p-6 rounded-lg shadow-lg w-80 max-w-full">
              <h2 className="text-xl font-semibold mb-4">Change {currentFieldProf}</h2>
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded mb-4"
                placeholder={`New ${currentField}`}
                value={newValue}
                onChange={(e) => setNewValue(e.target.value)}
              />
              <div className="flex justify-end space-x-2">
                <button
                  onClick={closeModalProf}
                  className="px-4 py-2 rounded bg-gray-300 hover:bg-gray-400"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSaveProf}
                  className="px-4 py-2 rounded bg-[#537F19] text-white hover:bg-[#406116]"
                >
                  Save
                </button>
              </div>
            </div>
          </div>

          {/* NOTIFICATION TAB */}
          {activeTab === "Notifications" && (
            <div>
              <h2 className="text-2xl font-semibold mb-4">Notification Settings</h2>
              <div className="space-y-8">
                <div>
                  <h3 className="text-gray-500 uppercase tracking-wide text-sm mt-4">Updates</h3>
                  <div className="mt-4 space-y-4">
                      <div className="flex justify-between items-start">
                        <p className="font-semibold">Announcement</p>
                        <div
                          onClick={handleToggleAnnouncement}
                          className={`relative inline-flex items-center cursor-pointer w-12 h-6 rounded-full transition-all 
                            ${isToggledAnnouncement ? 'bg-[#537F19]' : 'bg-gray-300'}`}
                        >
                          <span
                            className={`inline-block w-5 h-5 bg-white rounded-full transition-transform transform 
                              ${isToggledAnnouncement ? 'translate-x-6' : 'translate-x-0'}`}
                          />
                        </div>
                      </div>
                      <div className="flex justify-between items-start">
                        <p className="font-semibold">Event</p>
                        <div
                          onClick={handleToggleEvents}
                          className={`relative inline-flex items-center cursor-pointer w-12 h-6 rounded-full transition-all 
                            ${isToggledEvents ? 'bg-[#537F19]' : 'bg-gray-300'}`}
                        >
                          <span
                            className={`inline-block w-5 h-5 bg-white rounded-full transition-transform transform 
                              ${isToggledEvents ? 'translate-x-6' : 'translate-x-0'}`}
                          />
                        </div>
                      </div>
                      <div className="flex justify-between items-start">
                        <p className="font-semibold">News & Program</p>
                        <div
                          onClick={handleToggleNewsProg}
                          className={`relative inline-flex items-center cursor-pointer w-12 h-6 rounded-full transition-all 
                            ${isToggledNewsProg ? 'bg-[#537F19]' : 'bg-gray-300'}`}
                        >
                          <span
                            className={`inline-block w-5 h-5 bg-white rounded-full transition-transform transform 
                              ${isToggledNewsProg ? 'translate-x-6' : 'translate-x-0'}`}
                          />
                        </div>
                      </div>
                  </div>
                </div>
              </div>
              <hr className="mt-4"/>
              <div className="space-y-8">
                <div>
                  <h3 className="text-gray-500 uppercase tracking-wide text-sm mt-4">Messages</h3>
                    <div className="flex justify-between items-start">
                      <p className="font-semibold">Chat Messages</p>
                      <div
                        onClick={handleToggleChat}
                        className={`relative inline-flex items-center cursor-pointer w-12 h-6 rounded-full transition-all 
                          ${isToggledChat ? 'bg-[#537F19]' : 'bg-gray-300'}`}
                      >
                        <span
                          className={`inline-block w-5 h-5 bg-white rounded-full transition-transform transform 
                            ${isToggledChat ? 'translate-x-6' : 'translate-x-0'}`}
                        />
                      </div>
                    </div>
                </div>
              </div>
            </div>
          )}

        </div>
      </Layout>
    </>
  );
};

export default Settings;







// import Layout from "../../layout/Layout";
// import { useState } from "react";
// // import SettingsAccountModal from "../../components/Modals/SettingsAccountModal";

// const Settings = () => {
//   const [activeTab, setActiveTab] = useState("Account");

//   const tabClasses = (tabName) =>
//     `pb-2 cursor-pointer ${
//       activeTab === tabName ? "border-b-2 border-[#537F19] text-black" : "text-gray-400"
//     } hover:text-black`;
  

//   return (
//     <>
//       <Layout>
//         <div className="my-container mt-5"> 
//           <a href="/" className="flex items-center space-x-2">
//             <svg
//               className="w-5 h-5 text-black-500 transition"
//               xmlns="http://www.w3.org/2000/svg"
//               width="20"
//               height="20"
//               fill="currentColor"
//               viewBox="0 0 20 20"
//             >
//               <path
//                 fillRule="evenodd"
//                 d="M15.354 1.646a.5.5 0 0 1 0 .708L9.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
//               />
//             </svg>
//             <span className="text-black-500">Go back</span>
//           </a>
//         </div>

//         <div 
//           className="text-start"
//         >
//           <h3 className="mt-10 text-2xl sm:text-xl leading-normal font-bold tracking-tight text-gray-900">
//             USER SETTINGS
//           </h3>
//         </div>

//         <div className="w-full max-w-2xl mx-auto p-4 sm:p-8 lg:p-12">
//           <div className="flex space-x-6 border-b border-gray-200 mb-6 justify-start">
//             <div className={tabClasses("Account")} onClick={() => setActiveTab("Account")}>
//               Account
//             </div>
//             <div className={tabClasses("Profile")} onClick={() => setActiveTab("Profile")}>
//               Profile
//             </div>
//             <div className={tabClasses("Notifications")} onClick={() => setActiveTab("Notifications")}>
//               Notifications
//             </div>
//           </div>

//           {activeTab === "Account" && (
//             <div>
//               <h2 className="text-2xl font-semibold mb-4">Account Settings</h2>
//               <div className="space-y-8">
//                 <div>
//                   <h3 className="text-gray-500 uppercase tracking-wide text-sm">User Preferences</h3>
//                   <div className="mt-4 space-y-4">
//                     <div className="flex justify-between items-start">
//                       <div>
//                         <p className="font-semibold">Full Name</p>
//                         <p className="text-gray-500">Juan Dela</p>
//                       </div>
//                       <button className="text-[#537F19] border border-[#537F19] px-4 py-1 rounded-full hover:bg-[#537F19] hover:text-white">
//                         Change
//                       </button>
//                     </div><div className="flex justify-between items-start">
//                       <div>
//                         <p className="font-semibold">Email Address</p>
//                         <p className="text-gray-500">stellaluna@example.com</p>
//                       </div>
//                       <button className="text-[#537F19] border border-[#537F19] px-4 py-1 rounded-full hover:bg-[#537F19] hover:text-white">
//                         Change
//                       </button>
//                     </div>
//                     <div className="flex justify-between items-start">
//                       <div>
//                         <p className="font-semibold">Contact Number</p>
//                         <p className="text-gray-500">+63 912 345 6789</p>
//                       </div>
//                       <button className="text-[#537F19] border border-[#537F19] px-4 py-1 rounded-full hover:bg-[#537F19] hover:text-white">
//                         Change
//                       </button>
//                     </div>
//                     <div className="flex justify-between items-start">
//                       <div>
//                         <p className="font-semibold">City / Municipality</p>
//                         <p className="text-gray-500">Lucena City</p>
//                       </div>
//                       <button className="text-[#537F19] border border-[#537F19] px-4 py-1 rounded-full hover:bg-[#537F19] hover:text-white">
//                         Change
//                       </button>
//                     </div>
//                     <div className="flex justify-between items-start">
//                       <div>
//                         <p className="font-semibold">Language</p>
//                         <p className="text-gray-500">English (US)</p>
//                       </div>
//                       <button className="text-[#537F19] border border-[#537F19] px-4 py-1 rounded-full hover:bg-[#537F19] hover:text-white">
//                         Change
//                       </button>
//                     </div>
//                   </div>
//                 </div>

//                 <hr />

//                 <div>
//                   <h3 className="text-gray-500 uppercase tracking-wide text-sm">Password</h3>
//                   <div className="flex justify-between items-start mt-4">
//                     <p className="font-semibold">Change password</p>
//                     <button className="text-[#537F19] border border-[#537F19] px-4 py-1 rounded-full hover:bg-[#537F19] hover:text-white">
//                       Change
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           )}



//           {activeTab === "Profile" && (
//             <div>
//               <h2 className="text-2xl font-semibold mb-4">Profile Settings</h2>
//               {/* Add your Profile settings content here */}
//               <p className="text-gray-600">This is where you can edit your profile information.</p>
//             </div>
//           )}

//           {activeTab === "Notifications" && (
//             <div>
//               <h2 className="text-2xl font-semibold mb-4">Notification Settings</h2>
//               {/* Add your Notification settings content here */}
//               <p className="text-gray-600">Manage your notification preferences here.</p>
//             </div>
//           )}
//         </div>
       
//       </Layout>
//     </>
//   );
// };

// export default Settings;