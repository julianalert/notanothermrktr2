#!/bin/bash

# Simple script to test the webhook endpoint
# Make sure your dev server is running first: npm run dev

echo "Testing webhook endpoint..."
echo "Make sure you have:"
echo "1. Dev server running (npm run dev)"
echo "2. Stripe CLI installed and logged in"
echo "3. Environment variables set in .env.local"
echo ""
echo "Starting Stripe webhook listener..."
echo "Copy the webhook secret (whsec_...) to your .env.local as STRIPE_WEBHOOK_SECRET"
echo ""

stripe listen --forward-to localhost:3000/api/webhooks/stripe

