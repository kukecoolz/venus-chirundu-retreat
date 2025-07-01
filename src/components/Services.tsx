
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Utensils, Wine, Bed, Wifi, Car, Coffee } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Utensils,
      title: "Fine Dining",
      description: "Savor delicious local and international cuisine prepared by our expert chefs",
      features: ["Local Zambian dishes", "International cuisine", "Fresh ingredients", "Vegetarian options"]
    },
    {
      icon: Wine,
      title: "Bar & Beverages",
      description: "Enjoy a wide selection of drinks in our cozy bar area",
      features: ["Local beers", "International wines", "Cocktails", "Soft drinks"]
    },
    {
      icon: Bed,
      title: "Comfortable Accommodation",
      description: "Air-conditioned rooms designed for your ultimate comfort",
      features: ["Air conditioning", "Comfortable beds", "Private bathrooms", "Daily housekeeping"]
    }
  ];

  const amenities = [
    { icon: Wifi, name: "Free WiFi" },
    { icon: Car, name: "Parking" },
    { icon: Coffee, name: "Room Service" }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need for a perfect stay
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="h-full hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <service.icon className="h-12 w-12 text-amber-600 mx-auto mb-4" />
                <CardTitle className="text-xl text-gray-800">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-700">
                      <span className="w-2 h-2 bg-amber-600 rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <h3 className="text-2xl font-semibold text-gray-800 mb-8">
            Additional Amenities
          </h3>
          <div className="flex flex-wrap justify-center gap-8">
            {amenities.map((amenity, index) => (
              <div key={index} className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm">
                <amenity.icon className="h-6 w-6 text-amber-600" />
                <span className="text-gray-700 font-medium">{amenity.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
