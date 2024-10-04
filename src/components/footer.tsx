
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white text-black p-8 mt-10">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-between">
          <div className="w-1/4">
            <h4 className="font-bold mb-2">Domino’s Pizza</h4>
            <ul>
              <li><a href="/about" className="hover:underline">About Us</a></li>
              <li><a href="/privacy" className="hover:underline">Privacy Policy</a></li>
              <li><a href="/terms" className="hover:underline">Terms & Conditions</a></li>
              <li><a href="/nutritional-info" className="hover:underline">Nutritional Info</a></li>
              <li><a href="/menu" className="hover:underline">Download Menu</a></li>
              <li><a href="/contact" className="hover:underline">Contact</a></li>
            </ul>
          </div>
          <div className="w-1/4">
            <h4 className="font-bold mb-2">Support</h4>
            <ul>
              <li>Call 111 366 466</li>
              <li><a href="/feedback" className="hover:underline">Feedback</a></li>
              <li><a href="/help" className="hover:underline">Help</a></li>
              <li><a href="/track-order" className="hover:underline">Track Order</a></li>
              <li><a href="/store-finder" className="hover:underline">Store Finder</a></li>
            </ul>
          </div>
          <div className="w-1/4">
            <h4 className="font-bold mb-2">Download Our App</h4>
            <ul>
              <li><a href="https://www.apple.com/app-store/" className="hover:underline">Apple Store</a></li>
              <li><a href="https://play.google.com/store" className="hover:underline">Android App Store</a></li>
            </ul>
          </div>
          <div className="w-1/4">
            <h4 className="font-bold mb-2">Copyright</h4>
            <p>2024 Dominos. All rights reserved.</p>
            <p>Powered By</p>

           
            <div className="flex mt-4 space-x-4">
              <a href="https://www.facebook.com/dominospakistan" target="_blank" rel="noopener noreferrer">
                <img
                  src="/images/logo2.jpg" 
                  alt="Facebook"
                  className="w-8 h-8 rounded-full hover:opacity-75"
                />
              </a>
              <a href="https://www.youtube.com/channel/UCsHUR9AyjKUTtWWoLmpUd-A" target="_blank" rel="noopener noreferrer">
                <img
                  src="/images/logo3.jpg" 
                  alt="YouTube"
                  className="w-8 h-8 rounded-full hover:opacity-75"
                />
              </a>
              <a href="https://www.instagram.com/dominos_pk/?hl=en" target="_blank" rel="noopener noreferrer">
                <img
                  src="/images/logo.jpg"
                  alt="Instagram"
                  className="w-8 h-8 rounded-full hover:opacity-75"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
