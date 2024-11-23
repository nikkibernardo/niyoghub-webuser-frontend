import styles from "../style";
import PropTypes from 'prop-types';
import Footer from "../components/Navbar/Footer";
import HeaderRegisterOut from "../components/Navbar/HeaderRegisterOut";

const LayoutRegisterOut = ({ children }) => {
  return (
    <div className="relative flex-1 overflow-y-auto overflow-hidden ">
        {/* HEADER */}
        <HeaderRegisterOut/>
        
        {/* MAIN CONTENT */}
        <div className={`bg-primary ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <div className={`flex md:flex-row flex-col ${styles.paddingY}`}>
              <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6 mt-20 lg:m-10 xs:mt-20  ss:mt-20  sm:mt-10`}>
                <div className="flex flex-col sm:justify-start justify-center w-full feedback-container relative z-[1]">
                  {children}
                </div> 
              </div>
            </div>
          </div>
        </div>

        {/* FOOTER */}
        <Footer/>
      </div>
  );
};

LayoutRegisterOut.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LayoutRegisterOut;