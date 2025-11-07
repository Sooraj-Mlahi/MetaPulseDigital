'use client';

import Link from 'next/link';
import { Mail, Linkedin, Instagram } from 'lucide-react';
import { SiX } from 'react-icons/si';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-card/50 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="text-2xl font-bold text-gradient">MetaPulse</div>
            <p className="text-sm text-muted-foreground">
              The Future of Marketing is Answer Intelligence
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="/" 
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  data-testid="link-footer-home"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  href="/technology" 
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  data-testid="link-footer-technology"
                >
                  Technology
                </Link>
              </li>
              <li>
                <Link 
                  href="/demo" 
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  data-testid="link-footer-demo"
                >
                  Demo
                </Link>
              </li>
              <li>
                <Link 
                  href="/about" 
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  data-testid="link-footer-about"
                >
                  About
                </Link>
              </li>
              <li>
                <Link 
                  href="/contact" 
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  data-testid="link-footer-contact"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Technology</h3>
            <ul className="space-y-2">
              <li className="text-sm text-muted-foreground">BrandSynq™</li>
              <li className="text-sm text-muted-foreground">MetaDrive™</li>
              <li className="text-sm text-muted-foreground">MPX™</li>
              <li className="text-sm text-muted-foreground">Lift Ledger™</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a 
                href="mailto:info@metapulsedigital.com" 
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Email MetaPulse Digital"
                data-testid="link-social-email"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a 
                href="https://www.instagram.com/metapulsedigital" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Follow MetaPulse on Instagram"
                data-testid="link-social-instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://twitter.com/metapulsedigital" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Follow MetaPulse on X"
                data-testid="link-social-twitter"
              >
                <SiX className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>© {currentYear} MetaPulse Digital. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
