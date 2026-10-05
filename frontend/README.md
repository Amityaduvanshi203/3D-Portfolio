# React + Vite

## Deployment

The repository-level `vercel.json` builds this frontend from the repository
root. Keep the Vercel project root set to the repository root; Vercel installs
from `frontend/package-lock.json`, builds with Vite, and publishes
`frontend/dist`. The rewrite in `vercel.json` serves the SPA for direct URL
loads.

For a local production build, run from this directory:

```bash
npm ci
npm run lint
npm run build
```

In Vercel, configure `VITE_API_URL` as an environment variable to the deployed
backend API base URL ending in `/api` (for example,
`https://api.example.com/api`). This is a build-time variable, so redeploy after
changing it. If it is unset, the forms call `/api` on the frontend domain, which
only works when an API is also hosted there.

Deploy the backend separately from the `backend` directory with `npm install`
and `npm start`. Configure the database variables, `FRONTEND_URL` (the deployed
frontend origin), SMTP credentials, and `PROJECT_REQUEST_TO` from
`backend/.env.example` in the backend host's environment settings. Let the host
provide `PORT`; do not commit production secrets. The backend must be deployed
and configured before the contact and project-request forms can work.

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
