# EmailJS Setup Guide

To enable real email sending from your contact form, follow these steps:

## 1. Create EmailJS Account

1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## 2. Create Email Service

1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions for your provider
5. Note down your **Service ID**

## 3. Create Email Template

1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template structure:

```
Subject: New Contact Form Message: {{subject}}

From: {{from_name}} ({{from_email}})
Subject: {{subject}}

Message:
{{message}}

---
This message was sent from your portfolio contact form.
```

4. Note down your **Template ID**

## 4. Get Public Key

1. Go to "Account" → "General"
2. Find your **Public Key**

## 5. Update Your Code

In `src/pages/Contact.jsx`, replace these values:

```javascript
const EMAILJS_SERVICE_ID = 'your_service_id_here';
const EMAILJS_TEMPLATE_ID = 'your_template_id_here'; 
const EMAILJS_PUBLIC_KEY = 'your_public_key_here';
```

## 6. Test Your Form

1. Start your development server: `npm run dev`
2. Fill out the contact form
3. Check your email for the message

## Alternative: Simple Mailto Link

If you prefer a simpler solution without EmailJS, you can replace the form with a mailto link:

```jsx
<a 
  href="mailto:danmailur8@gmail.com?subject=Portfolio Contact&body=Hello Daniel,"
  className="bg-cyan-600 text-white px-8 py-3 rounded-lg hover:bg-cyan-700 transition-colors duration-300 font-semibold"
>
  Send Email
</a>
```

## EmailJS Free Tier Limits

- 200 emails per month
- EmailJS branding in emails
- Basic support

For higher limits, consider upgrading to a paid plan.

## Security Note

Your EmailJS public key is safe to expose in frontend code - it's designed for client-side use.