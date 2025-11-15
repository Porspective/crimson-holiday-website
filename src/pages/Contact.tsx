import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Contact form submitted:", formData);
    toast.success("Message sent! We'll get back to you soon.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="pt-32 pb-24 bg-gradient-to-b from-muted to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6 text-foreground">
              Get In <span className="text-primary">Touch</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Have questions about our services? We're here to help.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="shadow-elegant">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-semibold mb-6 text-foreground">Contact Information</h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <Phone className="text-primary mr-4 mt-1" size={24} />
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                        <p className="text-muted-foreground">Call or text for immediate assistance</p>
                        <a href="tel:+14052935872" className="text-primary hover:text-primary-light transition-colors">
                          (405) 293-5872
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <Mail className="text-gold mr-4 mt-1" size={24} />
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">Email</h3>
                        <p className="text-muted-foreground">Send us a message anytime</p>
                        <a href="mailto:porter.j.robertson@gmail.com" className="text-primary hover:text-primary-light transition-colors">
                          porter.j.robertson@gmail.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <MapPin className="text-primary mr-4 mt-1" size={24} />
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">Service Areas</h3>
                        <p className="text-muted-foreground">We proudly serve:</p>
                        <ul className="text-muted-foreground mt-2 space-y-1">
                          <li>• Norman, OK</li>
                          <li>• Moore, OK</li>
                          <li>• Oklahoma City, OK</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-elegant bg-gradient-to-br from-primary/10 to-gold/10">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold mb-4 text-foreground">Quick Response</h3>
                  <p className="text-muted-foreground mb-4">
                    We typically respond to all inquiries within 24 hours. For urgent requests or immediate quotes, please call us directly.
                  </p>
                  <p className="text-muted-foreground">
                    Ready for your custom lighting design? Use our detailed quote form for the fastest service.
                  </p>
                  <a href="/quote">
                    <Button className="mt-4 bg-primary hover:bg-primary-light text-primary-foreground">
                      Request a Quote
                    </Button>
                  </a>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <Card className="shadow-luxury">
              <CardContent className="p-8">
                <h2 className="text-2xl font-semibold mb-6 text-foreground">Send Us a Message</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name">Your Name *</Label>
                    <Input
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="mt-1"
                      rows={6}
                      placeholder="Tell us about your project or ask any questions..."
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-primary hover:bg-primary-light text-primary-foreground shadow-elegant"
                    size="lg"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
