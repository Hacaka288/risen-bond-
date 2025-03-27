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
          <div className="bg-risen-50 rounded-xl overflow-hidden h-auto">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m24!1m12!1m3!1d993.3015324922631!2d3.618641700000001!3d6.459428300000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m9!3e0!4m3!3m2!1d6.4594283!2d3.6186417!4m3!3m2!1d6.4586667!2d3.6182723!5e0!3m2!1sen!2sng!4v1699862369424!5m2!1sen!2sng" 
              width="100%" 
              height="400" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Peace Castle Estate via Tonia Emmanuel Ave"
              className="w-full h-full"
            />
          </div>
          <div className="mt-4 text-risen-500 space-y-2">
            <p className="font-medium text-lg">
              No 25, Peace Castle Estate, Ogombo Ajah, Lagos State
            </p>
            <p>
              Our factory is located at Peace Castle Estate. For directions: Head southwest from the main junction, 
              turn right toward Tonia Emmanuel Ave, then right onto Tonia Emmanuel Ave to reach our location at 
              No 25, Peace Castle Estate.
            </p>
            <p className="text-sm mt-1">
              For any assistance finding us, please contact our customer service team via WhatsApp.
            </p>
          </div>
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
