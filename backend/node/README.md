# PortfolioGenie API

A dependency-free Node.js HTTP service that provides the initial API health route. Business endpoints are intentionally not defined until their requirements are agreed.

## Requirements

- Node.js 20 or newer

## Run locally

```sh
npm install
npm start
```

The service listens on `0.0.0.0:3000` by default. Configure `PORT` and `HOST` for the deployment environment. `GET /api/health` returns the service status.

Set `CORS_ORIGIN` to the exact frontend origin (or a comma-separated list of origins) when browser clients need access, for example `http://localhost:5173`. Unconfigured origins are rejected. CORS is not an authentication mechanism.

## Test

```sh
npm test
```

Deploy this API as a separate Node.js service. The existing Vercel project serves the frontend from `frontend/`; it can remain unchanged. When the frontend starts calling this API, configure the API URL in the frontend's Vercel environment and set the API's `CORS_ORIGIN` to the deployed frontend origin.
