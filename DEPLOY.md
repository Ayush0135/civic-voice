# 🚀 Deployment Guide

This project is a monorepo containing both a **Vite Frontend** and a **Node.js Backend**.

## 1. Backend Deployment (Recommended: Render.com or Railway)
*Note: We recommend Render/Railway over Vercel for the backend because Vercel Serverless has a 4.5MB limit on file uploads, and this app supports up to 50MB evidence files.*

### Steps:
1. Create a new **Web Service**.
2. Connect your GitHub repository.
3. Root Directory: `backend`
4. Build Command: `npm install`
5. Start Command: `npm start`
6. Add **Environment Variables**:
   - `MONGO_URI`: Your MongoDB Atlas connection string.
   - `JWT_SECRET`: A long random string for security.
   - `GEMINI_API_KEY`: Your Google Gemini API Key.
   - `CLIENT_ORIGINS`: `https://your-frontend-url.vercel.app,http://localhost:5173` (Comma separated).

---

## 2. Frontend Deployment (Vercel)
1. In Vercel, click **New Project**.
2. Select your repository.
3. **Root Directory**: Select `frontend`.
4. **Framework Preset**: Vite.
5. Add **Environment Variables**:
   - `VITE_API_URL`: Your Backend URL + `/api` (e.g., `https://civic-voice-1.onrender.com/api`)
6. Deploy!

---

## 3. Environment Variables Summary

### Backend (.env)
| Key | Value |
|-----|-------|
| `MONGO_URI` | `mongodb+srv://...` |
| `JWT_SECRET` | `your_secret_here` |
| `GEMINI_API_KEY` | `AIza...` |
| `CLIENT_ORIGINS` | `https://your-app.vercel.app` |

### Frontend (.env)
| Key | Value |
|-----|-------|
| `VITE_API_URL` | `https://your-backend.com/api` |
