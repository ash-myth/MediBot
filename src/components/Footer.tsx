
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-secondary py-12 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Info */}
          <div className="col-span-1">
            <Link to="/" className="flex items-center">
              <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center mr-2">
                <span className="text-white font-bold">M</span>
              </div>
              <span className="font-semibold text-lg">MediBot</span>
            </Link>
            <p className="mt-3 text-muted-foreground text-sm">
              Your trusted medical information assistant, providing accurate information about medications and health concerns.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/search" className="text-muted-foreground hover:text-foreground transition-colors">
                  Search Medicines
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Disclaimer */}
          <div className="col-span-1">
            <h3 className="font-semibold mb-4">Disclaimer</h3>
            <p className="text-muted-foreground text-sm">
              MediBot provides general information for educational purposes only. Always consult with qualified healthcare professionals for medical advice. Never disregard professional medical advice or delay seeking it.
            </p>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-sm text-muted-foreground text-center">
          <p>© {new Date().getFullYear()} MediBot. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
