const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
const db = require("./db");
require("dotenv").config();

const app = express();
const projectTypes = new Set([
  "Software Development",
  "Full-Stack Web Development",
  "AI / ML",
  "IoT / Hardware",
  "Embedded Systems",
  "Website Development",
  "Website Maintenance",
  "Custom Project / Custom Solution",
  "Other"
]);
const budgets = new Set([
  "",
  "Not decided yet",
  "Under ₹5,000",
  "₹5,000 – ₹15,000",
  "₹15,000 – ₹30,000",
  "₹30,000 – ₹50,000",
  "₹50,000+"
]);
const timelines = new Set([
  "",
  "Urgent",
  "Within 1 week",
  "1–2 weeks",
  "2–4 weeks",
  "1–2 months",
  "Flexible"
]);
const projectRequestAttempts = new Map();
const rateLimitWindowMs = 15 * 60 * 1000;
const maxProjectRequestsPerWindow = 5;

// Middlewares
app.use(cors({
  origin: process.env.FRONTEND_URL || true
}));
app.use(express.json());

const escapeHtml = (value) => value
  .replace(/&/g, "&amp;")
  .replace(/</g, "&lt;")
  .replace(/>/g, "&gt;")
  .replace(/"/g, "&quot;")
  .replace(/'/g, "&#39;");

const cleanSingleLine = (value, maxLength) => value
  .replace(/[\u0000-\u001f\u007f]/g, " ")
  .replace(/\s+/g, " ")
  .trim()
  .slice(0, maxLength);

const cleanMultiline = (value, maxLength) => value
  .replace(/[\u0000-\u0008\u000b\u000c\u000e-\u001f\u007f]/g, "")
  .trim()
  .slice(0, maxLength);

const projectRequestRateLimit = (req, res, next) => {
  const now = Date.now();
  const ip = req.ip || req.socket.remoteAddress || "unknown";
  let attempt = projectRequestAttempts.get(ip);

  if (!attempt || attempt.expiresAt <= now) {
    attempt = { count: 0, expiresAt: now + rateLimitWindowMs };
    projectRequestAttempts.set(ip, attempt);
  }

  if (attempt.count >= maxProjectRequestsPerWindow) {
    return res.status(429).json({ message: "Too many project requests. Please try again later." });
  }

  attempt.count += 1;

  if (projectRequestAttempts.size > 10000) {
    for (const [key, value] of projectRequestAttempts) {
      if (value.expiresAt <= now) projectRequestAttempts.delete(key);
    }
  }

  next();
};

// Test Route
app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

// Freelance project request email
app.post("/api/project-request", projectRequestRateLimit, async (req, res) => {
  const body = req.body && typeof req.body === "object" && !Array.isArray(req.body)
    ? req.body
    : {};
  const name = typeof body.name === "string" ? cleanSingleLine(body.name, 120) : "";
  const email = typeof body.email === "string" ? body.email.trim().toLowerCase() : "";
  const projectType = typeof body.projectType === "string" ? body.projectType : "";
  const company = typeof body.company === "string" ? cleanSingleLine(body.company, 160) : "";
  const details = typeof body.details === "string" ? cleanMultiline(body.details, 5000) : "";
  const budget = typeof body.budget === "string" ? body.budget : "";
  const timeline = typeof body.timeline === "string" ? body.timeline : "";
  const additionalInfo = typeof body.additionalInfo === "string"
    ? cleanMultiline(body.additionalInfo, 3000)
    : "";
  const website = typeof body.website === "string" ? body.website.trim() : "";

  if (website) {
    return res.status(400).json({ message: "Invalid project request." });
  }

  if (
    !name ||
    !email ||
    !projectTypes.has(projectType) ||
    !details ||
    (typeof body.name === "string" && body.name.length > 120) ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
    email.length > 254 ||
    !budgets.has(budget) ||
    !timelines.has(timeline) ||
    (body.company !== undefined && typeof body.company !== "string") ||
    (body.budget !== undefined && typeof body.budget !== "string") ||
    (body.timeline !== undefined && typeof body.timeline !== "string") ||
    (body.additionalInfo !== undefined && typeof body.additionalInfo !== "string") ||
    (body.website !== undefined && typeof body.website !== "string") ||
    (typeof body.company === "string" && body.company.length > 160) ||
    (typeof body.details === "string" && body.details.length > 5000) ||
    (typeof body.additionalInfo === "string" && body.additionalInfo.length > 3000) ||
    typeof body.name !== "string" ||
    typeof body.email !== "string" ||
    typeof body.projectType !== "string" ||
    typeof body.details !== "string"
  ) {
    return res.status(400).json({ message: "Please provide valid project request details." });
  }

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, PROJECT_REQUEST_TO } = process.env;
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS || !PROJECT_REQUEST_TO) {
    console.error("Project request email is not configured. Set the SMTP and recipient environment variables.");
    return res.status(503).json({ message: "Project request email is temporarily unavailable." });
  }

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT) || 587,
    secure: Number(SMTP_PORT) === 465,
    auth: {
      user: SMTP_USER,
      pass: SMTP_PASS
    }
  });

  const subject = `New Freelance Project Request — ${projectType} — ${name}`;
  const html = `
    <div style="font-family:Arial,sans-serif;color:#222;line-height:1.6;max-width:680px;margin:auto">
      <h2 style="color:#6d28d9">New Freelance Project Request</h2>
      <table style="border-collapse:collapse;width:100%;margin-bottom:24px">
        <tbody>
          <tr><th align="left" style="padding:8px;border-bottom:1px solid #ddd">Client Name</th><td style="padding:8px;border-bottom:1px solid #ddd">${escapeHtml(name)}</td></tr>
          <tr><th align="left" style="padding:8px;border-bottom:1px solid #ddd">Client Email</th><td style="padding:8px;border-bottom:1px solid #ddd"><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></td></tr>
          <tr><th align="left" style="padding:8px;border-bottom:1px solid #ddd">Company / Organization</th><td style="padding:8px;border-bottom:1px solid #ddd">${escapeHtml(company || "Not provided")}</td></tr>
          <tr><th align="left" style="padding:8px;border-bottom:1px solid #ddd">Project Type</th><td style="padding:8px;border-bottom:1px solid #ddd">${escapeHtml(projectType)}</td></tr>
          <tr><th align="left" style="padding:8px;border-bottom:1px solid #ddd">Budget</th><td style="padding:8px;border-bottom:1px solid #ddd">${escapeHtml(budget || "Not provided")}</td></tr>
          <tr><th align="left" style="padding:8px;border-bottom:1px solid #ddd">Timeline</th><td style="padding:8px;border-bottom:1px solid #ddd">${escapeHtml(timeline || "Not provided")}</td></tr>
        </tbody>
      </table>
      <h3>Project Requirements</h3>
      <div style="white-space:pre-wrap;background:#f7f7f7;padding:16px;border-radius:8px">${escapeHtml(details)}</div>
      <h3 style="margin-top:24px">Additional Information</h3>
      <div style="white-space:pre-wrap;background:#f7f7f7;padding:16px;border-radius:8px">${escapeHtml(additionalInfo || "Not provided")}</div>
      <p style="color:#666;font-size:13px;margin-top:28px">Submitted from Portfolio</p>
    </div>`;
  const text = [
    "NEW FREELANCE PROJECT REQUEST",
    `Client Name: ${name}`,
    `Client Email: ${email}`,
    `Company / Organization: ${company || "Not provided"}`,
    `Project Type: ${projectType}`,
    `Budget: ${budget || "Not provided"}`,
    `Timeline: ${timeline || "Not provided"}`,
    "",
    "PROJECT REQUIREMENTS:",
    details,
    "",
    "ADDITIONAL INFORMATION:",
    additionalInfo || "Not provided",
    "",
    "Submitted from Portfolio"
  ].join("\n");

  try {
    await transporter.sendMail({
      from: SMTP_USER,
      to: PROJECT_REQUEST_TO,
      replyTo: { name, address: email },
      subject,
      text,
      html
    });
    return res.status(200).json({ message: "Project request sent successfully." });
  } catch (error) {
    console.error("Failed to send project request email:", error);
    return res.status(502).json({ message: "Unable to send the project request right now." });
  }
});

// Contact API
app.post("/api/contact", (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const sql = "INSERT INTO contacts (name, email, message) VALUES (?, ?, ?)";

  db.query(sql, [name, email, message], (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: "Database error" });
    }

    res.status(201).json({ message: "Message sent successfully ✅" });
  });
});

// Get All Messages (Optional Admin Route)
app.get("/api/messages", (req, res) => {
  db.query("SELECT * FROM contacts ORDER BY created_at DESC", (err, results) => {
    if (err) {
      return res.status(500).json({ message: "Error fetching messages" });
    }
    res.json(results);
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
