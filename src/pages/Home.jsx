import DigitalTransformation from "../components/DigitalTransformation";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import ITCapabilities from "../components/ITCapabilities";
import Navbar from "../components/Navbar";
import StatsSection from "../components/StatsSection";


function Home() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <StatsSection/>
      <DigitalTransformation/>
      <ITCapabilities/>
      <Footer/>
    </>
  );
}

export default Home;
