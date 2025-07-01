
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AirVent, Bed, Tv, Wifi, Coffee, Shield } from "lucide-react";
import { useState, useEffect } from "react";

const Rooms = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const backgroundImages = [
    "https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % backgroundImages.length
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const rooms = [
    {
      title: "Standard Room",
      price: "K150",
      period: "per night",
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      features: ["Air Conditioning", "Double Bed", "Private Bathroom", "Free WiFi"],
      amenities: [AirVent, Bed, Tv, Wifi]
    },
    {
      title: "Deluxe Room",
      price: "K250",
      period: "per night",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      features: ["Air Conditioning", "King Size Bed", "Premium Bathroom", "Room Service"],
      amenities: [AirVent, Bed, Tv, Wifi],
      popular: true
    },
    {
      title: "Executive Suite",
      price: "K400",
      period: "per night",
      image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      features: ["Air Conditioning", "2 Queen Beds", "Executive Lounge Access", "Complimentary Breakfast"],
      amenities: [AirVent, Bed, Coffee, Shield]
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Transitioning Background Images */}
      <div className="absolute inset-0">
        {backgroundImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
              index === currentImageIndex ? 'opacity-20' : 'opacity-0'
            }`}
            style={{ backgroundImage: `url(${image})` }}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-br from-white/95 via-white/90 to-white/95"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
            Our Premium Rooms
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-orange-500 mx-auto mb-8"></div>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comfortable accommodation with modern amenities and stunning views
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {rooms.map((room, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 relative group bg-white/95 backdrop-blur-sm border-0 shadow-xl">
              {room.popular && (
                <Badge className="absolute top-4 right-4 z-10 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white border-0 shadow-lg">
                  Popular Choice
                </Badge>
              )}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={room.image} 
                  alt={room.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl text-gray-900 group-hover:text-amber-700 transition-colors">
                  {room.title}
                </CardTitle>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">{room.price}</span>
                  <span className="text-gray-500 text-lg">{room.period}</span>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex gap-3 mb-6 justify-center">
                  {room.amenities.map((Icon, idx) => (
                    <div key={idx} className="p-2 rounded-full bg-gradient-to-br from-amber-100 to-orange-100 group-hover:from-amber-200 group-hover:to-orange-200 transition-colors">
                      <Icon className="h-5 w-5 text-amber-600" />
                    </div>
                  ))}
                </div>
                <ul className="space-y-3 mb-8">
                  {room.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700 text-lg">
                      <div className="w-2 h-2 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full mr-4 flex-shrink-0"></div>
                      <span className="font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 hover:from-amber-700 hover:via-orange-700 hover:to-red-700 text-white font-bold py-3 text-lg shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300 border-0">
                  Book Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Rooms;
