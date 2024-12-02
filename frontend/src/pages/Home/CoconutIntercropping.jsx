import Layout from "../../layout/Layout";
import intercropping from "../../assets/intercropping.png";
import ic1 from "../../assets/ic1.png";
import ic2 from "../../assets/ic2.png";
import IntercropCarousel from "../../components/IntercropCarousel";
import dykImg from "../../assets/dyk.png";

const CoconutIntercropping = () => {
  return (
    <>
    <Layout>
      <div style={{ fontFamily: "Arial, sans-serif" }}>
        {/* Top Section with Background Image */}
        <div className="relative w-full h-[150px] lg:h-[300px] md:h-[200px]">
          <img
            src={intercropping}
            alt="Coconut Intercropping"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-4 left-4 text-white text-2xl font-extrabold md:text-3xl md:bottom-6 md:left-6 lg:text-4xl lg:bottom-8 lg:left-8">
            COCONUT <br />INTERCROPPING
          </div>
        </div>

        {/* White Content Section */}
        <div className="bg-white p-5 sm:px-14 lg:px-16 relative z-10 top-[-.6%] rounded-t-3xl sm:rounded-t-3xl lg:rounded-t-3xl min-h-screen">
          <h2 className="text-[#3C763D] text-3xl font-bold text-left mt-1 my-1">
            Coconut Based Farming Systems
          </h2>
          <ul className="list-disc pl-5 text-base text-[#333] max-w-[600px]">
            <li>A system or practice in coconut production</li>
            <li>
              All available farm resources like soil, water, farm labor,
              agricultural inputs are utilized and optimized production of food
              and non-food products
            </li>
          </ul>

          <h2 className="text-[#3C763D] text-3xl font-bold text-left mt-3 my-1">
            Important Considerations
          </h2>
          <ul className="list-disc pl-5 text-base text-[#333] max-w-[600px]">
            <li>Suitable environmental conditions</li>
            <li>Right technology (package of viable technologies)</li>
            <li>Available planting materials</li>
            <li>Favorable market of farm produce</li>
            <li>Available working capital</li>
            <li>Timely extension service</li>
            <li>
              Human capital endowment: skills, capacities, and attitudes
            </li>
          </ul>

          {/* Image Section with Text and Gray Background */}
          <div className="bg-[#f5f5f5] p-8 rounded-lg mt-12 flex flex-col items-center">
            {/* IC1 Section */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8 w-full max-w-4xl">
              <img
                src={ic1}
                alt="IC1 Diagram"
                className="w-full sm:w-3/5 h-auto"
              />
              <p className="bg-[#90B74B] text-white p-4 lg:text-xl lg:p-10 rounded-lg text-left w-full sm:max-w-1/5">
                On average, 56% of solar radiation reaches the ground (may vary with age of the stand)
              </p>
            </div>


            {/* IC2 Section */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8 w-full max-w-4xl">
              <p className="bg-[#90B74B] text-white p-4 lg:text-xl lg:p-10 rounded-lg text-left w-full sm:max-w-1/5">
                80% of active root system is located in 25-60 cm soil layer in a 2 m radius, leaving 70-75% for intercropping
              </p>
              <img
                src={ic2}
                alt="IC2 Diagram"
                className="w-full sm:w-3/5 h-auto"
              />
            </div>
          </div>

          {/* Main Factors Section */}
          <div className="mt-8 text-center mx-auto max-w-[600px]">
            <h2 className="text-[#537F19] text-3xl font-bold mb-5 mt-10 leading-tight">
              MAIN FACTORS AFFECTING COCONUT PRODUCTION & QUALITY
            </h2>
            <div>
              <div className="bg-[#949494] text-white rounded-lg px-6 py-3 mb-2.5 font-bold w-4/5 mx-auto mt-2.5 text-left">
                1. Environment or site selection
              </div>
              <div className="bg-[#949494] text-white rounded-lg px-6 py-3 mb-2.5 font-bold w-4/5 mx-auto mt-2.5 text-left">
                2. Variety or species selection
              </div>
              <div className="bg-[#949494] text-white rounded-lg px-6 py-3 mb-2.5 font-bold w-4/5 mx-auto mt-2.5 text-left">
                3. Management
              </div>
            </div>
          </div>


          {/* Carousel Section */}
          <div className="mt-50">
            <IntercropCarousel /> {/* Render the IntercropCarousel here */}
          </div>

          {/* New Image Section */}
          <div className="mt-5 bg-white rounded-lg text-center p-4 sm:p-6 md:p-8 lg:p-10">
            <img
              src={dykImg}
              alt="Did You Know"
              className="w-full max-w-full h-auto block mx-auto sm:max-w-[600px] md:max-w-[700px] lg:max-w-[800px] xl:max-w-[900px]"
              // className="w-full sm:w-5/5"
            />
            <p className="text-[1.1rem] text-[#2C2C2C] mt-2 sm:text-[1.2rem] md:text-[1.3rem] lg:text-[1.4rem] xl:text-[1.5rem]">
              Philippine Coconut Authority (2024)
            </p>
          </div>

        </div>
      </div>
    </Layout>
    </>
  );
};

export default CoconutIntercropping;