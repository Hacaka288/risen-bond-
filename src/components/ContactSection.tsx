import { Facebook, Instagram, MessageSquare } from "lucide-react";
import { WHATSAPP_TRACKING } from "@/lib/constants";

const ContactSection = () => {
  const whatsappLink = WHATSAPP_TRACKING.website;

  const contactMethods = [
    {
      icon: <MessageSquare className="h-6 w-6" />,
      title: 'WhatsApp',
      description: 'Chat with us directly',
      action: {
        label: 'Send Message',
        url: whatsappLink
      },
      color: 'bg-green-500'
    }
  ];

  const socialMedia = [
    {
      icon: <Instagram className="h-7 w-7" />,
      name: 'Instagram',
      url: 'https://instagram.com/risenbond?utm_source=website&utm_medium=social&utm_campaign=promo',
      color: 'text-pink-500 hover:text-pink-600'
    },
    {
      icon: <Facebook className="h-7 w-7" />,
      name: 'Facebook',
      url: 'https://facebook.com/risenbond?utm_source=website&utm_medium=social&utm_campaign=promo',
      color: 'text-blue-600 hover:text-blue-700'
    },
    {
      icon: (
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 24 24" 
          className="h-7 w-7 fill-current"
        >
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
        </svg>
      ),
      name: 'TikTok',
      url: 'https://tiktok.com/@risenbond?utm_source=website&utm_medium=social&utm_campaign=promo',
      color: 'text-risen-600 hover:text-risen-700'
    }
  ];

  return (
    <div className="container mx-auto">
      <div className="text-center mb-16">
        <h2 className="section-title">Contact Us</h2>
        <p className="max-w-2xl mx-auto text-risen-500 text-base md:text-lg">
          Have questions or need assistance? We're here to help.
          Reach out to us directly through WhatsApp.
        </p>
      </div>

      <div className="flex justify-center mb-12">
        <div className="glass-card p-8 rounded-2xl text-center max-w-md w-full">
          <div className={`bg-green-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-5 text-white`}>
            <MessageSquare className="h-9 w-9" />
          </div>
          <h3 className="text-2xl font-bold text-risen-600 mb-3">WhatsApp</h3>
          <p className="text-risen-500 mb-5 text-base md:text-lg">Chat with us directly for inquiries, orders, and support</p>
          <a 
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center h-14 px-8 font-medium transition-colors rounded-lg text-white bg-risen-500 hover:bg-risen-600 text-base md:text-lg"
          >
            Send Message
          </a>
        </div>
      </div>

      <div className="glass-card p-8 rounded-2xl">
        <h3 className="text-2xl font-bold text-risen-600 mb-5 text-center">Follow Us</h3>
        <div className="flex justify-center space-x-8">
          {socialMedia.map((social, index) => (
            <a 
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center"
            >
              <div className={`w-16 h-16 rounded-full bg-risen-50 flex items-center justify-center mb-3 transition-transform hover:scale-110`}>
                <div className={social.color}>
                  {social.icon}
                </div>
              </div>
              <span className="text-base text-risen-500">{social.name}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
