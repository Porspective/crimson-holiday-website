import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Quote = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    address: "",
    city: "",
    neighborhood: "",
    homeSize: "",
    areasToLight: [] as string[],
    preferredPackage: "",
    addOns: [] as string[],
    lightingStyle: "",
    installationTiming: "",
    additionalNotes: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleCheckboxChange = (field: 'areasToLight' | 'addOns', value: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: checked 
        ? [...prev[field], value]
        : prev[field].filter(item => item !== value)
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Replace with your Formspree form ID
      const formspreeEndpoint = "https://formspree.io/f/xgvdonba";
      
      const response = await fetch(formspreeEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          _subject: `Holiday Lighting Quote Request - ${formData.fullName}`,
          fullName: formData.fullName,
          phone: formData.phone,
          email: formData.email,
          address: formData.address,
          city: formData.city,
          neighborhood: formData.neighborhood,
          homeSize: formData.homeSize,
          areasToLight: formData.areasToLight.join(', ') || 'None selected',
          preferredPackage: formData.preferredPackage,
          addOns: formData.addOns.join(', ') || 'None selected',
          lightingStyle: formData.lightingStyle,
          installationTiming: formData.installationTiming,
          additionalNotes: formData.additionalNotes || 'None',
        }),
      });

      if (response.ok) {
        setSubmitted(true);
        toast.success("Quote request sent successfully!");
      } else {
        toast.error("Failed to send quote request. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="pt-32 pb-24 bg-gradient-to-b from-muted to-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="max-w-2xl mx-auto text-center shadow-luxury">
              <CardHeader>
                <div className="text-6xl mb-4">✨</div>
                <CardTitle className="text-4xl font-serif mb-4">Thank You!</CardTitle>
                <CardDescription className="text-lg">
                  We've received your custom quote request. We'll contact you within 24 hours with your custom quote and optional design mockup.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button 
                  onClick={() => window.location.href = '/'}
                  className="bg-primary hover:bg-primary-light text-primary-foreground"
                >
                  Return to Home
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="pt-32 pb-24 bg-gradient-to-b from-muted to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6 text-foreground">
              Get a Custom Holiday Lighting <span className="text-primary">Quote</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Tell us what you want lit, and we'll design your perfect holiday display.
            </p>
          </div>

          <Card className="max-w-4xl mx-auto shadow-luxury">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Contact Information */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold text-foreground">Contact Information</h3>
                  
                  <div>
                    <Label htmlFor="fullName">Full Name *</Label>
                    <Input
                      id="fullName"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                      className="mt-1"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address (Optional)</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="mt-1"
                      />
                    </div>
                  </div>
                </div>

                {/* Property Information */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold text-foreground">Property Information</h3>
                  
                  <div>
                    <Label htmlFor="address">Street Address *</Label>
                    <Input
                      id="address"
                      required
                      value={formData.address}
                      onChange={(e) => setFormData({...formData, address: e.target.value})}
                      className="mt-1"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="city">City *</Label>
                      <Select value={formData.city} onValueChange={(value) => setFormData({...formData, city: value})}>
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Select city" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Norman">Norman</SelectItem>
                          <SelectItem value="Moore">Moore</SelectItem>
                          <SelectItem value="OKC">Oklahoma City</SelectItem>
                          <SelectItem value="Other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="neighborhood">Neighborhood/Subdivision (Optional)</Label>
                      <Input
                        id="neighborhood"
                        value={formData.neighborhood}
                        onChange={(e) => setFormData({...formData, neighborhood: e.target.value})}
                        className="mt-1"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="homeSize">Approximate Home Size *</Label>
                    <Select value={formData.homeSize} onValueChange={(value) => setFormData({...formData, homeSize: value})}>
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Select home size" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="under-2000">Under 2,000 sq ft</SelectItem>
                        <SelectItem value="2000-3000">2,000 - 3,000 sq ft</SelectItem>
                        <SelectItem value="3000-5000">3,000 - 5,000 sq ft</SelectItem>
                        <SelectItem value="5000+">5,000+ sq ft</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Lighting Preferences */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold text-foreground">Lighting Preferences</h3>
                  
                  <div>
                    <Label className="mb-3 block">Areas to Light *</Label>
                    <div className="space-y-2">
                      {['Front roofline', 'Front + sides', 'Full roofline', 'Bushes/landscape', 'One tree', 'Multiple trees', 'Not sure'].map((area) => (
                        <div key={area} className="flex items-center">
                          <Checkbox
                            id={area}
                            checked={formData.areasToLight.includes(area)}
                            onCheckedChange={(checked) => handleCheckboxChange('areasToLight', area, checked as boolean)}
                          />
                          <label htmlFor={area} className="ml-2 text-sm cursor-pointer">
                            {area}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="preferredPackage">Preferred Package</Label>
                    <Select value={formData.preferredPackage} onValueChange={(value) => setFormData({...formData, preferredPackage: value})}>
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Select a package" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="starter">Starter</SelectItem>
                        <SelectItem value="signature">Signature</SelectItem>
                        <SelectItem value="showstopper">Showstopper</SelectItem>
                        <SelectItem value="not-sure">Not sure</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label className="mb-3 block">Add-Ons</Label>
                    <div className="space-y-2">
                      {['OU Sooner Add-On', 'Wreath', 'Extra bushes', 'Extra tree wrapping'].map((addon) => (
                        <div key={addon} className="flex items-center">
                          <Checkbox
                            id={addon}
                            checked={formData.addOns.includes(addon)}
                            onCheckedChange={(checked) => handleCheckboxChange('addOns', addon, checked as boolean)}
                          />
                          <label htmlFor={addon} className="ml-2 text-sm cursor-pointer">
                            {addon}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="lightingStyle">Lighting Style</Label>
                      <Select value={formData.lightingStyle} onValueChange={(value) => setFormData({...formData, lightingStyle: value})}>
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Select style" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="warm-white">Warm White</SelectItem>
                          <SelectItem value="cool-white">Cool White</SelectItem>
                          <SelectItem value="multicolor">Multicolor</SelectItem>
                          <SelectItem value="not-sure">Not sure</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="installationTiming">Installation Timing</Label>
                      <Select value={formData.installationTiming} onValueChange={(value) => setFormData({...formData, installationTiming: value})}>
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Select timing" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="asap">ASAP</SelectItem>
                          <SelectItem value="1-week">Within 1 week</SelectItem>
                          <SelectItem value="2-3-weeks">2-3 weeks</SelectItem>
                          <SelectItem value="specific">Specific date</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="additionalNotes">Additional Notes</Label>
                    <Textarea
                      id="additionalNotes"
                      value={formData.additionalNotes}
                      onChange={(e) => setFormData({...formData, additionalNotes: e.target.value})}
                      className="mt-1"
                      rows={4}
                      placeholder="Any special requests, concerns, or details we should know about..."
                    />
                  </div>

                  <div>
                    <Label htmlFor="photo" className="block mb-2">Photo Upload (Optional but recommended)</Label>
                    <Input
                      id="photo"
                      type="file"
                      accept="image/*"
                      multiple
                      className="mt-1"
                    />
                    <p className="text-sm text-muted-foreground mt-1">Upload photos of your home to help us design your perfect display</p>
                  </div>
                </div>

                <Button 
                  type="submit" 
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-primary-light text-primary-foreground shadow-luxury text-lg py-6"
                >
                  {isSubmitting ? "Sending..." : "Request My Custom Quote"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Quote;
