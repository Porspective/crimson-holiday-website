import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";

const Gallery = () => {
  // Placeholder for gallery images - in production, these would be actual project photos
  const galleryCategories = [
    {
      title: "Roofline Elegance",
      description: "Clean, architectural roofline displays",
      count: 8
    },
    {
      title: "Tree Wrapping",
      description: "Professionally wrapped trees",
      count: 6
    },
    {
      title: "Landscape Lighting",
      description: "Beautiful bush and shrub accents",
      count: 7
    },
    {
      title: "Premium Wreaths",
      description: "Custom wreath installations",
      count: 5
    },
    {
      title: "OU Spirit",
      description: "Crimson and cream displays",
      count: 4
    },
    {
      title: "Full Property",
      description: "Complete home transformations",
      count: 10
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="pt-32 pb-24 bg-gradient-to-b from-muted to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6 text-foreground">
              Our <span className="text-primary">Portfolio</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Browse our collection of premium holiday lighting installations across Norman, Moore, and OKC.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryCategories.map((category, index) => (
              <Card 
                key={index}
                className="overflow-hidden shadow-elegant hover:shadow-luxury transition-all duration-300 group cursor-pointer"
              >
                <div className="aspect-[4/3] bg-gradient-to-br from-muted to-muted-foreground/20 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center p-6">
                      <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">✨</div>
                      <p className="text-muted-foreground text-sm">{category.count} projects</p>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors" />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
                    {category.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {category.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Card className="inline-block p-8 shadow-elegant">
              <p className="text-xl text-muted-foreground mb-4">
                Want to see your home featured here?
              </p>
              <a href="/quote">
                <button className="bg-primary hover:bg-primary-light text-primary-foreground px-8 py-3 rounded-lg shadow-luxury transition-colors">
                  Request Your Custom Design
                </button>
              </a>
            </Card>
          </div>

          <div className="mt-12 text-center text-muted-foreground">
            <p className="text-sm">
              Note: Gallery showcases our installation categories. Actual project photos will be added as we complete installations this season.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Gallery;
