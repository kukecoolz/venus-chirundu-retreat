
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Location",
      info: "Chirundu, Zambia",
      detail: "Southern Province"
    },
    {
      icon: Phone,
      title: "Phone",
      info: "+260 XXX XXX XXX",
      detail: "Available 24/7"
    },
    {
      icon: Mail,
      title: "Email",
      info: "info@venuslodge.com",
      detail: "We'll respond within 24 hours"
    },
    {
      icon: Clock,
      title: "Check-in",
      info: "2:00 PM - 10:00 PM",
      detail: "Check-out: 11:00 AM"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Contact Us
          </h2>
          <p className="text-xl text-gray-600">
            Get in touch to make your reservation
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-8">
              Get In Touch
            </h3>
            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              {contactInfo.map((item, index) => (
                <Card key={index} className="border-0 shadow-sm">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <item.icon className="h-6 w-6 text-amber-600 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-1">
                          {item.title}
                        </h4>
                        <p className="text-gray-700 font-medium">
                          {item.info}
                        </p>
                        <p className="text-sm text-gray-500">
                          {item.detail}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-gray-800">
                Make a Reservation
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" placeholder="John" />
                </div>
                <div>
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" placeholder="Doe" />
                </div>
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="john@example.com" />
              </div>
              <div>
                <Label htmlFor="phone">Phone</Label>
                <Input id="phone" placeholder="+260 XXX XXX XXX" />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="checkin">Check-in Date</Label>
                  <Input id="checkin" type="date" />
                </div>
                <div>
                  <Label htmlFor="checkout">Check-out Date</Label>
                  <Input id="checkout" type="date" />
                </div>
              </div>
              <div>
                <Label htmlFor="guests">Number of Guests</Label>
                <Input id="guests" type="number" min="1" placeholder="2" />
              </div>
              <Button className="w-full bg-amber-600 hover:bg-amber-700">
                Send Reservation Request
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
