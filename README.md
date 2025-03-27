# Risen Bond Order System

## WhatsApp Tracking System

This website includes a WhatsApp tracking system that helps you identify where your contacts are coming from.

### How It Works

When someone clicks a WhatsApp button on your site, it automatically adds a source prefix to their message:

- Website visits: `[Website_Inquiry]`
- Instagram visitors: `[Instagram_Inquiry]`
- Facebook visitors: `[Facebook_Inquiry]`
- TikTok visitors: `[TikTok_Inquiry]`

This means when you receive a message, you'll immediately know which marketing channel brought that customer.

### Setting Up

1. Edit the WhatsApp number in `src/lib/constants.ts`
2. Use the specific tracking links for each platform:
   - For your website: `WHATSAPP_TRACKING.website`
   - For Instagram bio: `WHATSAPP_TRACKING.instagram`
   - For Facebook page: `WHATSAPP_TRACKING.facebook`
   - For TikTok profile: `WHATSAPP_TRACKING.tiktok`

## Formspree Integration

The order form uses Formspree to collect and email order information.

### Setting Up Formspree

1. Sign up at [Formspree.io](https://formspree.io/)
2. Create a new form
3. Copy your form endpoint (looks like `https://formspree.io/f/xrgdkegy`)
4. Paste it into `src/lib/constants.ts` as `FORMSPREE_ENDPOINT`

### How It Works

1. Customer fills out the order form
2. On submission, data is sent to Formspree
3. You receive an email with all order details

## Order Flow

1. Customer submits order via form
2. Form data is emailed to you via Formspree
3. You can contact the customer via their provided WhatsApp number to confirm the order

## Customizing Messages

Edit the WhatsApp messages and formats in:
- `src/lib/constants.ts` - For tracking link messages
- `src/components/OrderForm.tsx` - For the order confirmation message

## Development

To run the project locally:

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

## Building for Production

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```
