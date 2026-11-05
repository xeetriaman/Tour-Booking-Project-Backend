# Tour Booking – API

REST API for a tour booking website: browse and search tours, read and write reviews, and book trips.

**Live API:** https://merntourproject.vercel.app/api/v1/tours

**Frontend:** [Tour-Booking-Project-Frontend](https://github.com/xeetriaman/Tour-Booking-Project-Frontend)

## Tech stack
Node.js, Express, MongoDB (Mongoose), JWT auth, bcrypt, cookie-parser, CORS

## API
| Route | Purpose |
|---|---|
| `POST /api/v1/auth/register`, `/login` | Sign up and log in |
| `/api/v1/tours` | Tour CRUD, `search/getTourBySearch`, `search/getFeaturedTours`, `search/getTourCount` |
| `/api/v1/review/:tourId` | Add a review to a tour |
| `/api/v1/booking` | Create and view bookings |
| `/api/v1/users` | User management |

## Run locally
```bash
npm install
cp .env.example .env   # add your MongoDB URI and a JWT secret
npm run start-dev      # http://localhost:8000
```
