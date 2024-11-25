import Layout from "../../layout/Layout";
import { useNavigate } from "react-router-dom";
import { IoChevronBack } from 'react-icons/io5'; 
import { IoSearch } from 'react-icons/io5';
import { useState } from "react";
import { newsprogData } from "./NewsPrograms"; 

const AllNewsPrograms = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1); 
  };

  // State to manage search query, filtered events, and pagination
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredNewsProg, setFilteredNewsProg] = useState(newsprogData);
  const [currentPage, setCurrentPage] = useState(1);
  const newsProgPerPage = 6; 

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    const filtered = newsprogData.filter((event) =>
      event.title.toLowerCase().includes(query.toLowerCase()) ||
      event.description.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredNewsProg(filtered);
    setCurrentPage(1); 
  };

  const indexOfLastEvent = currentPage * newsProgPerPage;
  const indexOfFirstEvent = indexOfLastEvent - newsProgPerPage;
  const currentNewsProg = filteredNewsProg.slice(indexOfFirstEvent, indexOfLastEvent);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const totalPages = Math.ceil(filteredNewsProg.length / newsProgPerPage);

  const handleReadNewsProg = (newsprog) => {
    navigate('/read-news-programs', { state: { newsprog } });
  };

  return (
    <>
      <Layout>
        <button
          onClick={goBack}
          className="flex items-start justify-start bg-transparent border-none cursor-pointer hover:underline rounded-md"
        >
          <IoChevronBack size={24} color="black" /> Go Back
        </button>
        
        <h1 className="text-start text-3xl font-bold mt-4 mb-2">Recent News & Programs</h1>

        {/* Search Bar */}
        <div className="mb-4 relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3">
            <IoSearch className="fill-current text-gray-500 w-5 h-5" />
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearch} 
            className="bg-[#F3F3F3] w-full py-2 border border-stroke rounded-md dark:bg-gray-700 dark:text-white pl-10"
            placeholder="Search events..."
          />
        </div>
      {/* </div> */}

      {/* Display filtered events */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-4 bg-white">
        {currentNewsProg.map((newsprog) => (
          <div
            key={newsprog.id}
            onClick={() => handleReadNewsProg(newsprog)}
            className="bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300 transition-transform transform hover:scale-105 cursor-pointer"
          >
            <img
              src={newsprog.image}
              alt={newsprog.title}
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="p-4">
              <p className="text-[#537F19] text-sm mb-2">
                {newsprog.category}
              </p>
              <p className="text-gray-500 text-sm">
                {newsprog.dayMos}, {newsprog.year}
              </p>
              <h2 className="text-lg font-bold text-gray-800 mt-1">
                {newsprog.title}
              </h2>
              <p className="text-gray-600 text-sm mt-2">
                {newsprog.description.substring(0, 100)}...
              </p>
            </div>
          </div>
        ))}
      </div>

      {totalPages > 1 && (
        <div className="flex justify-start space-x-2 mt-6">
          <button
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-4 py-2 text-black rounded-md disabled:opacity-50"
          >
            Previous
          </button>

          {[...Array(totalPages).keys()].map((page) => (
            <button
              key={page + 1}
              onClick={() => paginate(page + 1)}
              className={`px-4 py-2 rounded-md ${currentPage === page + 1 ? 'bg-[#537F19] text-white' : 'bg-transparent text-black'}`}
            >
              {page + 1}
            </button>
          ))}

          <button
            onClick={() => paginate(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-4 py-2  text-black rounded-md disabled:opacity-50"
          >
            Next
          </button>
        </div>
      )}

      </Layout>
    </>
  );
};

export default AllNewsPrograms;