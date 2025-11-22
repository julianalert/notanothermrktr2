# 🚀 SUPER EASY TESTING - 3 STEPS

## Step 1: Add your keys to `.env.local`

```bash
STRIPE_SECRET_KEY=sk_test_...
LOOPS_API_KEY=your_key_here
STRIPE_WEBHOOK_SECRET=whsec_...  # You'll get this later
```

## Step 2: Start your server

```bash
npm run dev
```

## Step 3: Test in your browser

### Test 1: Thank you page
Just visit: **http://localhost:3000/thank-you**

### Test 2: Loops.so integration (NO STRIPE NEEDED!)
Visit: **http://localhost:3000/api/test-webhook?email=your@email.com**

This will:
- ✅ Add the email to loops.so
- ✅ Trigger the `paidCourse` event
- ✅ Show you if it worked

**That's it!** If this works, your loops.so integration is good.

---

## Test the REAL Stripe webhook (when ready)

1. Install Stripe CLI: https://stripe.com/docs/stripe-cli
2. Run: `stripe listen --forward-to localhost:3000/api/webhooks/stripe`
3. Copy the `whsec_...` secret to `.env.local`
4. Restart server
5. Run: `stripe trigger checkout.session.completed`

Done! 🎉

