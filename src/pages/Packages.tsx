import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Packages = () => {
  const packages = [
    {
      icon: "🎄",
      name: "Starter Package",
      description: "A clean, elegant roofline display for homeowners who prefer a timeless, architectural holiday look.",
      features: [
        "Front roofline lighting only",
        "Premium commercial-grade LED C9 bulbs",
        "Custom cut-to-fit installation",
        "Architectural clip system for straight, clean lines",
        "Automatic timer setup",
        "Professional installation",
        "Full takedown & secure off-season storage",
      ],
      color: "border-primary"
    },
    {
      icon: "⭐",
      name: "Signature Package",
      description: "Our most popular package balanced, curated, and designed to enhance your home from multiple viewing angles.",
      features: [
        "Front + side roofline lighting",
        "Premium commercial-grade LED C9 bulbs",
        "Professionally lit front bushes/landscaping",
        "Optional premium wreath",
        "Custom color selection (warm white, cool white, classic white, or custom blends)",
        "Timer setup",
        "Professional installation",
        "Full takedown & off-season storage",
      ],
      popular: true,
      color: "border-gold"
    },
    {
      icon: "🌟",
      name: "Showstopper Package",
      description: "A full-property holiday lighting experience designed for dramatic visual impact.",
      features: [
        "Full roofline lighting (front, sides, and rear)",
        "Premium commercial-grade LED C9 bulbs",
        "Full landscape glow: bushes, shrubs, and front features",
        "One wrapped tree up to 12–15 ft",
        "Optional premium wreath & accent lighting",
        "Custom lighting design mockup",
        "Priority installation scheduling",
        "Mid-season maintenance",
        "Full takedown & secure storage",
      ],
      color: "border-primary"
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="pt-32 pb-24 bg-gradient-to-b from-muted to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6 text-foreground">
              Our <span className="text-primary">Premium Packages</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Choose the perfect lighting experience for your home. All packages include professional installation, takedown, and storage.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {packages.map((pkg, index) => (
              <Card 
                key={index} 
                className={`relative border-2 ${pkg.color} ${pkg.popular ? 'shadow-luxury transform lg:scale-105' : 'shadow-elegant'} hover:shadow-luxury transition-all duration-300`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gold text-foreground px-6 py-2 rounded-full text-sm font-semibold shadow-elegant">
                      Most Popular
                    </span>
                  </div>
                )}
                <CardHeader className="text-center pb-4">
                  <div className="text-6xl mb-4">{pkg.icon}</div>
                  <CardTitle className="text-3xl font-serif mb-2">{pkg.name}</CardTitle>
                  <CardDescription className="text-base">
                    {pkg.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-8">
                    {pkg.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start">
                        <CheckCircle className="text-primary mr-3 mt-1 flex-shrink-0" size={20} />
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Link to="/quote">
                    <Button className="w-full bg-primary hover:bg-primary-light text-primary-foreground shadow-elegant">
                      Request This Package
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* OU Add-On */}
          <Card className="border-2 border-primary shadow-elegant max-w-4xl mx-auto">
            <CardHeader className="text-center">
              <div className="text-6xl mb-4">❤️</div>
              <CardTitle className="text-3xl font-serif mb-2">OU Sooner Add-On</CardTitle>
              <CardDescription className="text-base">
                A crimson & cream festive upgrade.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 mb-6">
                <div className="flex items-start">
                  <CheckCircle className="text-primary mr-3 mt-1 flex-shrink-0" size={20} />
                  <span className="text-muted-foreground">Red & white LED roofline accents or full-color swap</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-primary mr-3 mt-1 flex-shrink-0" size={20} />
                  <span className="text-muted-foreground">OU-themed wreath</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-primary mr-3 mt-1 flex-shrink-0" size={20} />
                  <span className="text-muted-foreground">Can be added to any package</span>
                </div>
              </div>
              <Link to="/quote">
                <Button className="w-full bg-primary hover:bg-primary-light text-primary-foreground">
                  Add to Your Package
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* OKC Thunder Add-On */}
          <Card className="border-2 border-primary shadow-elegant max-w-4xl mx-auto mt-8">
            <CardHeader className="text-center">
              <div className="text-6xl mb-4">⚡</div>
              <CardTitle className="text-3xl font-serif mb-2">OKC Thunder Add-On</CardTitle>
              <CardDescription className="text-base">
                Show your Thunder pride with orange, blue, and black lighting.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 mb-6">
                <div className="flex items-start">
                  <CheckCircle className="text-primary mr-3 mt-1 flex-shrink-0" size={20} />
                  <span className="text-muted-foreground">Orange, blue & black LED roofline accents or full-color swap</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-primary mr-3 mt-1 flex-shrink-0" size={20} />
                  <span className="text-muted-foreground">Oklahoma City Thunder-themed wreath</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-primary mr-3 mt-1 flex-shrink-0" size={20} />
                  <span className="text-muted-foreground">Can be added to any package</span>
                </div>
              </div>
              <Link to="/quote">
                <Button className="w-full bg-primary hover:bg-primary-light text-primary-foreground">
                  Add to Your Package
                </Button>
              </Link>
            </CardContent>
          </Card>

          <div className="text-center mt-16">
            <p className="text-xl text-muted-foreground mb-6">
              Not sure which package is right for you?
            </p>
            <Link to="/quote">
              <Button size="lg" className="bg-gold hover:bg-gold-dark text-foreground shadow-elegant text-lg px-12 py-6">
                Get a Custom Quote
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Packages;
