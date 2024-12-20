
import Header from "../../components/Navbar/Header";
import GetStarted from "./GetStarted";
import styles from "../../style";
import Services from "./Services";
import Sdg from "./SDG";
import Announcement from "./Announcement";
import NewsPrograms from "./NewsPrograms";
import More from "./More";
import FooterFull from "../../components/Navbar/FooterFull";
import Events from "./Events";

const Home = () => {

  return (
    <>
      <div className="relative flex-1 overflow-y-auto overflow-hidden ">
        <div>
          <Header/>
        </div>
            
        <div className={`bg-primary ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <GetStarted/>
            <Services/>
            <Sdg/>
            <Announcement/>
            <More/>
            <NewsPrograms/>
            <Events />
          </div>
        </div>

        <FooterFull/>

      </div>
    </>
  );
};

export default Home;