# SolarConnect Backend

Node.js + Express + MongoDB Atlas REST API for the SolarConnect frontend.

## Setup
1. `npm install`
2. Copy `.env.example` to `.env`
3. Put your MongoDB Atlas connection string in `MONGODB_URI` and a strong value in `JWT_SECRET`.
4. `npm run dev`

API: `http://localhost:5000`
Health: `GET /api/health`

Main routes: `/api/auth`, `/api/solar`, `/api/products`, `/api/orders`, `/api/services`, `/api/loans`, `/api/credits`, `/api/referrals`, `/api/payments`, `/api/notifications`, `/api/subsidies`, `/api/support`, `/api/admin`.

Protected routes use `Authorization: Bearer <JWT>`.

OTP, real payment gateway, government subsidy verification and net-metering integrations are intentionally left as provider-specific integration points for production.
