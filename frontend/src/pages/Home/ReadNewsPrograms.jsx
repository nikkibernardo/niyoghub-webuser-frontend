import Layout from "../../layout/Layout";
import { useLocation, useNavigate } from "react-router-dom";
import { IoChevronBack } from 'react-icons/io5'; 

const ReadNewsPrograms = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { newsprog } = location.state || {}; 

  const goBack = () => {
    navigate(-1); 
  };

  if (!newsprog) {
    return <p>News & Program not found.</p>;
  }

  return (
    <>
      <Layout>
        <button
          onClick={goBack}
          className="flex items-start justify-start bg-transparent border-none cursor-pointer hover:underline rounded-md"
        >
          <IoChevronBack size={24} color="black" /> Go Back
        </button>

        <div className="bg-[#F3F3F3] p-4 rounded-lg shadow-md">
          <div className="mb-1">
            <img src={newsprog.image} alt={newsprog.title} className="w-full h-64 object-cover rounded-md" />
              <p className="text-[#537F19] text-sm mt-2">
                {newsprog.category}
              </p>
          </div>
          <h1 className="text-start text-3xl font-bold mb-2">{newsprog.title}</h1>
          {/* <p className="text-black">{event.category}</p> */}
          <div className="text-lg font-medium mb-2">{newsprog.dayMos}, {newsprog.year}</div>
          <p className="text-gray-700">{newsprog.description}</p>
        </div>
      </Layout>
    </>
  );
};

export default ReadNewsPrograms;