# 🚀 Backend Practice (Node.js + Express + MongoDB)

এটি একটি **Backend Practice Project** যেখানে Authentication System (Register / Login), JWT Token, Middleware, MongoDB Database Connection ইত্যাদি প্র্যাকটিস করা হয়েছে।

এই প্রজেক্টটি মূলত **Backend Development শেখার ও প্র্যাকটিস করার জন্য** তৈরি।

---

## 📂 Project Structure

```bash 
BackEnd_Practice/
├─ .github/
│ └─ workflows/
│ └─ node-ci.yml
├─ config/
│ └─ dbConnect.js
├─ controller/
│ └─ authController.js
├─ helpers/
│ └─ emailValid.js
├─ middleware/
│ └─ auth-meddle.js
├─ models/
│ └─ User.js
├─ routes/
│ └─ authRoutes.js
├─ utils/
│ └─ jwt-utils.js
├─ .env
├─ .gitignore
├─ index.js
├─ package.json
└─ README.md
---

## ⚙️ Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- JSON Web Token (JWT)
- dotenv
- bcryptjs
- GitHub Actions (CI)

---

## 🔐 Environment Variables (.env)

প্রজেক্ট রান করার আগে root folder এ `.env` ফাইল তৈরি করো এবং নিচের ভ্যারিয়েবলগুলো যুক্ত করো:

```env
DB_URL=tomar_db_uerl
PORT=your_prot
SECTET_KEY_ACCESS=yourscret_key
SECTET_KEY_REFRASH=ourscret_ke

▶️ How to Run This Project
1️⃣ Clone Repository
git clone https://github.com/Jakaria-Ahmod/Backend_Practice.git
2️⃣ Project Folder এ যাও
cd Backend_Practice
3️⃣ Dependency Install করো
npm install
4️⃣ Server Run করো
npm run dev

অথবা

npm start
🌐 API Base URL
http://localhost:8080
🔑 Features

User Registration

User Login

JWT Access Token & Refresh Token 

Protected Routes Middleware

MongoDB Database Connection

Clean Folder Structure

CI Pipeline with GitHub Actions

🧪 CI/CD (GitHub Actions)

এই প্রজেক্টে GitHub Actions ব্যবহার করে CI সেটআপ করা হয়েছে:

Code Push করলে Automatically Build হবে

Dependency Install হবে

Lint/Test ready structure

📌 Purpose of This Project

Backend Fundamentals Practice

Authentication System শেখা

Real-world Project Structure Follow করা

MERN Stack Backend প্রস্তুতি

🧑‍💻 Developer Information

👨‍🎓 Developer Name: Md Jakaria Ahmod

💼 Profession: MERN Stack Web Developer
📧 Email: jakariaahmodmd@gmail.com

📞 Phone: +8801889913945
🔗 Portfolio: https://mdjakariaahmod.onrender.com

🔗 LinkedIn: https://www.linkedin.com/in/mdjakariaahmod/

🔗 GitHub: https://github.com/Jakaria-Ahmod