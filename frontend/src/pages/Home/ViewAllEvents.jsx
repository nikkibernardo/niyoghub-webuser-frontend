import Layout from "../../layout/Layout";
import { eventData } from "./Events"; 
import { IoChevronBack } from 'react-icons/io5'; 
import { useNavigate } from 'react-router-dom';
import { IoSearch } from 'react-icons/io5';
import { useState } from "react";

const AllEvents = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1); 
  };

  // State to manage search query, filtered events, and pagination
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredEvents, setFilteredEvents] = useState(eventData);
  const [currentPage, setCurrentPage] = useState(1);
  const eventsPerPage = 6; 

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    const filtered = eventData.filter((event) =>
      event.title.toLowerCase().includes(query.toLowerCase()) ||
      event.description.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredEvents(filtered);
    setCurrentPage(1); 
  };

  const indexOfLastEvent = currentPage * eventsPerPage;
  const indexOfFirstEvent = indexOfLastEvent - eventsPerPage;
  const currentEvents = filteredEvents.slice(indexOfFirstEvent, indexOfLastEvent);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const totalPages = Math.ceil(filteredEvents.length / eventsPerPage);

  const handleReadEvent = (event) => {
    navigate('/read-event', { state: { event } });
  };

  return (
    <Layout>
      <div className="">
        <button
          onClick={goBack}
          className="flex items-start justify-start bg-transparent border-none cursor-pointer hover:underline rounded-md"
        >
          <IoChevronBack size={24} color="black" /> Go Back
        </button>
        <h1 className="text-start text-3xl font-bold mt-4 mb-2">Recent Events</h1>

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
      </div>

      {/* Display filtered events */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-4 bg-white">
        {currentEvents.map((event) => (
          <div
            key={event.id}
            onClick={() => handleReadEvent(event)}
            className="bg-white p-2 bg-[#F3F3F3] shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl cursor-pointer"
          >
            <div className="absolute top-3 left-3 bg-[#537F19] text-white text-sm px-4 py-2 rounded-md z-10 text-center">
              <p className="text-md font-semibold">{event.dayMos}</p>
              <p className="text-sm font-semibold">{event.year}</p>
            </div>

            <div className="relative flex flex-row">
              <img
                src={event.image}
                alt={event.title}
                className="w-40 h-52 object-cover rounded"
              />
              <div className="flex flex-col p-2">
                <h3 className="text-lg font-semibold text-black line-clamp-2">{event.title}</h3>
                <p className="text-[#537F19] text-sm mb-2">
                  {event.category}
                </p>
                <p className="line-clamp-4">{event.description}</p>
              </div>
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
  );
};

export default AllEvents;
