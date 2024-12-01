import { useState } from "react";
import coffeeImg from "../assets/coffee.jpg";
import cacaoImg from "../assets/cacao.jpg";
import bananaImg from "../assets/banana.jpg";
import cornImg from "../assets/corn.jpeg";

const intercroppingData = [
  {
    title: "Coffee Varieties",
    description:
      "Coffee plants provide shade for young coconut trees, promoting more favorable growing conditions and increasing biodiversity on coconut farms.",
    image: coffeeImg,
  },
  {
    title: "Cacao Varieties",
    description:
      "This enhance soil fertility and provide an additional income source for coconut farmers through the sale of cacao beans, contributing to sustainable agroforestry practices.",
    image: cacaoImg,
  },
  {
    title: "Banana Cultivars",
    description:
      "Bananas serve as windbreaks, protecting coconut trees from strong winds and cyclones, while also diversifying farm produce and generating additional revenue.",
    image: bananaImg,
  },
  {
    title: "Corn Varieties",
    description:
      "Corn can be intercropped with coconut to optimize land use efficiency, utilizing the space between coconut trees for crop cultivation and improving overall farm productivity and income.",
    image: cornImg,
  },
];

const IntercropCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === intercroppingData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? intercroppingData.length - 1 : prevIndex - 1
    );
  };

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2
        style={{
          fontSize: "2rem",
          marginBottom: "20px",
          fontWeight: "bolder",
          color: "#0D0D0D",
        }}
      >
        RECOMMENDED INTERCROPS
      </h2>

      <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
        {/* Left Arrow */}
        <button
          onClick={handlePrev}
          style={{
            backgroundColor: "transparent",
            border: "none",
            fontSize: "2rem",
            cursor: "pointer",
            color: "#424242",
            marginRight: "10px",
          }}
        >
          &#8249;
        </button>

        {/* Cards */}
        <div style={{ display: "flex", gap: "10px" }}>
          {intercroppingData.map((item, index) => (
            <div
              key={index}
              style={{
                width: "250px",
                height: "300px",
                backgroundColor: activeIndex === index ? "#FFDE42" : "#90B74B", // Yellow for active, green for inactive
                borderRadius: "10px",
                padding: "10px", // Reduced padding
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-start", // Align content at the top
                transition: "background-color 0.3s ease",
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
              }}
            >
              <img
                src={item.image}
                alt={item.title}
                style={{
                  width: "75px",
                  height: "70px",
                  borderRadius: "50%",
                  marginBottom: "15px", 
                  marginTop: "20px",
                }}
              />
              <h3
                style={{
                  fontSize: "1.5rem", // Slightly smaller font
                  fontWeight: "bold",
                  marginBottom: "4px", // Reduced space below title
                }}
              >
                {item.title}
              </h3>
              <p
                style={{
                  fontSize: "0.9rem", // Smaller font for description
                  lineHeight: "1.2", // Tighter line spacing
                  margin: "0", // No extra margin
                  textAlign: "left",
                  paddingLeft: "20px",
                  paddingRight: "20px",
                  marginTop: "2px",
                }}
              >
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={handleNext}
          style={{
            backgroundColor: "transparent",
            border: "none",
            fontSize: "2rem",
            cursor: "pointer",
            color: "#424242",
            marginLeft: "10px",
          }}
        >
          &#8250;
        </button>
      </div>

      {/* Dotted Indicator */}
      <div style={{ marginTop: "20px", display: "flex", justifyContent: "center", gap: "8px" }}>
        {intercroppingData.map((_, index) => (
          <span
            key={index}
            style={{
              width: "10px",
              height: "10px",
              backgroundColor: activeIndex === index ? "#FFDE42" : "#90B74B",
              borderRadius: "50%",
              display: "inline-block",
              transition: "background-color 0.3s ease",
            }}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default IntercropCarousel;
