
import { Clock, Shield, TrendingUp, Truck } from "lucide-react";

const AboutSection = () => {
  const features = [
    {
      icon: <Shield className="h-6 w-6 text-risen-500" />,
      title: 'Quality',
      description: 'We provide only the highest quality products, ensuring customer satisfaction and trust.'
    },
    {
      icon: <TrendingUp className="h-6 w-6 text-risen-500" />,
      title: 'Affordable',
      description: 'Our products offer exceptional value without compromising on quality.'
    },
    {
      icon: <Truck className="h-6 w-6 text-risen-500" />,
      title: 'Reliable Delivery',
      description: 'We ensure timely and secure delivery of your products, wherever you are.'
    },
    {
      icon: <Clock className="h-6 w-6 text-risen-500" />,
      title: 'Customer Satisfaction',
      description: 'Your satisfaction is our priority, with responsive customer service.'
    },
  ];

  return (
    <div className="container mx-auto">
      <div className="text-center mb-16">
        <h2 className="section-title">About Risen Bond</h2>
        <p className="max-w-3xl mx-auto text-risen-500 leading-relaxed">
          Risen Bond is dedicated to providing high-quality, reliable products to improve 
          the quality of life for our customers. Our goal is to provide exceptional service, 
          great value, and a commitment to your wellbeing.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <div 
            key={index} 
            className="glass-card p-6 rounded-2xl transition-all hover:translate-y-[-5px] hover:shadow-lg"
          >
            <div className="bg-risen-50 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
              {feature.icon}
            </div>
            <h3 className="text-xl font-bold text-risen-600 mb-2">{feature.title}</h3>
            <p className="text-risen-500 text-sm">{feature.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="glass-card p-8 rounded-2xl">
          <h3 className="text-xl font-bold text-risen-600 mb-4">Our Location</h3>
          <div className="bg-risen-50 h-64 rounded-xl flex items-center justify-center">
            {/* Placeholder for Google Map */}
            <div className="text-risen-400 text-center">
              <div className="text-4xl mb-2">📍</div>
              <div>Map Integration</div>
              <div className="text-sm mt-2">We are based in Lagos, and we deliver nationwide.</div>
            </div>
          </div>
          <p className="mt-4 text-risen-500">
            Contact us for inquiries about delivery outside Lagos. We're committed to 
            reaching you wherever you are.
          </p>
        </div>

        <div className="glass-card p-8 rounded-2xl">
          <h3 className="text-xl font-bold text-risen-600 mb-4">Our Mission</h3>
          <p className="text-risen-500 leading-relaxed mb-4">
            At Risen Bond, our mission is to provide premium products that enhance your 
            daily life while maintaining affordable prices and exceptional quality.
          </p>
          <p className="text-risen-500 leading-relaxed mb-4">
            We believe in transparency, reliability, and putting our customers first. Every 
            product we offer is carefully selected to ensure it meets our high standards.
          </p>
          <p className="text-risen-500 leading-relaxed">
            Whether you're in Lagos or anywhere else in Nigeria, we're committed to 
            bringing our products to your doorstep with care and efficiency.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
