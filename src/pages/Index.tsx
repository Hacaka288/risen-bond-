import { useEffect, useState } from "react";
import PromoHeader from "@/components/PromoHeader";
import ProductInfo from "@/components/ProductInfo";
import Timer from "@/components/Timer";
import ContactSection from "@/components/ContactSection";
import { Link } from 'react-router-dom';
// Remove OrderForm import


const Index = () => {
  // Set the promo end date to 30 days from now
  const endDate = new Date();
  endDate.setDate(endDate.getDate() + 30);
  
  const [isThankYouOpen, setIsThankYouOpen] = useState(false);
  const [observerInitialized, setObserverInitialized] = useState(false);

  // Initialize intersection observer for animation
  useEffect(() => {
    if (!observerInitialized) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.1 });

      document.querySelectorAll(".slide-in-element").forEach((el) => {
        observer.observe(el);
      });

      setObserverInitialized(true);
      
      return () => {
        observer.disconnect();
      };
    }
  }, [observerInitialized]);

  return (
    <div className="min-h-screen pb-0 flex flex-col">
      {/* Promo Header */}
      <PromoHeader endDate={endDate} />
      
      <div className="flex-grow">
        {/* Product Info Section */}
        <section className="bg-risen-50 pt-32">
          <div className="container mx-auto">
            <ProductInfo />
          </div>
        </section>
        
        {/* Promo Section */}
        <section id="limited-time-offer" className="bg-gradient-to-r from-risen-600 to-risen-500 text-white">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Limited Time Offer</h2>
            <div className="max-w-3xl mx-auto glass-card bg-white/10 border-white/20 p-6 rounded-2xl mb-8">
              <div className="text-2xl md:text-3xl font-bold mb-4 leading-tight">
                Buy 10, Get 1 Free!<br />
                Buy 20, Get 2 Free!<br />
                Buy 100, Get 10 Free!
              </div>
              <p className="text-white/80">
                Don't miss this incredible opportunity to save while getting the premium 
                quality of Risen Bond products.
              </p>
            </div>
            <div className="mb-8">
              <p className="text-lg mb-2">Hurry! Offer Ends In:</p>
              <Timer endDate={endDate} className="mx-auto" />
            </div>
            <Link
              to="/order"
              className="inline-flex items-center justify-center h-12 px-8 font-medium tracking-wide text-risen-600 transition duration-200 bg-white rounded-lg hover:bg-risen-50 focus:shadow-outline focus:outline-none"
            >
              Order Now
            </Link>
          </div>
        </section>
        
        {/* Contact Section */}
        <section id="contact-section">
          <ContactSection />
        </section>
      </div>
      
      {/* Footer */}
      <footer className="bg-risen-600 text-white py-4 mt-auto">
        <div className="container mx-auto text-center">
          <p className="text-sm">© 2025 Risen Life. All rights reserved.</p>
        </div>
      </footer>
      

    </div>
  );
};

export default Index;
