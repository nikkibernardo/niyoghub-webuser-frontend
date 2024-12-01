import styles from "../../style";
import { FaArrowRightLong } from "react-icons/fa6";

const GetStartedOut = () => {

  return (
    <>
      <section id="get-started"
        className={`mt-20 flex md:flex-row flex-col ${styles.paddingY}`}
        style={{ 
          backgroundImage: "url('src/assets/bck.png')", 
          backgroundSize: '65% auto', 
          backgroundPosition: 'right bottom', 
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6 ml-0 lg:ml-10 `}>
          <div className="flex flex-row justify-between items-center w-full">
            <h1 className="mt-10 flex-1 font-poppins font-semibold text-[30px] ss:text-[40px] text-[#537F19] ss:leading-[60px] leading-[35px]">
              WELCOME TO <br />
              <span className="text-black font-bold text-[60px] ss:text-[80px]">NiyogHub</span>
            </h1>
          </div>
          <p className={` max-w-[530px] my-10 text-blacks `}>
            NiyogHub represents a shared vision for a time when every coconut farmer will have the means to prosper in an inclusive and sustainable farming environment. This offers essential resources like real-time chat support, sustainability map, disease identification, and provides relevant information. 
          </p>

          <div className="flex flex-col md:flex-row md:space-x-4">
            <a
              href="#services"
              className="relative py-2 px-4 md:py-3 md:px-6 text-[16px] font-bold text-white bg-[#4B7F2C] rounded-tr-[10px] rounded-bl-[10px] shadow-[6px_6px_0px_0px_#000000] transition-all duration-300 hover:shadow-[8px_8px_0px_0px_#000000] hover:opacity-90 hover:translate-x-[-2px] hover:translate-y-[-2px] mb-3 flex items-center justify-between"
            >
              Get Started <span className="ml-2"><FaArrowRightLong /></span>
            </a>

            <a
              href="/about-out"
              className="relative py-2 px-4 md:py-3 md:px-6 text-[16px] font-bold text-black bg-white transition-all duration-300 hover:bg-[#D8EBC1] mb-3 flex items-center justify-between"
            >
              Learn More <span className="ml-2"><FaArrowRightLong /></span>
            </a>
          </div>

        </div>
      </section>
    </>
  );
};

export default GetStartedOut;


