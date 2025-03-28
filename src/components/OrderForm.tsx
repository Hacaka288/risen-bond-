import { useState, useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';
import { motion } from 'framer-motion';
import { CheckCircle, Loader2, Plus, Minus } from 'lucide-react';
import { PRODUCT_PRICE, FORMSPREE_ENDPOINT, WHATSAPP_NUMBER } from '@/lib/constants';

interface OrderFormProps {
  onOrderSuccess: () => void;
}

const OrderForm = ({ onOrderSuccess }: OrderFormProps) => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    state: '',
    whatsapp: '',
    paymentMethod: 'cash',
    transportPrice: '',
    quantity: 1,
  });
  const [totalPrice, setTotalPrice] = useState(18000);
  const [promoQuantity, setPromoQuantity] = useState(0);

  useEffect(() => {
    // Calculate price and promo
    const basePrice = PRODUCT_PRICE;
    const orderQuantity = formData.quantity;
    const promoBonus = Math.floor(orderQuantity / 10);
    
    setPromoQuantity(promoBonus);
    setTotalPrice(basePrice * orderQuantity);
  }, [formData.quantity]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    // Make sure only numbers are entered for whatsapp and transportPrice
    if (name === 'whatsapp' || name === 'transportPrice') {
      const numericValue = value.replace(/\D/g, '');
      setFormData(prev => ({ ...prev, [name]: numericValue }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const increaseQuantity = () => {
    setFormData(prev => ({ ...prev, quantity: prev.quantity + 1 }));
  };

  const decreaseQuantity = () => {
    setFormData(prev => ({ 
      ...prev, 
      quantity: prev.quantity > 1 ? prev.quantity - 1 : 1 
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Calculate order summary for submission
    const promoBonus = Math.floor(formData.quantity / 10);
    const totalPrice = PRODUCT_PRICE * formData.quantity;
    const totalProducts = formData.quantity + promoBonus;
    
    // Include calculated values in submission
    const formDataToSubmit = {
      ...formData,
      orderDate: new Date().toISOString(),
      promoBonus,
      totalPrice,
      totalProducts,
      unitPrice: PRODUCT_PRICE
    };
    
    // Send to Formspree
    fetch(FORMSPREE_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formDataToSubmit),
    })
      .then(response => {
        if (!response.ok) {
          // Log detailed error for debugging
          return response.json().then(errorData => {
            console.error('Formspree error response:', errorData);
            return Promise.reject(errorData);
          });
        }
        return response.json();
      })
      .then(data => {
        // Success! Show toast
        toast({
          title: "Order Submitted Successfully",
          description: "We've received your order and will contact you shortly via WhatsApp.",
        });
        
        onOrderSuccess();
        
        // Reset form data
        setFormData({
          name: '',
          address: '',
          state: '',
          whatsapp: '',
          paymentMethod: 'cash',
          transportPrice: '',
          quantity: 1,
        });
      })
      .catch(error => {
        console.error('Error submitting order:', error);
        
        // Attempt to get a better error message to show the user
        let errorMessage = "There was an error processing your order. Please try again or contact us via WhatsApp.";
        if (error && error.message) {
          errorMessage = error.message;
        } else if (error && error.error) {
          errorMessage = error.error;
        }
        
        toast({
          title: "Order Submission Failed",
          description: errorMessage,
          variant: "destructive"
        });
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  // Bank account details
  const bankDetails = {
    bankName: "Zenith Bank",
    accountName: "Risen foam manufacturing company Ltd",
    accountNumber: "1017746242"
  };

  return (
    <div className="glass-card p-6 sm:p-8 md:p-10 rounded-3xl w-full max-w-2xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-bold text-risen-600 mb-10 text-center">Place Your Order</h2>
      
      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="space-y-6 md:space-y-8">
          <div>
            <label htmlFor="name" className="block text-lg font-medium text-risen-500 mb-3">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-5 py-5 rounded-lg border border-risen-100 focus:border-risen-300 focus:ring focus:ring-risen-200 focus:ring-opacity-50 transition-all bg-white/50 backdrop-blur-sm text-lg"
              placeholder="Enter your full name"
            />
          </div>
          
          <div>
            <label htmlFor="address" className="block text-lg font-medium text-risen-500 mb-3">
              Delivery Address
            </label>
            <textarea
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
              rows={3}
              className="w-full px-5 py-5 rounded-lg border border-risen-100 focus:border-risen-300 focus:ring focus:ring-risen-200 focus:ring-opacity-50 transition-all bg-white/50 backdrop-blur-sm text-lg"
              placeholder="Enter your delivery address"
            />
          </div>
          
          <div>
            <label htmlFor="state" className="block text-lg font-medium text-risen-500 mb-3">
              State
            </label>
            <input
              type="text"
              id="state"
              name="state"
              value={formData.state}
              onChange={handleChange}
              required
              className="w-full px-5 py-5 rounded-lg border border-risen-100 focus:border-risen-300 focus:ring focus:ring-risen-200 focus:ring-opacity-50 transition-all bg-white/50 backdrop-blur-sm text-lg"
              placeholder="Enter your state"
            />
          </div>
          
          <div>
            <label htmlFor="quantity" className="block text-lg font-medium text-risen-500 mb-3">
              Quantity
            </label>
            <div className="flex items-center">
              <button 
                type="button"
                onClick={decreaseQuantity}
                className="h-14 w-14 flex items-center justify-center bg-risen-100 hover:bg-risen-200 rounded-l-lg transition-colors"
              >
                <Minus size={24} className="text-risen-600" />
              </button>
              <input
                type="number"
                id="quantity"
                name="quantity"
                value={formData.quantity}
                onChange={handleChange}
                min="1"
                required
                className="w-24 h-14 text-center border-y border-risen-100 focus:outline-none focus:border-risen-300 text-xl"
              />
              <button 
                type="button"
                onClick={increaseQuantity}
                className="h-14 w-14 flex items-center justify-center bg-risen-100 hover:bg-risen-200 rounded-r-lg transition-colors"
              >
                <Plus size={24} className="text-risen-600" />
              </button>
              <div className="ml-5 text-risen-600 font-medium text-xl">
                Price: ₦{totalPrice.toLocaleString()}
              </div>
            </div>
            {promoQuantity > 0 && (
              <div className="mt-4 text-lg text-green-600 font-medium">
                🎁 Promo: You get {promoQuantity} free product{promoQuantity > 1 ? 's' : ''}!
              </div>
            )}
          </div>
          
          <div>
            <label htmlFor="whatsapp" className="block text-lg font-medium text-risen-500 mb-3">
              WhatsApp Number
            </label>
            <input
              type="tel"
              id="whatsapp"
              name="whatsapp"
              value={formData.whatsapp}
              onChange={handleChange}
              required
              className="w-full px-5 py-5 rounded-lg border border-risen-100 focus:border-risen-300 focus:ring focus:ring-risen-200 focus:ring-opacity-50 transition-all bg-white/50 backdrop-blur-sm text-lg"
              placeholder="Enter your WhatsApp number"
            />
          </div>
          
          <div>
            <label htmlFor="paymentMethod" className="block text-lg font-medium text-risen-500 mb-3">
              Preferred Payment Method
            </label>
            <select
              id="paymentMethod"
              name="paymentMethod"
              value={formData.paymentMethod}
              onChange={handleChange}
              required
              className="w-full px-5 py-5 rounded-lg border border-risen-100 focus:border-risen-300 focus:ring focus:ring-risen-200 focus:ring-opacity-50 transition-all bg-white/50 backdrop-blur-sm text-lg"
            >
              <option value="cash">Cash on Delivery</option>
              <option value="bank">Bank Transfer before Delivery</option>
            </select>
          </div>

          {formData.paymentMethod === 'bank' && (
            <div className="p-6 bg-risen-50 rounded-lg border border-risen-100 mt-4">
              <h3 className="font-medium text-xl text-risen-600 mb-4">Bank Account Details:</h3>
              <div className="space-y-3 text-lg">
                <p><span className="font-medium">Bank Name:</span> {bankDetails.bankName}</p>
                <p><span className="font-medium">Account Name:</span> {bankDetails.accountName}</p>
                <p><span className="font-medium">Account Number:</span> {bankDetails.accountNumber}</p>
              </div>
            </div>
          )}
          
          <div>
            <label htmlFor="transportPrice" className="block text-lg font-medium text-risen-500 mb-3">
              Your Transport Price Negotiation (For Outside Lagos)
            </label>
            <input
              type="tel"
              id="transportPrice"
              name="transportPrice"
              value={formData.transportPrice}
              onChange={handleChange}
              className="w-full px-5 py-5 rounded-lg border border-risen-100 focus:border-risen-300 focus:ring focus:ring-risen-200 focus:ring-opacity-50 transition-all bg-white/50 backdrop-blur-sm text-lg"
              placeholder="Only required if you're outside Lagos"
            />
            <p className="text-base text-risen-400 mt-3">
              Leave empty if you're in Lagos (free delivery).
            </p>
          </div>
        </div>
        
        <div className="bg-risen-50 p-6 rounded-lg border border-risen-100">
          <h3 className="font-medium text-xl text-risen-600 mb-4">Order Summary:</h3>
          <div className="space-y-3 text-lg">
            <p><span className="font-medium">Quantity:</span> {formData.quantity}</p>
            {promoQuantity > 0 && (
              <p><span className="font-medium">Free Bonus:</span> {promoQuantity}</p>
            )}
            <p><span className="font-medium">Total Products:</span> {Number(formData.quantity) + promoQuantity}</p>
            <p><span className="font-medium">Total Price:</span> ₦{totalPrice.toLocaleString()}</p>
          </div>
        </div>
        
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full h-16 flex items-center justify-center text-white font-medium bg-risen-500 rounded-lg hover:bg-risen-600 transition-colors focus:outline-none focus:ring-2 focus:ring-risen-300 focus:ring-opacity-50 disabled:opacity-70 text-xl"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="animate-spin mr-3 h-7 w-7" />
              Processing...
            </>
          ) : (
            'Order Now'
          )}
        </button>
      </form>
    </div>
  );
};

export default OrderForm;
