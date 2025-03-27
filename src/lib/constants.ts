// API configuration
export const API_URL = process.env.NODE_ENV === 'production'
  ? 'https://your-production-api-url.com/api'
  : 'http://localhost:3001/api';

// Product information
export const PRODUCT_PRICE = 18000;

// Company information
export const COMPANY_NAME = 'Risen Bond';
export const WHATSAPP_NUMBER = '2348165875119';

// WhatsApp tracking links with source identifiers
export const WHATSAPP_TRACKING = {
  // Base message that will be appended to source identifiers
  baseMessage: 'I want to know more about Risen Bond products.',
  
  // Different source links
  website: `https://wa.me/2348165875119?text=${encodeURIComponent('[Website_Inquiry] I want to know more about Risen Bond products.')}`,
  instagram: `https://wa.me/2348165875119?text=${encodeURIComponent('[Instagram_Inquiry] I want to know more about Risen Bond products.')}`,
  facebook: `https://wa.me/2348165875119?text=${encodeURIComponent('[Facebook_Inquiry] I want to know more about Risen Bond products.')}`,
  tiktok: `https://wa.me/2348165875119?text=${encodeURIComponent('[TikTok_Inquiry] I want to know more about Risen Bond products.')}`
};

// Formspree form endpoint
export const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mpwpjzpl'; 