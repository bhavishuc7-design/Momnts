import Navbar from "../../components/navbar/Navbar";
import HeroSection from "./HeroSection";

const LandingPage = () => {
    return (
        <div className="min-h-[200vh]">
            <Navbar/>
            <HeroSection/>
        </div>
    );
};

export default LandingPage;