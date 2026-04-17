import React from "react";
import { Link } from "wouter";
import { Instagram, Facebook, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-card text-card-foreground border-t border-border mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          
          <div className="md:col-span-2">
            <h2 className="font-serif text-2xl font-semibold text-primary mb-4">YorkshireCoasting.co.uk</h2>
            <p className="text-muted-foreground text-sm max-w-sm mb-6 leading-relaxed">
              A curated collection of premium coastal holiday lets on the North Yorkshire coast. Discover your home away from home, where every detail is considered for an unhurried, welcoming stay.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="mailto:hello@yorkshirecoasting.co.uk" className="text-muted-foreground hover:text-primary transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-medium text-sm tracking-wider uppercase mb-4 text-foreground">Explore</h3>
            <ul className="space-y-3">
              <li><Link href="/" className="text-muted-foreground hover:text-primary text-sm transition-colors">Home</Link></li>
              <li><Link href="/properties" className="text-muted-foreground hover:text-primary text-sm transition-colors">Our Properties</Link></li>
              <li><Link href="/contact" className="text-muted-foreground hover:text-primary text-sm transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-sm tracking-wider uppercase mb-4 text-foreground">Contact</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>hello@yorkshirecoasting.co.uk</li>
              <li>+44 (0) 1723 800 000</li>
              <li className="pt-2">
                YorkshireCoasting Ltd<br/>
                14 Harbour Road<br/>
                Scarborough, North Yorkshire<br/>
                YO11 1XX
              </li>
            </ul>
          </div>
          
        </div>
        
        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} YorkshireCoasting Ltd. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-primary transition-colors">Terms of Service</Link>
            <Link href="/admin/login" className="hover:text-primary transition-colors">Admin Login</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
