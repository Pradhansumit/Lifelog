# 📔 LifeLog – Mood Journal App

LifeLog is a **full-stack mood journaling app** that helps users track daily emotions, write quick reflections, and visualize emotional trends over time.

Built with **React**, **Tailwind CSS**, **Express.js**, **PostgreSQL**, and **JWT**, it offers a clean, minimal UI and useful mental health tracking features.

---

## 🚀 Features

- ✅ 😄 **Mood Tracker** – Select your mood daily using emoji-based options.
- ✅ 📝 **Quick Journal** – Write short daily reflections alongside your mood.
- ✅ 📆 **Mood Calendar** – View monthly mood logs with color-coded entries.
- ✅ 📊 **Mood Stats** – Analyze emotional trends through pie charts (7-day, 30-day, all-time).
- ✅ 🔐 **Authentication** – Secure login/signup with JWT-based authentication.
- ✅ 📤 **Data Export** – Export mood data based on selected date ranges.
- ✅ ⏰ **Reminders** – Daily reminders to log your mood at 9 PM.
- ✅ 🔁 **OTP Cleanup** – Cron job to auto-remove expired OTPs for security.

---

## 🛠 Tech Stack

- **Frontend**: React, Tailwind CSS, React Hooks, Axios
- **Backend**: Express.js, Prisma ORM, PostgreSQL, JSON Web Tokens (JWT), Node-cron, Nodemailer
- **Deployment**: Render

---

## 🔒 Authentication Flow

- JWT tokens are used to manage secure sessions.
- Protected routes for user-specific mood data and journaling.
- Forgot password flow with OTP + cron-based cleanup for expired tokens.

---

## 📦 Setup Instructions

1. **Clone the Repository**
```bash
git clone https://github.com/Pradhansumit/Lifelog.git
cd lifelog
````

2. **Set Up the Backend**
```bash
cd backend
npm install
# Set up .env file with DATABASE_URL, JWT_SECRET, etc.
npx prisma migrate dev
npm run dev
```

3. **Set Up the Frontend**

```bash
cd frontend
npm install
npm start
```

---

## Screenshots

<img width="1918" height="908" alt="Entry " src="https://github.com/user-attachments/assets/85a80a4d-0fac-4e06-b8d8-189ae9d26690" />

<img width="1102" height="908" alt="Calendar view" src="https://github.com/user-attachments/assets/83c1696e-d283-46cc-a5c9-1dc7c4430ea9" />

<img width="1801" height="892" alt="Analysis" src="https://github.com/user-attachments/assets/e6addd12-ecd1-40f5-9e7c-f642b7c9790a" />

<img width="1823" height="908" alt="export" src="https://github.com/user-attachments/assets/86b6ecb5-9fa1-40cc-90f2-41669ea1aa28" />
