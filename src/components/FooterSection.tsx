import { HashLink } from 'react-router-hash-link';
import { Mail, Phone, Linkedin, Facebook, Twitter } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';

export default function FooterSection() {
  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription here
  };

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Company Info */}
          <div className="flex flex-col">
            <div className="flex items-center gap-3 mb-6">
              <img
                src="/logo.png"
                alt="Leotechsa Logo"
                className="w-12 h-12 object-contain"
                loading="lazy"
                width="48"
                height="48"
              />
              <div>
                <h3 className="font-bold text-lg">Leotechsa</h3>
                <p className="text-xs text-gray-400">Robotics Pvt. Ltd.</p>
              </div>
            </div>

            <div className="space-y-3 text-sm text-gray-300">
              <p className="text-xs">
                Ravi Garden RH:120, Solapur-Pune Highway, Pune, Maharashtra 412307, India.
              </p>

              <div className="flex items-center gap-2">
                <Phone size={16} className="text-green-500" />
                <span>8087870090</span>
              </div>

              <div className="flex items-start gap-2">
                <Mail size={16} className="text-green-500 mt-0.5" />
                <a
                  href="mailto:enquiry@leotechsa.com"
                  className="hover:text-green-500 transition"
                >
                  enquiry@leotechsa.com
                </a>
              </div>
            </div>
          </div>

          {/* Useful Links */}
          <div>
            <h4 className="text-white font-bold mb-6 flex items-center gap-2">
              USEFUL LINKS
              <span className="w-1 h-1 bg-green-500 rounded-full"></span>
            </h4>

            <ul className="space-y-3 text-sm text-gray-300">
              <li><HashLink to="/" className="hover:text-green-500 transition">HOME</HashLink></li>
              <li><HashLink to="/#about" className="hover:text-green-500 transition">ABOUT US</HashLink></li>
              <li><HashLink to="/#product" className="hover:text-green-500 transition">PRODUCT & SEGMENT</HashLink></li>
              <li><HashLink to="/career" className="hover:text-green-500 transition">CAREER</HashLink></li>
              <li><HashLink to="/#contact" className="hover:text-green-500 transition">CONTACT</HashLink></li>
            </ul>
          </div>

          {/* Our Products */}
          <div>
            <h4 className="text-white font-bold mb-6 flex items-center gap-2">
              OUR PRODUCTS
              <span className="w-1 h-1 bg-green-500 rounded-full"></span>
            </h4>

            <ul className="space-y-3 text-sm text-gray-300">
              <li><HashLink to="/agriculture" className="hover:text-green-500 transition">AGRICULTURE</HashLink></li>
              <li><HashLink to="/transport" className="hover:text-green-500 transition">TRANSPORTATION</HashLink></li>
              <li><HashLink to="/defence" className="hover:text-green-500 transition">DEFENSE</HashLink></li>
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div>
            <h4 className="text-white font-bold mb-6 flex items-center gap-2">
              JOIN OUR NEWSLETTER
              <span className="w-1 h-1 bg-green-500 rounded-full"></span>
            </h4>

            <form onSubmit={handleSubscribe} className="space-y-3">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-white text-black border-0 py-2 rounded"
                aria-label="Email address"
                required
              />
              <Button className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2">
                SUBSCRIBE
              </Button>
            </form>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            
            <div className="text-sm text-gray-400">
              <p>
                © Copyright <span className="font-bold">Leotechsa Robotics Pvt. Ltd.</span> All Rights Reserved
              </p>
              <p className="mt-1">
                Designed By <span className="text-green-500 font-semibold">Shaurya</span>
              </p>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4">
              <a className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center hover:bg-green-600 hover:border-green-600 transition" aria-label="LinkedIn">
                <Linkedin size={18} />
              </a>
              <a className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center hover:bg-green-600 hover:border-green-600 transition" aria-label="Facebook">
                <Facebook size={18} />
              </a>
              <a className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center hover:bg-green-600 hover:border-green-600 transition" aria-label="Twitter">
                <Twitter size={18} />
              </a>
            </div>

          </div>
        </div>
      </div>
    </footer>
  );
}
