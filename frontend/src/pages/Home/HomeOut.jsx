import styles from "../../style";
import Sdg from "./SDG";
import Announcement from "./Announcement";
import NewsPrograms from "./NewsPrograms";
import MoreOut from "./MoreOut";
import FooterFull from "../../components/Navbar/FooterFull";
import Events from "./Events";
import HeaderRegisterOut from "../../components/Navbar/HeaderRegisterOut";
import ServicesOut from "./ServicesOut";
import GetStartedOut from "./GetStartedOut";

const HomeOut = () => {

  return (
    <>
      <div className="relative flex-1 overflow-y-auto overflow-hidden ">
        <div>
          <HeaderRegisterOut />
        </div>
            
        <div className={`bg-primary ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <GetStartedOut />
            <ServicesOut />
            <Sdg/>
            <Announcement/>
            <MoreOut />
            <NewsPrograms/>
            <Events />
          </div>
        </div>

        <FooterFull/>

      </div>
    </>
  );
};

export default HomeOut;