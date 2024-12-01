import { useState } from "react";

const Announcement = () => {
  const slides = [
    { id: 1, image: 'src/assets/event.png', alt: "Slide 1" },
    { id: 2, image: 'src/assets/event2.png', alt: "Slide 2" },
    { id: 3, image: 'src/assets/newsprog1.png', alt: "Slide 3" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <>
      <section id="announcement" className="flex flex-col items-center py-16 bg-white">
          <h1 className="text-4xl sm:text-5xl text-center mb-4 font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#EDCE3B] to-[#877522]">
            ANNOUNCEMENT FOR COCONUT FARMERS
          </h1>
          <p className="text-center text-gray-600 px-4 mb-6">
            Discover the latest announcements and tailored events crafted exclusively for coconut farmers.
            < br/>
            From vital industry updates to skill-enhancement initiatives, we arededicated to nurturing your success.
          </p>

          {/* Carousel Container */}
          <div className="w-[1000px] h-[350px] rounded-lg relative shadow-lg overflow-hidden bg-black bg-opacity-50">
            {/* Slide Image */}
            <img
              src={slides[currentIndex].image}
              alt={slides[currentIndex].alt}
              className="w-full h-full object-cover"
            />

            {/* Navigation Buttons */}
            <button
              onClick={handlePrev}
              className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-[#2E2E2E] text-[#FFDE42] px-3 py-2 rounded-full"
            >
              &#8592; {/* Left Arrow */}
            </button>
            <button
              onClick={handleNext}
              className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-[#2E2E2E] text-[#FFDE42] px-3 py-2 rounded-full"
            >
              &#8594; {/* Right Arrow */}
            </button>

            {/* Dot Indicators */}
            <div className="absolute bottom-4 flex justify-center w-full space-x-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full ${
                    currentIndex === index ? "bg-yellow-500" : "bg-gray-400"
                  }`}
                  onClick={() => setCurrentIndex(index)}
                ></button>
              ))}
            </div>
          </div>

      </section>
    </>
  );
};

export default Announcement;



