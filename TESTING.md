# Testing Stripe Webhook & Thank You Page

## Quick Testing Guide

### Option 1: Test the Thank You Page Directly (Easiest)

1. Start your dev server:
   ```bash
   npm run dev
   ```

2. Visit the thank you page directly:
   ```
   http://localhost:3000/thank-you
   ```

This lets you see how the page looks without needing a payment.

---

### Option 2: Test with Stripe CLI (Recommended for Webhook Testing)

#### Install Stripe CLI:

**macOS (if you have Homebrew):**
```bash
brew install stripe/stripe-cli/stripe
```

**Or download directly:**
- Visit: https://stripe.com/docs/stripe-cli
- Download and install for your OS

#### Login to Stripe CLI:
```bash
stripe login
```

#### Forward webhooks to your local server:

In a **separate terminal**, run:
```bash
stripe listen --forward-to localhost:3000/api/webhooks/stripe
```

This will give you a webhook signing secret (starts with `whsec_`). Copy it and add to your `.env.local`:
```
STRIPE_WEBHOOK_SECRET=whsec_...
```

#### Trigger a test event:

In another terminal, run:
```bash
stripe trigger checkout.session.completed
```

This simulates a successful payment and will:
- Send the webhook to your local server
- Add the test email to loops.so (if LOOPS_API_KEY is set)
- Trigger the `paidCourse` event

---

### Option 3: Manual Webhook Testing with curl

1. Make sure your dev server is running:
   ```bash
   npm run dev
   ```

2. Get a test webhook payload from Stripe Dashboard:
   - Go to Stripe Dashboard → Developers → Webhooks
   - Click on a webhook event
   - Copy the payload

3. Use Stripe CLI to generate a signature:
   ```bash
   stripe listen --print-secret
   ```
   (This gives you the webhook secret)

4. Or test with a simple curl (without signature verification for testing):
   Temporarily comment out signature verification in the webhook route for testing.

---

### Environment Variables Needed

Make sure you have `.env.local` with:
```
STRIPE_SECRET_KEY=sk_test_...
STRIPE_WEBHOOK_SECRET=whsec_... (from stripe listen)
LOOPS_API_KEY=your_loops_api_key
```

---

### Testing Checklist

- [ ] Thank you page loads at `/thank-you`
- [ ] Webhook endpoint responds at `/api/webhooks/stripe`
- [ ] Test webhook event is received
- [ ] Email is added to loops.so
- [ ] `paidCourse` event is triggered in loops.so

---

### Troubleshooting

**Webhook not receiving events:**
- Make sure `stripe listen` is running
- Check that the webhook secret matches in `.env.local`
- Check server logs for errors

**Loops.so not working:**
- Verify `LOOPS_API_KEY` is set correctly
- Check loops.so dashboard for the contact/event
- Check server console logs for API errors

