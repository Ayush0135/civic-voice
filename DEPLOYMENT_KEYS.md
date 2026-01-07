# 🔑 Deployment Keys Summary

Use these exact keys and values when setting up your Environment Variables on **Render** (Backend) and **Vercel** (Frontend).

## 1. Backend (Add to Render.com)
**Note:** Go to your Render Web Service -> **Environment** -> **Add Environment Variable**

| Key | Value |
| :--- | :--- |
| **`MONGO_URI`** | `mongodb+srv://pathakayush715_db_user:YpFAIv7Ik0WvPli5@cluster0.97kpywa.mongodb.net/civicvoice` |
| **`JWT_SECRET`** | `CV_PROD_SECURE_99x3h2l7w1k0p5m8r2q4s6t9u0v` |
| **`GEMINI_API_KEY`** | `AIzaSyCIL2xwZ7NSAuvnt4Km0h5KSMY_iGSgIck` |
| **`CLIENT_ORIGINS`** | `https://your-frontend-vercel-url.vercel.app,http://localhost:5173` |
| **`NODE_ENV`** | `production` |

---

## 2. Frontend (Add to Vercel)
**Note:** Go to your Vercel Project -> **Settings** -> **Environment Variables**

| Key | Value |
| :--- | :--- |
| **`VITE_API_URL`** | `https://civic-voice-1.onrender.com` |

---

## 🛠️ Security Reminder: MongoDB Atlas
If your Render logs show a "Connection Error," ensure you have allowed access from anywhere in your MongoDB Atlas Dashboard:
1. **Network Access** -> **Edit** or **Add IP**.
2. Select **"Allow Access from Anywhere"** (`0.0.0.0/0`).
3. Click **Confirm**.
