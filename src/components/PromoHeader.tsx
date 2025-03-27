import { Link } from 'react-router-dom';

interface PromoHeaderProps {
  endDate: Date;
}

const PromoHeader = ({ endDate }: PromoHeaderProps) => {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-risen-600 text-white py-3 px-8">
      <div className="container mx-auto flex flex-row justify-between items-center">
        <div className="text-lg font-medium">
          <h2 className="text-2xl font-bold tracking-wide">Risen Life</h2>
        </div>
        
        <div className="flex items-center gap-4 text-sm">
          <Link
            to="/about#top"
            className="inline-flex items-center justify-center h-10 md:h-10 px-4 md:px-6 font-medium tracking-wide text-white transition duration-200 bg-risen-600 rounded-lg hover:bg-risen-700 focus:shadow-outline focus:outline-none text-sm md:text-sm"
          >
            About
          </Link>
          <Link
            to="#"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('limited-time-offer')?.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
              });
            }}
            className="inline-flex items-center justify-center h-10 md:h-10 px-4 md:px-6 font-medium tracking-wide text-white transition duration-200 bg-risen-600 rounded-lg hover:bg-risen-700 focus:shadow-outline focus:outline-none text-sm md:text-sm"
          >
            Promo
          </Link>
          <Link
            to="#"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('contact-section')?.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
              });
            }}
            className="inline-flex items-center justify-center h-10 md:h-10 px-4 md:px-6 font-medium tracking-wide text-white transition duration-200 bg-risen-600 rounded-lg hover:bg-risen-700 focus:shadow-outline focus:outline-none text-sm md:text-sm"
          >
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PromoHeader;
