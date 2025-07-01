
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AirVent, Bed, Tv, Wifi } from "lucide-react";

const Rooms = () => {
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
      title: "Family Suite",
      price: "K400",
      period: "per night",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      features: ["Air Conditioning", "Multiple Beds", "Living Area", "Kitchen Access"],
      amenities: [AirVent, Bed, Tv, Wifi]
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Our Rooms
          </h2>
          <p className="text-xl text-gray-600">
            Comfortable accommodation with modern amenities
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {rooms.map((room, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow relative">
              {room.popular && (
                <Badge className="absolute top-4 right-4 z-10 bg-amber-600 hover:bg-amber-700">
                  Popular
                </Badge>
              )}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={room.image} 
                  alt={room.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl text-gray-800">
                  {room.title}
                </CardTitle>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-bold text-amber-600">{room.price}</span>
                  <span className="text-gray-500">{room.period}</span>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex gap-2 mb-4">
                  {room.amenities.map((Icon, idx) => (
                    <Icon key={idx} className="h-5 w-5 text-amber-600" />
                  ))}
                </div>
                <ul className="space-y-2 mb-6">
                  {room.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-700">
                      <span className="w-2 h-2 bg-amber-600 rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button className="w-full bg-amber-600 hover:bg-amber-700">
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
