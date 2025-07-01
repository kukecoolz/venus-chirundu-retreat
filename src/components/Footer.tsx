
import { MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-16 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-400 via-orange-500 to-red-500"></div>
        <div className="absolute top-10 right-20 w-32 h-32 bg-amber-400/5 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 left-10 w-48 h-48 bg-orange-400/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-3 gap-12">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <img 
                src="/lovable-uploads/dfb102de-801e-487c-8ba1-44951d3be817.png" 
                alt="Venus Lodge Logo" 
                className="h-12 w-auto"
              />
              <h3 className="text-3xl font-bold bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                Venus Lodge
              </h3>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed">
              Your perfect getaway in Chirundu, offering comfortable accommodation, 
              delicious food, and refreshing drinks in a beautiful setting.
            </p>
            <div className="flex items-center gap-3 text-gray-300 hover:text-amber-400 transition-colors">
              <MapPin className="h-5 w-5" />
              <span className="text-lg">Chirundu, Zambia</span>
            </div>
          </div>
          
          <div className="space-y-6">
            <h4 className="text-2xl font-bold bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
              Quick Links
            </h4>
            <ul className="space-y-3 text-gray-300">
              <li><a href="#" className="hover:text-amber-400 transition-colors text-lg hover:pl-2 duration-300">Home</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors text-lg hover:pl-2 duration-300">About</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors text-lg hover:pl-2 duration-300">Rooms</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors text-lg hover:pl-2 duration-300">Services</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors text-lg hover:pl-2 duration-300">Contact</a></li>
            </ul>
          </div>
          
          <div className="space-y-6">
            <h4 className="text-2xl font-bold bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
              Contact Info
            </h4>
            <div className="space-y-4 text-gray-300">
              <div className="flex items-center gap-3 hover:text-green-400 transition-colors group">
                <Phone className="h-5 w-5 group-hover:scale-110 transition-transform" />
                <span className="text-lg font-medium">0978535758</span>
              </div>
              <div className="flex items-center gap-3 hover:text-blue-400 transition-colors group">
                <Mail className="h-5 w-5 group-hover:scale-110 transition-transform" />
                <span className="text-lg">info@venuslodge.com</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700/50 mt-12 pt-8 text-center">
          <div className="w-24 h-0.5 bg-gradient-to-r from-amber-400 to-orange-500 mx-auto mb-4"></div>
          <p className="text-gray-400 text-lg">&copy; 2024 Venus Lodge. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
