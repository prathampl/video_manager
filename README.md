# 🎥 Video Manager - Full-Stack Application

Welcome to the **Video Manager** 🚀, a full-stack web application built with **⚛️ React.js** for the frontend and **🟢 Node.js + 🚚 Express.js** for the backend. The project features **📺 YouTube** playlist management with **↔️ drag-and-drop** functionality, **🔒 OTP-based authentication**, and **💾 persistent layout storage** using **🍃 MongoDB**.

---

## **✨ Features**

### **🎨 Frontend (⚛️ React.js)**
- **🔐 User Authentication:** OTP-based login with secure **🔑 JWT tokens**.
- **📺 YouTube Integration:** Fetches and displays YouTube playlists.
- **↔️ Drag-and-Drop Support:** Interactive playlist rearrangement using **↔️ React DnD**.
- **💾 Persistent Layouts:** Save and load playlists from a **🍃 MongoDB** database.
- **📱 Responsive Design:** Fully responsive **💻 UI**.

### **🛠️ Backend (🟢 Node.js + 🚚 Express.js)**
- **🔐 Authentication API:** OTP generation, verification, and **🔑 JWT-based protected routes**.
- **📋 Playlist Management:** Save and load playlist layouts.
- **💾 Database Integration:** Stores **👤 user data** and playlists in **🍃 MongoDB**.
- **🛡️ API Security:** **🌐 CORS-enabled, 🔑 JWT-protected APIs**.

---

## **⚙️ Technologies Used**

### **🎨 Frontend:**
- ⚛️ React.js
- 📡 Axios
- 🧭 React Router DOM
- ↔️ React DnD

### **🛠️ Backend:**
- 🟢 Node.js
- 🚚 Express.js
- 🍃 MongoDB + Mongoose
- 🔑 JWT (jsonwebtoken)
- 🔒 Bcrypt.js
- 🧾 Dotenv

---

## **🖥️ Project Setup**

### **1️⃣ Clone the Repository**
```bash
git clone https://github.com/prathampl/video-manager.git
cd video-manager
```

### **2️⃣ Install Dependencies**
```bash
npm install
```

### **3️⃣ Create a `.env` File (Frontend)**
```
REACT_APP_API_BASE_URL=http://localhost:5000/api
```

### **4️⃣ Start the Frontend Server**
```bash
npm start
```

---

## **🛠️ Backend Setup**

### **1️⃣ Clone the Backend Repository**
```bash
git clone https://github.com/prathampl/video-manager-backend.git
cd video-manager-backend
```

### **2️⃣ Install Dependencies**
```bash
npm install
```

### **3️⃣ Create a `.env` File (Backend)**
```
MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/videoManager?retryWrites=true&w=majority
JWT_SECRET=your_secret_key
```

### **4️⃣ Start the Backend Server**
```bash
npm start
```

---

## **🚀 Deployment**

1. **🎨 Frontend Deployment:** Hosted on [Vercel](https://vercel.com/)
2. **🛠️ Backend Deployment:** Hosted on [Render](https://render.com/) or [Heroku](https://heroku.com/)

---

## **📡 API Endpoints Overview**

### **🔐 Authentication Endpoints:**
- **📤 POST** `/api/auth/send-otp` - Sends **🔒 OTP** to the user's email.
- **📤 POST** `/api/auth/verify-otp` - Verifies **🔒 OTP** and returns **🔑 JWT token**.

### **💾 Layout Management Endpoints:**
- **📥 POST** `/api/layout/save` - Saves **📋 playlist layout**.
- **📥 GET** `/api/layout/load/:userId` - Loads the saved **📋 layout**.

---

## **📂 Folder Structure**

### **🎨 Frontend (⚛️ React.js)**
```
/src
  /components
    Header.js
    Login.js
    YouTubeImport.js
  /services
    api.js
  App.js
  index.js
```

### **🛠️ Backend (🟢 Node.js + 🚚 Express.js)**
```
/server
  /models
    Layout.js
    User.js
  /routes
    authRoutes.js
    layoutRoutes.js
  /middleware
    authMiddleware.js
  server.js
  .env
```

---

## **📜 License**
This project is licensed under the **MIT License**. See the LICENSE file for details.

---

## **📞 Contact**
For any questions or inquiries, feel free to reach out:

- **👤 Pratham P L**
- 📧 Email: [prathampl9@gmail.com](mailto:prathampl9@gmail.com)
- 🔗 LinkedIn: [LinkedIn Profile](https://linkedin.com/in/prathampl)

Thank you for checking out the project! 🎉

