
import { Button } from "@/components/ui/button";
import { MapPin, Phone } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80')"
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/60"></div>
      </div>
      
      <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
        {/* Logo */}
        <div className="mb-8 flex justify-center">
          <img 
            src="/lovable-uploads/dfb102de-801e-487c-8ba1-44951d3be817.png" 
            alt="Venus Lodge Logo" 
            className="h-24 w-auto drop-shadow-2xl"
          />
        </div>
        
        <h1 className="text-6xl md:text-8xl font-bold mb-6 text-shadow-lg tracking-wide">
          VENUS LODGE
        </h1>
        
        <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-orange-500 mx-auto mb-6"></div>
        
        <p className="text-2xl md:text-3xl mb-4 text-shadow font-light tracking-wide">
          Your Perfect Getaway in Chirundu
        </p>
        
        <div className="flex items-center justify-center gap-3 mb-8 text-lg backdrop-blur-sm bg-white/10 rounded-full px-6 py-3 inline-flex">
          <MapPin className="h-5 w-5 text-amber-400" />
          <span className="font-medium">Chirundu, Zambia</span>
        </div>
        
        <p className="text-lg md:text-xl mb-12 max-w-3xl mx-auto text-shadow leading-relaxed font-light">
          Experience luxury and comfort with our premium air-conditioned rooms, 
          exquisite dining, and refreshing beverages in the heart of Chirundu.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white px-10 py-4 text-lg font-semibold shadow-xl transform hover:scale-105 transition-all duration-300 border-0"
          >
            Book Your Stay
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-2 border-white/80 text-white hover:bg-white hover:text-gray-900 px-10 py-4 text-lg font-semibold backdrop-blur-sm bg-white/10 transform hover:scale-105 transition-all duration-300"
          >
            Explore Rooms
          </Button>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
