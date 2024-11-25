import { Route, Routes} from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About'
import FAQs from './pages/FAQs/FAQs'
import SoilProfile from './pages/SoilProfile/SoilProfile';
import DiseaseIdentification from './pages/DiseaseIdentification/DiseaseIdentification'
import ChatSupport from './pages/ChatSupport/ChatSupport'
import Profile from './pages/Profile/Profile';
import Settings from './pages/Settings/Settings'
import Feedback from './pages/Feedback/Feedback'
import SignIn from './pages/SignInOut/SignIn';
import AboutOut from './pages/About/AboutOut';
import FAQsOut from './pages/FAQs/FAQsOut';
import SignUp from './pages/SignInOut/SignUp';
import ForgotPassword from './pages/Auth/ForgotPassword';
import ResetPassword from './pages/Auth/ResetPassword';
import Otp from './pages/Auth/OTP';
import AllNewsPrograms from './pages/Home/ViewAllNewsPrograms';
import CopraPrice from './pages/Home/CopraPrice';
import CoconutIntercropping from './pages/Home/CoconutIntercropping';
import DiseaseDiagnosedResult from './pages/DiseaseIdentification/DiseaseDiagnosedResult';
import PageTitle from './components/PageTitle';
import AllEvents from './pages/Home/ViewAllEvents';
import ReadEvent from './pages/Home/ReadEvent';
import ReadNewsPrograms from './pages/Home/ReadNewsPrograms';

function App() {
  return (
    <>
      <Routes>
        <Route
          index
          element={
            <>
              <PageTitle title="Home | NiyogHub" />
              <Home/>
            </>
          }
        />
        <Route
          path="/about"
          element={
            <>
              <PageTitle title="About | NiyogHub" />
              <About />
            </>
          }
        /> 
        <Route
          path="/faqs"
          element={
            <>
              <PageTitle title="FAQs | NiyogHub" />
              <FAQs />
            </>
          }
        /> 
        <Route
          path="/disease-identification"
          element={
            <>
              <PageTitle title="Disease Identification | NiyogHub" />
              <DiseaseIdentification/>
            </>
          }
        /> 
        <Route
          path="/disease-diagnosed-result"
          element={
            <>
              <PageTitle title="Diagnosed Result | NiyogHub" />
              <DiseaseDiagnosedResult/>
            </>
          }
        />
        <Route
          path="/soil-profile"
          element={
            <>
              <PageTitle title="Soil Profile | NiyogHub" />
              <SoilProfile/>
            </>
          }
        /> 
        <Route
          path="/chat-support"
          element={
            <>
              <PageTitle title="Chat Support | NiyogHub" />
              <ChatSupport/>
            </>
          }
        /> 
        <Route
          path="/profile"
          element={
            <>
              <PageTitle title="Profile | NiyogHub" />
              <Profile/>
            </>
          }
        /> 
        <Route
          path="/settings"
          element={
            <>
              <PageTitle title="Settings | NiyogHub" />
              <Settings/>
            </>
          }
        /> 
        <Route
          path="/feedback"
          element={
            <>
              <PageTitle title="Feedback | NiyogHub" />
              <Feedback/>
            </>
          }
        /> 
        <Route
          path="/signin"
          element={
            <>
              <PageTitle title="Sign In | NiyogHub" />
              <SignIn/>
            </>
          }
        /> 
        <Route
          path="/signup"
          element={
            <>
              <PageTitle title="Sign Up | NiyogHub" />
              <SignUp/>
            </>
          }
        /> 
        <Route
          path="/forgot-password"
          element={
            <>
              <PageTitle title="Forgot Password | NiyogHub" />
              <ForgotPassword/>
            </>
          }
        />
        <Route
          path="/reset-password"
          element={
            <>
              <PageTitle title="Reset Password | NiyogHub" />
              <ResetPassword/>
            </>
          }
        />
        <Route
          path="/otp"
          element={
            <>
              <PageTitle title="Authentication | NiyogHub" />
              <Otp/>
            </>
          }
        />
        <Route
          path="/all-news-programs"
          element={
            <>
              <PageTitle title="All News & Programs | NiyogHub" />
              <AllNewsPrograms/>
            </>
          }
        />
        <Route
          path="/all-events"
          element={
            <>
              <PageTitle title="All Events | NiyogHub" />
              <AllEvents />
            </>
          }
        />
        <Route
          path="/read-event"
          element={
            <>
              <PageTitle title="Read Event | NiyogHub" />
              <ReadEvent />
            </>
          }
        />
        <Route
          path="/read-news-programs"
          element={
            <>
              <PageTitle title="Read News & Programs | NiyogHub" />
              <ReadNewsPrograms />
            </>
          }
        />
        <Route
          path="/copra-price"
          element={
            <>
              <PageTitle title="Copra Price Update | NiyogHub" />
              <CopraPrice/>
            </>
          }
        />
        <Route
          path="/coconut-intercropping"
          element={
            <>
              <PageTitle title="Coconut Intercropping | NiyogHub" />
              <CoconutIntercropping/>
            </>
          }
        />








        {/* Routes for not logged in pages */}
        <Route
          path="/about-out"
          element={
            <>
              <PageTitle title="About | NiyogHub" />
              <AboutOut/>
            </>
          }
        /> 
        <Route
          path="/faqs-out"
          element={
            <>
              <PageTitle title="FAQs | NiyogHub" />
              <FAQsOut/>
            </>
          }
        /> 
      </Routes>
    </>
  );
}

export default App;
