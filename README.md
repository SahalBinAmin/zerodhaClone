# 📈 Zerodha Clone – MERN Stack Trading Platform

A full-stack clone of **Zerodha** built with the **MERN stack** (MongoDB, Express.js, React, Node.js).
This project demonstrates **authentication, portfolio tracking, trading dashboard, and UI with multiple React apps**.

---

## 🚀 Features

- 🔐 **User Authentication** – Local & Google OAuth (JWT + bcrypt + Passport)
- 📊 **Holdings & Portfolio Dashboard** – live tracking of investments, net gain/loss
- 📝 **Orders & Positions Management**
- 💾 **MongoDB Integration** – persistent data storage
- ⚡ **Express.js REST API** with session & JWT support
- 🎨 **Two React Apps**

  - `frontend` → client-facing app (trading interface)
  - `dashboard` → advanced portfolio & analytics dashboard

- 📁 **Monorepo-style structure** – `backend`, `frontend`, `dashboard`

---

## 🛠️ Tech Stack

- **Frontend (Client App):**

  - React 19, React Router v7
  - React Scripts (CRA)
  
- **Dashboard (Analytics App):**

  - React 19, React Router v7
  - Material-UI (MUI v7)
  - Chart.js + react-chartjs-2 (data visualization)
  - Axios, jwt-decode

- **Backend (API):**

  - Node.js, Express.js
  - MongoDB + Mongoose
  - Passport (Google OAuth 2.0, Local Strategy)
  - Authentication: JWT, bcrypt, sessions, cookie-parser
  - Nodemailer (email support)

---

## 📂 Project Structure

```
zerodhaPProject/
│── backend/         # Express.js + MongoDB API
|                    # Mongoose models
|                    # API routes
|                    # Backend entry point
│
│── frontend/       # React client app (trading interface)
│   
│── dashboard/      # React dashboard app (analytics & portfolio)
│
└── README.md
```

---

## ⚙️ Installation

### 1. Clone the repo

```bash
git clone https://github.com/SahalBinAmin/zerodhaClone
cd zerodhaPProject
```

### 2. Install dependencies

Each folder (`backend`, `frontend`, `dashboard`) has its own environment.
Run the following:

```bash
cd backend && npm install
cd ../frontend && npm install
cd ../dashboard && npm install
```


### 3. Run the apps

- **Backend** (Express API):

```bash
cd backend
npm run dev 
```

- **Frontend** (Trading app):

```bash
cd frontend
npm start
```

- **Dashboard** (Analytics app):

```bash
cd dashboard
npm start
```

---

## 🤝 Contributing

Contributions are welcome! Please fork this repo and create a pull request for new features or fixes.
