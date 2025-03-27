import { Link } from 'react-router-dom';

interface PromoHeaderProps {
  endDate: Date;
}

const PromoHeader = ({ endDate }: PromoHeaderProps) => {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-risen-600 text-white py-2 px-2 md:py-3 md:px-4">
      <div className="container mx-auto flex flex-row justify-between items-center">
        <div className="text-sm md:text-base font-medium">
          <h2 className="text-lg md:text-xl font-bold tracking-wide">Risen Life</h2>
        </div>
        
        <div className="flex items-center gap-1 md:gap-3">
          <Link
            to="/about#top"
            className="inline-flex items-center justify-center h-8 md:h-10 px-2 md:px-4 font-medium tracking-wide text-white transition duration-200 bg-risen-600 rounded-lg hover:bg-risen-700 focus:shadow-outline focus:outline-none text-xs md:text-sm"
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
            className="inline-flex items-center justify-center h-8 md:h-10 px-2 md:px-4 font-medium tracking-wide text-white transition duration-200 bg-risen-600 rounded-lg hover:bg-risen-700 focus:shadow-outline focus:outline-none text-xs md:text-sm"
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
            className="inline-flex items-center justify-center h-8 md:h-10 px-2 md:px-4 font-medium tracking-wide text-white transition duration-200 bg-risen-600 rounded-lg hover:bg-risen-700 focus:shadow-outline focus:outline-none text-xs md:text-sm"
          >
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PromoHeader;
