
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Utensils, Wine, Bed, Wifi, Car, Coffee, ChefHat } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: ChefHat,
      title: "Fine Dining",
      description: "Savor delicious local and international cuisine prepared by our expert chefs",
      features: ["Local Zambian dishes", "International cuisine", "Fresh ingredients", "Vegetarian options"],
      gradient: "from-red-400 to-pink-500"
    },
    {
      icon: Wine,
      title: "Bar & Beverages",
      description: "Enjoy a wide selection of drinks in our cozy bar area",
      features: ["Local beers", "International wines", "Cocktails", "Soft drinks"],
      gradient: "from-purple-400 to-indigo-500"
    },
    {
      icon: Bed,
      title: "Comfortable Accommodation",
      description: "Air-conditioned rooms designed for your ultimate comfort",
      features: ["Air conditioning", "Comfortable beds", "Private bathrooms", "Daily housekeeping"],
      gradient: "from-blue-400 to-cyan-500"
    }
  ];

  const amenities = [
    { icon: Wifi, name: "Free WiFi", color: "text-blue-500" },
    { icon: Car, name: "Parking", color: "text-green-500" },
    { icon: Coffee, name: "Room Service", color: "text-amber-500" }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-gray-900 to-gray-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, white 2px, transparent 2px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            Our Services
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-orange-500 mx-auto mb-8"></div>
          <p className="text-xl md:text-2xl text-gray-300 font-light">
            Everything you need for a perfect stay
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <Card key={index} className="group relative overflow-hidden border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-3 bg-white/95 backdrop-blur-sm">
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
              <CardHeader className="text-center relative z-10">
                <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${service.gradient} mx-auto mb-6 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <service.icon className="h-10 w-10 text-white" />
                </div>
                <CardTitle className="text-2xl text-gray-900 group-hover:text-gray-800 transition-colors">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700 group-hover:text-gray-800 transition-colors">
                      <span className={`w-3 h-3 bg-gradient-to-br ${service.gradient} rounded-full mr-4 flex-shrink-0`}></span>
                      <span className="font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <h3 className="text-3xl font-bold text-white mb-12">
            Additional Amenities
          </h3>
          <div className="flex flex-wrap justify-center gap-8">
            {amenities.map((amenity, index) => (
              <div key={index} className="group flex items-center gap-4 bg-white/10 backdrop-blur-sm p-6 rounded-2xl shadow-xl border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                <amenity.icon className={`h-8 w-8 ${amenity.color} group-hover:scale-110 transition-transform duration-300`} />
                <span className="text-white font-semibold text-lg">{amenity.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
