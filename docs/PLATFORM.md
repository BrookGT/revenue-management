# Platform boundaries

Revenue Management is the **customer and accountant portal** for Ethiopian tax filing and revenue collection.

## Scope

- Tax file submission wizard (user, accountant, admin)
- Coupon and province pricing administration
- HRM, payroll, and support ticket modules for internal staff
- Payment collection via Telebirr, Chapa, Stripe, Razorpay, and Mollie

## Out of scope

- Core API persistence (served by separate backend at `api.revenue.et`)
- Mobile native apps

## Deployment

Next.js listens on `PORT` (default 3000). Requires `NEXT_PUBLIC_API_URL` at build and runtime.
