# Project request email setup

The freelance form posts to `POST /api/project-request`. The existing general
contact endpoint (`POST /api/contact`) is unchanged.

## Local setup

1. Install backend dependencies with `npm install` from the `backend` folder.
2. Copy `.env.example` to `.env`.
3. Set `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, and `SMTP_PASS` to credentials
   from your email provider. For Gmail, use an app password rather than your
   normal account password.
4. Set `PROJECT_REQUEST_TO=amityaduvanshi203@gmail.com`. Set `FRONTEND_URL` to
   the local frontend URL (`http://localhost:5173`).
5. Start the API with `npm run dev` in `backend`, and the frontend with
   `npm run dev` in `frontend`. Vite proxies local `/api` requests to port 5000.

Without SMTP configuration, the project-request API responds with HTTP 503
instead of reporting a false success.

## Deployment

Deploy the `backend` folder as a Node.js service with `npm install` and
`npm start`. Configure `PORT`, `FRONTEND_URL`, the required SMTP variables, and
`PROJECT_REQUEST_TO` in the hosting provider's secret/environment settings; do
not commit `.env`. Ensure the SMTP provider permits outbound mail from the
deployed service.

Build and deploy `frontend` as a static Vite site. Set `VITE_API_URL` at build
time to the deployed backend API base URL ending in `/api`, for example
`https://api.example.com/api`, and configure backend `FRONTEND_URL` to the
deployed frontend origin.

## Verify delivery

Submit a test request from the Freelance section's **Let's Work Together**
button. A successful response clears the form and displays a confirmation.
Check the inbox for `PROJECT_REQUEST_TO` (including spam/junk) for the message
with subject `New Freelance Project Request — [Project Type] — [Client Name]`.
The reply-to address is the client's submitted email. SMTP or delivery errors
are logged by the backend and produce an error response for the form.
