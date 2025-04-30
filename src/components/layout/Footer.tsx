
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';
import { Button } from "@/components/ui/button";

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-prevented-blue-dark text-white pt-16 pb-8" role="contentinfo">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-4">PreventED</h3>
            <p className="opacity-80 mb-4">
              Working to protect children and young people from harm through education, 
              support, and advocacy.
            </p>
            <Button asChild className="bg-prevented-accent hover:bg-prevented-accent/90 text-white font-medium">
              <a href="/donate">Donate Now</a>
            </Button>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="opacity-80 hover:opacity-100 transition-opacity">Home</Link>
              </li>
              <li>
                <Link to="/about" className="opacity-80 hover:opacity-100 transition-opacity">About</Link>
              </li>
              <li>
                <Link to="/programs" className="opacity-80 hover:opacity-100 transition-opacity">Programs</Link>
              </li>
              <li>
                <Link to="/resources" className="opacity-80 hover:opacity-100 transition-opacity">Resources</Link>
              </li>
              <li>
                <Link to="/get-involved" className="opacity-80 hover:opacity-100 transition-opacity">Get Involved</Link>
              </li>
              <li>
                <Link to="/contact" className="opacity-80 hover:opacity-100 transition-opacity">Contact</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <Phone size={18} />
                <a href="tel:+441234567890" className="opacity-80 hover:opacity-100 transition-opacity">
                  +44 1234 567890
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} />
                <a href="mailto:info@prevented.org.uk" className="opacity-80 hover:opacity-100 transition-opacity">
                  info@prevented.org.uk
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="mt-1" />
                <address className="opacity-80 not-italic">
                  123 Prevention Street<br />
                  London, W1 1AA<br />
                  United Kingdom
                </address>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Stay Connected</h3>
            <p className="opacity-80 mb-4">
              Follow us on social media for updates on our work and ways to get involved.
            </p>
            <div className="flex gap-4">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="bg-white/20 hover:bg-white/30 rounded-full p-2 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="bg-white/20 hover:bg-white/30 rounded-full p-2 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="bg-white/20 hover:bg-white/30 rounded-full p-2 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/20 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="opacity-80 text-sm">
              &copy; {currentYear} PreventED. All rights reserved. Registered Charity No: 123456789
            </p>
            <div className="flex gap-4 text-sm opacity-80">
              <a href="/privacy-policy" className="hover:opacity-100 transition-opacity">Privacy Policy</a>
              <span>|</span>
              <a href="/terms-of-use" className="hover:opacity-100 transition-opacity">Terms of Use</a>
              <span>|</span>
              <a href="/accessibility" className="hover:opacity-100 transition-opacity">Accessibility</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
