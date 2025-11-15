import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Heart, Star, Award } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="pt-32 pb-24 bg-gradient-to-b from-muted to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6 text-foreground">
              About <span className="text-primary">Crimson Holiday Co.</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Your trusted partner for premium holiday lighting in Norman, Moore, and Oklahoma City.
            </p>
          </div>

          <div className="max-w-4xl mx-auto mb-16">
            <Card className="shadow-luxury">
              <CardContent className="p-8 md:p-12">
                <h2 className="text-3xl font-serif font-bold mb-6 text-foreground">Our Story</h2>
                <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                  <p>
                    Crimson Holiday Co. is a locally operated holiday lighting service founded and run by University of Oklahoma students who take pride in delivering clean, professional, and beautifully designed lighting displays. What started as a simple idea quickly grew into a full-service operation built on reliability, craftsmanship, and a genuine passion for making homes look incredible during the holiday season.
                  </p>
                  <p>
                    We don't believe in throwing up generic light strands and calling it a day. Every installation is thoughtfully planned and tailored to your home's unique architecture. Our focus is on clean lines, balanced lighting, and a design that elevates your curb appeal while capturing the magic of the season.
                  </p>
                  <p>
                    To ensure the highest quality, we use the same premium commercial-grade LED C9 systems trusted by professional lighting companies across the country. Each strand is custom-cut to your home for a perfect fit, and our non-invasive mounting techniques keep your home protected while allowing for a crisp, professional finish.
                  </p>
                  <p>
                    As OU students, we're committed to earning your trust through hard work, clear communication, and attention to detail. Our goal is simple: to give you a stunning, hassle-free holiday display you can enjoy all season long—without ever lifting a ladder.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <Card className="shadow-elegant text-center">
              <CardContent className="p-8">
                <Shield className="text-primary mx-auto mb-4" size={48} />
                <h3 className="text-xl font-semibold mb-2 text-foreground">Fully Insured</h3>
                <p className="text-muted-foreground">
                  Complete liability coverage for your peace of mind
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-elegant text-center">
              <CardContent className="p-8">
                <Heart className="text-gold mx-auto mb-4" size={48} />
                <h3 className="text-xl font-semibold mb-2 text-foreground">Local Business</h3>
                <p className="text-muted-foreground">
                  OU students serving our community with pride
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-elegant text-center">
              <CardContent className="p-8">
                <Star className="text-primary mx-auto mb-4" size={48} />
                <h3 className="text-xl font-semibold mb-2 text-foreground">Safety First</h3>
                <p className="text-muted-foreground">
                  Professional techniques that protect your property
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-elegant text-center">
              <CardContent className="p-8">
                <Award className="text-gold mx-auto mb-4" size={48} />
                <h3 className="text-xl font-semibold mb-2 text-foreground">Quality Focused</h3>
                <p className="text-muted-foreground">
                  Premium materials and meticulous workmanship
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="shadow-luxury bg-gradient-to-br from-primary/5 to-gold/5">
              <CardContent className="p-8 md:p-12">
                <h2 className="text-3xl font-serif font-bold mb-6 text-foreground">Our Commitment</h2>
                <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                  <p>
                    We're committed to providing exceptional service from start to finish. From your initial quote to the final takedown and storage, we handle every detail with care and professionalism.
                  </p>
                  <p>
                    Our goal is simple: to create the most beautiful, worry-free holiday lighting experience for homeowners throughout Norman, Moore, and Oklahoma City. We take pride in our work and stand behind every installation we complete.
                  </p>
                  <p className="font-semibold text-foreground">
                    Experience the Crimson Holiday Co. difference this season.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-16 text-center">
            <a href="/quote">
              <button className="bg-primary hover:bg-primary-light text-primary-foreground px-12 py-4 rounded-lg shadow-luxury text-lg transition-colors">
                Work With Us This Season
              </button>
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
