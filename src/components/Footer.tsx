
import { MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-amber-400">
              Venus Lodge
            </h3>
            <p className="text-gray-300 mb-4">
              Your perfect getaway in Chirundu, offering comfortable accommodation, 
              delicious food, and refreshing drinks in a beautiful setting.
            </p>
            <div className="flex items-center gap-2 text-gray-300">
              <MapPin className="h-4 w-4" />
              <span>Chirundu, Zambia</span>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-amber-400">
              Quick Links
            </h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-amber-400 transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors">About</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors">Rooms</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors">Services</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-amber-400">
              Contact Info
            </h4>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>+260 XXX XXX XXX</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>info@venuslodge.com</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Venus Lodge. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
