import Navbar from "./_components/Navbar";
import HeroSection from "./_components/Hero-Section";
import AboutTDC from "./_components/About-Us";
import Brands from "./_components/Brands";
import Story from "./_components/Story";
import Mission from "./_components/Mission";
import CEO from "./_components/CEO";
import Hiring from "./_components/Hiring";
import TDC from "./_components/TDC";
import StartNow from "./_components/StartNow";
import Footer from "./_components/Footer";
export default function Home() {
  return (
    <>
    <Navbar/>
    <HeroSection/>
    <AboutTDC/>
    <Brands/>
    <TDC/>
    <Mission/>
    <CEO/>
    <Hiring/>
    <Story/>
    <StartNow/>
    <Footer/>
      </>
  );
}
