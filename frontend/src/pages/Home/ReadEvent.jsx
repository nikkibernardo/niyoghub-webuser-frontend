import { useLocation, useNavigate } from "react-router-dom";
import { IoChevronBack } from 'react-icons/io5'; 
import Layout from "../../layout/Layout";

const ReadEvent = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { event } = location.state || {}; 

  const goBack = () => {
    navigate(-1); 
  };

  if (!event) {
    return <p>Event not found.</p>;
  }

  return (
    <Layout>
      <div className="">
        <button
          onClick={goBack}
          className="flex items-start justify-start bg-transparent border-none cursor-pointer hover:underline rounded-md"
        >
          <IoChevronBack size={24} color="black" /> Go Back
        </button>
        <h1 className="text-start text-3xl font-bold mt-4 mb-2">{event.title}</h1>

        <div className="bg-[#F3F3F3] p-4 rounded-lg shadow-md">
          <div className="mb-4">
            <img src={event.image} alt={event.title} className="w-full h-64 object-cover rounded-md" />
          </div>
          {/* <p className="text-black">{event.category}</p> */}
          <div className="text-lg font-medium mb-2">{event.dayMos}, {event.year}</div>
          <p className="text-gray-700">{event.description}</p>
        </div>
      </div>
    </Layout>
  );
};

export default ReadEvent;












// import Layout from "../../layout/Layout";
// import { useNavigate } from "react-router-dom";
// import { IoChevronBack } from 'react-icons/io5';

// const ReadEvent = () => {
//   const navigate = useNavigate();

//   const goBack = () => {
//     navigate(-1); 
//   };

//   return (
//     <Layout>
//       <div className="px-4">
//         <button
//           onClick={goBack}
//           className="flex items-start justify-start bg-transparent border-none cursor-pointer hover:underline rounded-md"
//         >
//           <IoChevronBack size={24} color="black" /> Go Back
//         </button>
//         <h1 className="text-start text-3xl font-bold mt-4 mb-2">Read Event</h1>
//       </div>
//     </Layout>
//   );
// };

// export default ReadEvent;