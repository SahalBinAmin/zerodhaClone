
# 📈 Zerodha Clone – MERN Stack Trading Dashboard

A full-stack clone of **Zerodha** built with the **MERN stack** (MongoDB, Express.js, React, Node.js).
This project demonstrates authentication, a trading dashboard, and portfolio management features.

---

## 🚀 Features

- 🔐 **User Authentication** (JWT + bcrypt)
- 📊 **Holdings & Portfolio Dashboard** – track investments, net gain/loss
- 📝 **Orders & Positions Management**
- 💾 **MongoDB Integration** – persistent data storage
- ⚡ **Express.js REST API**
- 🎨 **Responsive UI** with React + Bootstrap
- 📁 **Monorepo Setup** – separate `frontend`, `backend`, `dashboard`

---

## 🛠️ Tech Stack

- **Frontend:** React, Bootstrap, Axios
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (Mongoose)
- **Authentication:** JWT, bcrypt
- **Version Control:** Git & GitHub

---

## 📂 Project Structure

```
zerodhaProject/
│── backend/        # Express.js + MongoDB API
│── frontend/       # React frontend (client app)
│── dashboard/      # React-based trading dashboard
│── README.md
```

---

## ⚙️ Installation

### 1. Clone the repo

```bash
git clone https://github.com/SahalBinAmin/zerodhaClone
cd zerodhaProject
```

### 2. Install dependencies

Each folder (`backend`, `frontend`, `dashboard`) has its own environment.
Run the following in each:

```bash
cd backend && npm install
cd ../frontend && npm install
cd ../dashboard && npm install
```

### 3. Setup environment variables

In `backend/.env`:

```env
PORT=3002
MONGO_URL=your_mongodb_connection_uri
JWT_SECRET=your_secret_key
```

### 4. Run the apps

- Start backend:

```bash
cd backend
npm start
```

- Start frontend:

```bash
cd frontend
npm start
```

- Start dashboard:

```bash
cd dashboard
npm start
```

---

## 🤝 Contributing

Contributions are welcome! Please fork this repo and create a pull request for new features or fixes.
