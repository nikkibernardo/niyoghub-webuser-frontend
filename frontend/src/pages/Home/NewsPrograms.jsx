import { useNavigate } from "react-router-dom";

export const newsprogData = [
  {
    id: 1,
    category: 'News&Program',
    title: 'News&Program#1 - PCA Partners With Sustainable Coconut Partnership for International Roundtable',
    description:
      'The Philippine Coconut Authority, in collaboration with the Sustainable Coconut Partnership, successfully hosted the Sustainable Coconut Roundtable 2024 from September 23-28, 2024, at the Sheraton Hotel Manila...',
    image: 'src/assets/newsprog1.png', 
    dayMos: '18 Dec',
    year: '2024',
  },
  {
    id: 2,
    category: 'News&Program',
    title: 'News&Program#2 - Bolstering Global Market Linkages: PCA Showcases PH Coconut Industry at SIAL Paris',
    description:
      'The Philippine Coconut Authority (PCA) showcased the Philippines’ thriving coconut industry at the 2024 Salon International de l’Alimentation (SIAL)...',
    image: 'src/assets/newsprog2.png', 
    dayMos: '19 Sept',
    year: '2024',
  },
  {
    id: 3,
    category: 'News&Program',
    title: 'News&Program#3 - PCA Partners With Sustainable Coconut Partnership for International Roundtable',
    description:
      'The Philippine Coconut Authority, in collaboration with the Sustainable Coconut Partnership, successfully hosted the Sustainable Coconut Roundtable 2024 from September 23-28, 2024, at the Sheraton Hotel Manila...',
    image: 'src/assets/newsprog1.png',  
    dayMos: '22 Aug',
    year: '2023',
  },
  {
    id: 4,
    category: 'News&Program',
    title: 'News&Program#4 - Bolstering Global Market Linkages: PCA Showcases PH Coconut Industry at SIAL Paris',
    description:
      'The Philippine Coconut Authority (PCA) showcased the Philippines’ thriving coconut industry at the 2024 Salon International de l’Alimentation (SIAL)...',
    image: 'src/assets/newsprog2.png', 
    dayMos: '19 July',
    year: '2023',
  },
  {
    id: 5,
    category: 'News&Program',
    title: 'News&Program#5 - PCA Partners With Sustainable Coconut Partnership for International Roundtable',
    description:
      'The Philippine Coconut Authority, in collaboration with the Sustainable Coconut Partnership, successfully hosted the Sustainable Coconut Roundtable 2024 from September 23-28, 2024, at the Sheraton Hotel Manila...',
    image: 'src/assets/newsprog1.png', 
    dayMos: '12 Jan',
    year: '2024',
  },
  {
    id: 6,
    category: 'News&Program',
    title: 'News&Program#6 - Bolstering Global Market Linkages: PCA Showcases PH Coconut Industry at SIAL Paris',
    description:
      'The Philippine Coconut Authority (PCA) showcased the Philippines’ thriving coconut industry at the 2024 Salon International de l’Alimentation (SIAL)...',
    image: 'src/assets/newsprog2.png', 
    dayMos: '8 Aug',
    year: '2023',
  },
  {
    id: 7,
    category: 'News&Program',
    title: 'News&Program#7 - PCA Partners With Sustainable Coconut Partnership for International Roundtable',
    description:
      'The Philippine Coconut Authority, in collaboration with the Sustainable Coconut Partnership, successfully hosted the Sustainable Coconut Roundtable 2024 from September 23-28, 2024, at the Sheraton Hotel Manila...',
    image: 'src/assets/newsprog1.png', 
    dayMos: '19 July',
    year: '2023',
  },
  {
    id: 8,
    category: 'News&Program',
    title: 'News&Program#8 - Bolstering Global Market Linkages: PCA Showcases PH Coconut Industry at SIAL Paris',
    description:
      'The Philippine Coconut Authority (PCA) showcased the Philippines’ thriving coconut industry at the 2024 Salon International de l’Alimentation (SIAL)...',
    image: 'src/assets/newsprog2.png', 
    dayMos: '4 Jan',
    year: '2023',
  },
];

const NewsPrograms = () => {
  const navigate = useNavigate();
  const displayedNewsProg = newsprogData.slice(0, 6);

  const handleReadNewsProg = (newsprog) => {
    navigate('/read-news-programs', { state: { newsprog } });
  };

  return (
    <>
      <section id="news-programs" className="flex flex-col items-center py-10">
        <div className="w-full flex flex-col items-center lg:px-10 xl:px-0 sm:px-16 px-6 ml-0 lg:ml-10">
          <h1 className="font-bold text-[30px] ss:text-[45px] text-center mt-5">
            RECENT NEWS & PROGRAMS
          </h1>

          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 lg:px-10 mb-10 ">
            {displayedNewsProg.map((newsprog) => (
              <div
                key={newsprog.id}
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300 transition-transform transform hover:scale-105 cursor-pointer"
                onClick={() => handleReadNewsProg(newsprog)}
              >
                <img
                  src={newsprog.image}
                  alt={newsprog.title}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <div className="p-4">
                  <p className="text-gray-500 text-sm">
                    {newsprog.dayMos}, {newsprog.year}
                  </p>
                  <h2 className="text-lg font-bold text-gray-800 mt-2">
                    {newsprog.title}
                  </h2>
                  <p className="text-gray-600 text-sm mt-2">
                    {newsprog.description.substring(0, 100)}...
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-4 py-2 px-10">
            <a
              href="/all-news-programs"
              className="bg-[#537F19] text-white px-6 py-3 rounded-sm font-medium hover:bg-[#6E9F33] transition duration-300"
            >
              View All News and Programs
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default NewsPrograms;