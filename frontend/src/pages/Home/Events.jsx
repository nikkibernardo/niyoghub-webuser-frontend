import { useNavigate } from "react-router-dom";

export const eventData = [
  {
    id: 1,
    category: 'Event',
    title: 'Event#1 - PCA Partners With Sustainable Coconut Partnership for International Roundtable',
    description:
      'The Philippine Coconut Authority, in collaboration with the Sustainable Coconut Partnership, successfully hosted the Sustainable Coconut Roundtable 2024 from September 23-28, 2024, at the Sheraton Hotel Manila...',
    image: 'src/assets/event.png', 
    dayMos: '18 Dec',
    year: '2024',
  },
  {
    id: 2,
    category: 'Event',
    title: 'Event#2 - Bolstering Global Market Linkages: PCA Showcases PH Coconut Industry at SIAL Paris',
    description:
      'The Philippine Coconut Authority (PCA) showcased the Philippines’ thriving coconut industry at the 2024 Salon International de l’Alimentation (SIAL)...',
    image: 'src/assets/event2.png', 
    dayMos: '19 Sept',
    year: '2024',
  },
  {
    id: 3,
    category: 'Event',
    title: 'Event#3 - PCA Partners With Sustainable Coconut Partnership for International Roundtable',
    description:
      'The Philippine Coconut Authority, in collaboration with the Sustainable Coconut Partnership, successfully hosted the Sustainable Coconut Roundtable 2024 from September 23-28, 2024, at the Sheraton Hotel Manila...',
    image: 'src/assets/event.png',  
    dayMos: '22 Aug',
    year: '2023',
  },
  {
    id: 4,
    category: 'Event',
    title: 'Event#4 - Bolstering Global Market Linkages: PCA Showcases PH Coconut Industry at SIAL Paris',
    description:
      'The Philippine Coconut Authority (PCA) showcased the Philippines’ thriving coconut industry at the 2024 Salon International de l’Alimentation (SIAL)...',
    image: 'src/assets/event2.png', 
    dayMos: '19 July',
    year: '2023',
  },
  {
    id: 5,
    category: 'Event',
    title: 'Event#5 - PCA Partners With Sustainable Coconut Partnership for International Roundtable',
    description:
      'The Philippine Coconut Authority, in collaboration with the Sustainable Coconut Partnership, successfully hosted the Sustainable Coconut Roundtable 2024 from September 23-28, 2024, at the Sheraton Hotel Manila...',
    image: 'src/assets/event.png', 
    dayMos: '12 Jan',
    year: '2024',
  },
  {
    id: 6,
    category: 'Event',
    title: 'Event#6 - Bolstering Global Market Linkages: PCA Showcases PH Coconut Industry at SIAL Paris',
    description:
      'The Philippine Coconut Authority (PCA) showcased the Philippines’ thriving coconut industry at the 2024 Salon International de l’Alimentation (SIAL)...',
    image: 'src/assets/event2.png', 
    dayMos: '8 Aug',
    year: '2023',
  },
  {
    id: 7,
    category: 'Event',
    title: 'Event#7 - PCA Partners With Sustainable Coconut Partnership for International Roundtable',
    description:
      'The Philippine Coconut Authority, in collaboration with the Sustainable Coconut Partnership, successfully hosted the Sustainable Coconut Roundtable 2024 from September 23-28, 2024, at the Sheraton Hotel Manila...',
    image: 'src/assets/event.png', 
    dayMos: '19 July',
    year: '2023',
  },
  {
    id: 8,
    category: 'Event',
    title: 'Event#8 - Bolstering Global Market Linkages: PCA Showcases PH Coconut Industry at SIAL Paris',
    description:
      'The Philippine Coconut Authority (PCA) showcased the Philippines’ thriving coconut industry at the 2024 Salon International de l’Alimentation (SIAL)...',
    image: 'src/assets/event2.png', 
    dayMos: '4 Jan',
    year: '2023',
  },
];

const Events = () => {
  const navigate = useNavigate();
  const displayedEvents = eventData.slice(0, 6);

  const handleReadEvent = (event) => {
    navigate('/read-event', { state: { event } });
  };

  return (
    <>
      <section id="events" className="flex flex-col items-center py-10">
        <div className="w-full flex flex-col items-center lg:px-10 xl:px-0 sm:px-16 px-6 ml-0 lg:ml-10 ">
          <h1 className="font-bold text-[30px] ss:text-[45px] text-center mt-5">EVENTS</h1>

          <div className="w-full flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 mt-4 lg:px-10 mb-10">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-4 justify-center items-center">
              {displayedEvents.map((event) => (
                <div
                  key={event.id}
                  className="relative bg-white shadow-lg rounded-lg transition-transform transform hover:scale-105 hover:shadow-xl justify-between mx-7 cursor-pointer"
                  onClick={() => handleReadEvent(event)}
                >
                  <div className="absolute top-3 left-[-45px] bg-[#537F19] text-white text-md px-6 py-2 rounded-md z-10 text-center">
                    <p className="text-lg font-semibold text-white">{event.dayMos}</p>
                    <p className="text-md font-semiregular text-white">{event.year}</p>
                  </div>

                  <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-52 object-cover"
                    />
                    <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black to-transparent text-start">
                      <h3 className="text-lg font-semibold text-white line-clamp-2">{event.title}</h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center text-gray-600 py-2 px-10 bg-[#537F19] mb-2">  
            <a href="/all-events" className=" text-white">View All Events</a>
          </div>

        </div>
      </section>
    </>
  );
};

export default Events;
