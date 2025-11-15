import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Sparkles, Calendar, Package } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero-home.jpg";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImage} 
            alt="Luxury holiday home with premium lighting" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-transparent" />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 text-background">
              Luxury Holiday Lighting, <span className="text-gold">Fully Custom</span> for Your Home.
            </h1>
            <p className="text-xl md:text-2xl text-background/90 mb-8">
              Premium commercial-grade LED designs, professional installation, takedown & storage — serving Norman, Moore, and OKC.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/quote">
                <Button size="lg" className="bg-primary hover:bg-primary-light text-primary-foreground shadow-luxury text-lg px-8 py-6">
                  Request a Quote
                </Button>
              </Link>
              <Link to="/packages">
                <Button size="lg" variant="outline" className="border-2 border-gold text-background hover:bg-gold hover:text-foreground text-lg px-8 py-6">
                  View Our Packages
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-foreground">
              Why Choose <span className="text-primary">Crimson Holiday Co.</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We deliver premium holiday lighting experiences with meticulous attention to detail
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-none shadow-elegant hover:shadow-luxury transition-all duration-300">
              <CardContent className="p-8">
                <CheckCircle className="text-primary mb-4" size={48} />
                <h3 className="text-2xl font-semibold mb-3 text-foreground">Premium Commercial-Grade LED</h3>
                <p className="text-muted-foreground">
                  Professional C9 LED systems that outshine residential options with brilliant, consistent lighting.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-elegant hover:shadow-luxury transition-all duration-300">
              <CardContent className="p-8">
                <Sparkles className="text-gold mb-4" size={48} />
                <h3 className="text-2xl font-semibold mb-3 text-foreground">Custom-Cut Installation</h3>
                <p className="text-muted-foreground">
                  Every strand perfectly measured and cut to fit your home's unique architecture.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-elegant hover:shadow-luxury transition-all duration-300">
              <CardContent className="p-8">
                <CheckCircle className="text-primary mb-4" size={48} />
                <h3 className="text-2xl font-semibold mb-3 text-foreground">Safe, Non-Invasive</h3>
                <p className="text-muted-foreground">
                  Professional mounting techniques that protect your property while creating stunning displays.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-elegant hover:shadow-luxury transition-all duration-300">
              <CardContent className="p-8">
                <Package className="text-gold mb-4" size={48} />
                <h3 className="text-2xl font-semibold mb-3 text-foreground">Full Service Care</h3>
                <p className="text-muted-foreground">
                  Complete takedown and secure off-season storage — zero hassle for you.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-elegant hover:shadow-luxury transition-all duration-300">
              <CardContent className="p-8">
                <Sparkles className="text-primary mb-4" size={48} />
                <h3 className="text-2xl font-semibold mb-3 text-foreground">Free Design Mockups</h3>
                <p className="text-muted-foreground">
                  Visualize your custom lighting design before installation begins.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-elegant hover:shadow-luxury transition-all duration-300">
              <CardContent className="p-8">
                <CheckCircle className="text-gold mb-4" size={48} />
                <h3 className="text-2xl font-semibold mb-3 text-foreground">OU Student Operated</h3>
                <p className="text-muted-foreground">
                  Local, reliable, and committed to excellence in every installation.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-foreground">
              How It <span className="text-primary">Works</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Three simple steps to transform your home into a holiday masterpiece
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary text-primary-foreground text-3xl font-bold mb-6 shadow-luxury">
                1
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-foreground">Send Us Your Address</h3>
              <p className="text-muted-foreground">
                Fill out our quote form with your address and preferences. It takes just a few minutes.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gold text-foreground text-3xl font-bold mb-6 shadow-elegant">
                2
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-foreground">Custom Design & Install</h3>
              <p className="text-muted-foreground">
                We design and professionally install a custom lighting package tailored to your home.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary text-primary-foreground text-3xl font-bold mb-6 shadow-luxury">
                3
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-foreground">We Handle Everything</h3>
              <p className="text-muted-foreground">
                After the season, we remove and securely store your lights until next year.
              </p>
            </div>
          </div>

          <div className="text-center mt-16">
            <Link to="/quote">
              <Button size="lg" className="bg-primary hover:bg-primary-light text-primary-foreground shadow-luxury text-lg px-12 py-6">
                Get Started Today
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
