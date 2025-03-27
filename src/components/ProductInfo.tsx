import { Truck } from "lucide-react";
import { Link } from "react-router-dom";
import productImage from "./images/475774275_596379526442166_4705289588134950265_n-removebg-preview.png";

const ProductInfo = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      <div className="glass-card p-8 rounded-3xl overflow-hidden animate-fade-in">
        <div className="w-full h-64 md:h-96 bg-risen-100 rounded-xl flex items-center justify-center">
          <img 
            src={productImage}
            alt="Risen Bond Product"
            className="h-full w-full object-contain p-4"
          />
        </div>
      </div>
      
      <div className="space-y-6 animate-slide-in">
        <div>
          <div className="font-medium text-risen-400">Premium Product</div>
          <h1 className="text-4xl md:text-5xl font-bold text-risen-600 mt-2">Risen Bond 10Kg</h1>
          <div className="flex items-center mt-2">
            <div className="text-3xl font-bold text-risen-500">18,000 Naira</div>
          </div>
        </div>
        
        <div className="h-px bg-risen-100"></div>
        
        <div className="flex items-start space-x-3">
          <Truck className="w-5 h-5 text-risen-400 mt-0.5" />
          <div>
            <div className="font-medium text-risen-600">Free Delivery</div>
            <p className="text-sm text-risen-400 mt-1">
              Free delivery within Lagos. Delivery charges outside Lagos are negotiable. 
              Enter your minimum transport price during checkout.
            </p>
          </div>
        </div>
        
        <div className="h-px bg-risen-100"></div>
        
        <p className="text-risen-500 leading-relaxed"> 
          Don't miss this incredible offer.
        </p>
        
        <Link 
          to="/order"
          className="inline-flex items-center justify-center h-12 px-8 font-medium tracking-wide text-white transition duration-200 bg-risen-500 rounded-lg hover:bg-risen-600 focus:shadow-outline focus:outline-none mt-2"
        >
          Order Now
        </Link>
      </div>
    </div>
  );
};

export default ProductInfo;
