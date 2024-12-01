
import styles from "../../style";

const MoreOut = () => {
  return (
    <>
      <section 
        id="sdg"  
        className={`flex flex-col ${styles.padding}`}
        style={{ 
          backgroundImage: "url('/src/assets/more.png')",
          backgroundSize: 'cover', 
          backgroundPosition: 'center', 
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="py-10 w-full flex flex-col items-center">
          <h1 className="font-bold text-[35px] ss:text-[50px] text-center mt-5 tracking-[-0.05em]">
            WHAT'S MORE TO KNOW?
          </h1>
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="flex flex-col lg:flex-row justify-center lg:justify-between items-center gap-20 text-center lg:text-left">
              {/* Coconut Intercropping Card */}
              <a
                href="/coconut-intercropping-out"
                className="flex flex-col items-center lg:items-start bg-[#639324] text-black rounded-lg p-6 w-full sm:w-[300px] lg:w-[290px] min-h-[310px] shadow-lg"
              >
                <div className="mb-4">
                  <img
                    src="/src/assets/coconut-oil.png"
                    alt="Coconut Intercropping"
                    className="w-20 h-20"
                  />
                </div>
                <h3 className="font-bold text-[22px] mb-2">
                  Coconut Intercropping
                </h3>
                <p className="text-[16px] mb-4">
                  A multiple cropping practice involving growing two or more crops.
                </p>
                <button
                  className="mt-auto px-4 py-2 bg-[rgba(255,255,255,0.5)] text-black font-bold rounded-lg hover:bg-[#FFDE42] transition"
                >
                  Know More →
                </button>
              </a>

              {/* Copra Price Watch Card */}
              <a href="/copra-price-out"
                className="flex flex-col items-center lg:items-start bg-[#D2D792] text-black rounded-lg p-6 w-full sm:w-[300px] lg:w-[290px] min-h-[310px] shadow-lg"
              >
                <div className="mb-4">
                  <img
                    src="/src/assets/coconut.png"
                    alt="Copra Price Watch"
                    className="w-20 h-20"
                  />
                </div>
                <h3 className="font-bold text-[22px] mb-2 relative top-[-20px]">Copra Price Watch</h3>

                <p className="text-[16px] mb-4 relative top-[-20px]" >
                  Track the daily update of copra and wholenut prices.
                </p>
                <button
                  className="mt-auto px-4 py-2 bg-[rgba(255,255,255,0.5)] text-black font-bold rounded-lg hover:bg-[#FFDE42] transition"
                >
                  Know More →
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MoreOut;