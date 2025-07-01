
import { Card, CardContent } from "@/components/ui/card";
import { Star, Users, Award } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Star,
      title: "Premium Service",
      description: "Exceptional hospitality and personalized attention to every guest"
    },
    {
      icon: Users,
      title: "Family Friendly",
      description: "Perfect for families, couples, and business travelers alike"
    },
    {
      icon: Award,
      title: "Award Winning",
      description: "Recognized for excellence in hospitality and customer service"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Welcome to Venus Lodge
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nestled in the beautiful town of Chirundu, Venus Lodge offers a perfect blend of 
            comfort, luxury, and authentic Zambian hospitality. Our lodge provides an ideal 
            retreat for travelers seeking relaxation and memorable experiences.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <feature.icon className="h-12 w-12 text-amber-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
