
import { Button } from "@/components/ui/button";
import { MapPin, Phone } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-top bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80')"
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/70"></div>
        
        {/* Animated overlay elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 bg-amber-400/10 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-48 h-48 bg-orange-400/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
        </div>
      </div>
      
      <div className="relative z-10 text-center text-white px-4 max-w-6xl mx-auto">
        {/* Logo */}
        <div className="mb-8 flex justify-center">
          <div className="relative group">
            <img 
              src="/lovable-uploads/dfb102de-801e-487c-8ba1-44951d3be817.png" 
              alt="Venus Lodge Logo" 
              className="h-28 w-auto drop-shadow-2xl transform group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute -inset-4 bg-white/5 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        </div>
        
        <h1 className="text-7xl md:text-9xl font-extrabold mb-8 text-shadow-lg tracking-wider bg-gradient-to-r from-white via-amber-100 to-white bg-clip-text">
          VENUS LODGE
        </h1>
        
        <div className="w-32 h-1.5 bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto mb-8 rounded-full"></div>
        
        <p className="text-3xl md:text-4xl mb-6 text-shadow font-light tracking-wide bg-gradient-to-r from-amber-200 to-orange-200 bg-clip-text text-transparent">
          Your Perfect Getaway in Chirundu
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8">
          <div className="flex items-center gap-3 text-lg backdrop-blur-md bg-white/15 rounded-full px-8 py-4 border border-white/20 hover:bg-white/20 transition-all duration-300">
            <MapPin className="h-6 w-6 text-amber-400" />
            <span className="font-medium">Chirundu, Zambia</span>
          </div>
          <div className="flex items-center gap-3 text-lg backdrop-blur-md bg-white/15 rounded-full px-8 py-4 border border-white/20 hover:bg-white/20 transition-all duration-300">
            <Phone className="h-6 w-6 text-green-400" />
            <span className="font-medium">0978535758</span>
          </div>
        </div>
        
        <p className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto text-shadow leading-relaxed font-light opacity-90">
          Experience luxury and comfort with our premium air-conditioned rooms, 
          exquisite dining, and refreshing beverages in the heart of Chirundu.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-8 justify-center">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 hover:from-amber-600 hover:via-orange-600 hover:to-red-600 text-white px-12 py-5 text-xl font-bold shadow-2xl transform hover:scale-105 transition-all duration-300 border-0 rounded-full backdrop-blur-sm"
          >
            Book Your Stay
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-2 border-white/90 text-white hover:bg-white hover:text-gray-900 px-12 py-5 text-xl font-bold backdrop-blur-md bg-white/10 transform hover:scale-105 transition-all duration-300 rounded-full hover:shadow-2xl"
          >
            Explore Rooms
          </Button>
        </div>
      </div>

      {/* Enhanced Floating Elements */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-10 h-14 border-2 border-white/60 rounded-full flex justify-center backdrop-blur-sm bg-white/10">
          <div className="w-1.5 h-4 bg-gradient-to-b from-white to-amber-300 rounded-full mt-3 animate-pulse"></div>
        </div>
      </div>

      {/* Decorative corner elements */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-amber-400 via-orange-500 to-red-500"></div>
      <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-red-500 via-orange-500 to-amber-400"></div>
    </section>
  );
};

export default Hero;
