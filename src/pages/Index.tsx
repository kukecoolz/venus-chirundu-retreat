
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Rooms from "@/components/Rooms";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Services />
      <Rooms />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
