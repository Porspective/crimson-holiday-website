import { Link } from "react-router-dom";
import { Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-serif font-bold mb-4">
              <span className="text-primary">Crimson</span> Holiday Co.
            </h3>
            <p className="text-background/80 mb-4">
              Premium holiday lighting services for Norman, Moore, and Oklahoma City. Professional installation, custom designs, and full-service care.
            </p>
            <div className="flex flex-col space-y-2 text-background/80">
              <a href="tel:" className="flex items-center hover:text-gold transition-colors">
                <Phone size={18} className="mr-2" />
                Contact for phone
              </a>
              <a href="mailto:info@crimsonholidayco.com" className="flex items-center hover:text-gold transition-colors">
                <Mail size={18} className="mr-2" />
                info@crimsonholidayco.com
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-gold">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-background/80 hover:text-gold transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/packages" className="text-background/80 hover:text-gold transition-colors">
                  Packages
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-background/80 hover:text-gold transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-background/80 hover:text-gold transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-gold">Service Areas</h4>
            <ul className="space-y-2 text-background/80">
              <li>Norman, OK</li>
              <li>Moore, OK</li>
              <li>Oklahoma City, OK</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 mt-8 pt-8 text-center text-background/60">
          <p>&copy; {new Date().getFullYear()} Crimson Holiday Co. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
