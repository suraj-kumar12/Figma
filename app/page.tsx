import DashboardPreview from "./components/DashboardPreview";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Pricing from "./components/Pricing";
import Testimonial from "./components/Testimonial";

const Home: React.FC = () => {
  return (
    <>
      <Header/>
      <Hero/>
      <DashboardPreview />
      <Features/>
      <Pricing />
      <Testimonial/>
      <Footer />
    </>
    
  )
}

export default Home;
