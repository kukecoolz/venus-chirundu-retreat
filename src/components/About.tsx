
import { Card, CardContent } from "@/components/ui/card";
import { Star, Users, Award, Sparkles } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Star,
      title: "Premium Service",
      description: "Exceptional hospitality and personalized attention to every guest",
      gradient: "from-amber-400 to-orange-500"
    },
    {
      icon: Users,
      title: "Family Friendly",
      description: "Perfect for families, couples, and business travelers alike",
      gradient: "from-blue-400 to-purple-500"
    },
    {
      icon: Award,
      title: "Award Winning",
      description: "Recognized for excellence in hospitality and customer service",
      gradient: "from-green-400 to-teal-500"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-10 w-72 h-72 bg-amber-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-200/20 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <div className="flex justify-center mb-4">
            <Sparkles className="h-8 w-8 text-amber-500" />
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
            Welcome to Venus Lodge
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-orange-500 mx-auto mb-8"></div>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
            Nestled in the beautiful town of Chirundu, Venus Lodge offers a perfect blend of 
            comfort, luxury, and authentic Zambian hospitality. Our lodge provides an ideal 
            retreat for travelers seeking relaxation and memorable experiences.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="group relative overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-8 text-center relative">
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${feature.gradient} mx-auto mb-6 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-gray-800 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">
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
