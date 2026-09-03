# SolarConnect Frontend

A responsive React + Vite frontend prototype based on the supplied SolarConnect system-flow reference.

## Run
1. Install Node.js 18+.
2. Extract this project.
3. Run:
   ```bash
   npm install
   npm run dev
   ```
4. Open the local Vite URL shown in the terminal.

## Included journeys
- Landing / Home
- Login + Sign Up + OTP demo
- User Dashboard
- Buy Solar: property -> energy details -> recommendation -> packages -> product -> checkout
- Services: service -> date/time -> address -> confirmation
- Solar Loans: eligibility/EMI/plans/documents
- Sell Surplus Power: generation/consumption/net metering/export/earnings/settlement
- Solar Calculator
- Government Support
- Marketplace categories
- My Orders
- My Solar System
- Payments / Wallet
- Notifications
- Profile / KYC / security
- Credits & Rewards
- Referrals
- Help & Support
- Admin Dashboard

## Backend-ready structure
The UI intentionally keeps data access separate from presentation so REST APIs can be added later. Suggested API base:
`VITE_API_BASE_URL=https://your-api.example.com/api`

Recommended future modules:
- `/auth`
- `/users`
- `/solar-systems`
- `/products`
- `/orders`
- `/services`
- `/loans`
- `/surplus`
- `/credits`
- `/referrals`
- `/subsidies`
- `/payments`
- `/notifications`
- `/support`
- `/admin`

The current prototype uses mock data and local UI state; replace those handlers with fetch/axios calls when the Node.js/Express + MongoDB Atlas backend is ready.
