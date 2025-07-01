
import { Button } from "@/components/ui/button";
import { MapPin, Phone } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-amber-50 to-orange-100">
      <div className="absolute inset-0 bg-black/20"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-80"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80')"
        }}
      ></div>
      
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-shadow-lg">
          Venus Lodge
        </h1>
        <p className="text-xl md:text-2xl mb-4 text-shadow">
          Your Perfect Getaway in Chirundu
        </p>
        <div className="flex items-center justify-center gap-2 mb-8 text-lg">
          <MapPin className="h-5 w-5" />
          <span>Chirundu, Zambia</span>
        </div>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-shadow">
          Experience luxury and comfort with our air-conditioned rooms, delicious food, 
          and refreshing drinks in the heart of Chirundu.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3">
            Book Your Stay
          </Button>
          <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-amber-600 px-8 py-3">
            View Rooms
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
