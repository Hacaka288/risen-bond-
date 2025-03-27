import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import OrderForm from '@/components/OrderForm';
import ThankYouModal from '@/components/ThankYouModal';

const OrderPage = () => {
  const [isThankYouOpen, setIsThankYouOpen] = useState(false);
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen pb-20">
      <button 
        onClick={handleGoBack}
        className="inline-flex items-center justify-center h-12 px-8 font-medium tracking-wide text-risen-600 transition duration-200 bg-white rounded-lg hover:bg-risen-50 focus:shadow-outline focus:outline-none m-4"
      >
        Go Back
      </button>
      
      <section className="scroll-mt-24">
        <div className="container mx-auto">
                    <OrderForm onOrderSuccess={() => setIsThankYouOpen(true)} />
        </div>
      </section>

      <ThankYouModal 
        isOpen={isThankYouOpen} 
        onClose={() => setIsThankYouOpen(false)} 
      />
    </div>
  );
};

export default OrderPage;