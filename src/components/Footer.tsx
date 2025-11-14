import { Mail, Phone, MapPin, Clock } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-white text-xl font-bold mb-4">Cloudium TechWorks</h3>
            <p className="text-sm mb-4">
              Empowering businesses with innovative IT consulting and digital transformation solutions.
            </p>
            <p className="text-xs text-gray-400">
              License: Cloudium TechWorks L.L.C-FZ
            </p>
          </div>

          <div>
            <h4 className="text-white text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="text-sm hover:text-blue-400 transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="text-sm hover:text-blue-400 transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="text-sm hover:text-blue-400 transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('industries')}
                  className="text-sm hover:text-blue-400 transition-colors"
                >
                  Industries
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="text-sm hover:text-blue-400 transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start text-sm">
                <MapPin size={16} className="mr-2 mt-1 flex-shrink-0" />
                <span>Meydan Grandstand, 6th Floor, Meydan Road, Nad Al Sheba, Dubai, U.A.E.</span>
              </li>
              <li className="flex items-center text-sm">
                <Phone size={16} className="mr-2 flex-shrink-0" />
                <span>+971 522978972</span>
              </li>
              <li className="flex items-center text-sm">
                <Mail size={16} className="mr-2 flex-shrink-0" />
                <span>info@cloudium.inc</span>
              </li>
              <li className="flex items-start text-sm">
                <Clock size={16} className="mr-2 mt-1 flex-shrink-0" />
                <span>Monday to Friday — 10:00 AM to 6:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Cloudium TechWorks L.L.C-FZ. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
