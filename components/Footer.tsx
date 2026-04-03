import Link from 'next/link';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-amber-600 rounded-lg flex items-center justify-center">
                <span className="text-slate-900 font-bold text-xl">P</span>
              </div>
              <span className="font-bold text-xl">PrintCraft</span>
            </div>
            <p className="text-gray-400 text-sm">
              Your trusted partner for premium printing and design services.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4 text-amber-400">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-amber-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-amber-400 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-gray-400 hover:text-amber-400 transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-amber-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4 text-amber-400">Services</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>Banner Printing</li>
              <li>Wedding Cards</li>
              <li>Visiting Cards</li>
              <li>Poster Design</li>
              <li>Flex Printing</li>
              <li>Custom Designs</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4 text-amber-400">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2 text-gray-400 text-sm">
                <Phone size={16} className="text-amber-400" />
                <span>+91 8303319119</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-400 text-sm">
                <Mail size={16} className="text-amber-400" />
                <span>mauryaaryan83033@gmail.com</span>
              </li>
              <li className="flex items-start space-x-2 text-gray-400 text-sm">
                <MapPin size={16} className="text-amber-400 mt-1" />
                <span>khamaria, bhadohi  221306,pakditar</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} PrintCraft. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
