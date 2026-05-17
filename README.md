# 🚀 SyncMind – AI Chat Application

SyncMind is a full-stack AI-powered chat application that provides real-time conversational responses with a clean, ChatGPT-like user interface. It supports chat history, markdown formatting, and dynamic chat management.

---

## ✨ Features

- 🤖 AI-powered chat using OpenRouter API
- 💬 Real-time conversation with typing animation
- 🧠 Chat history stored in MongoDB
- 📝 Markdown support (headings, lists, code blocks)
- 📌 Auto-generated chat titles
- 🗑 Delete chats (hover interaction)
- 🔐 Authentication (Login/Register)
- 🎨 Modern ChatGPT-like UI (React + Tailwind)

---

## 🛠 Tech Stack

### Frontend
- React.js
- Tailwind CSS
- React Router
- React Markdown

### Backend
- Node.js
- Express.js
- MongoDB (Mongoose)

### APIs
- OpenRouter AI API

---

## 📂 Project Structure


SyncMind/
│
├── client/ # Frontend (React)
├── server/ # Backend (Node + Express)
├── .gitignore
├── package.json


---

## ⚙️ Setup Instructions

### 1. Clone the repository


git clone https://github.com/ShreyashMahalle75/SyncMind.git
cd SyncMind


---

### 2. Setup Backend


cd server
npm install


Create `.env` file:


MONGO_URI=your_mongodb_connection_string
OPENROUTER_API_KEY=your_api_key


Run backend:


npm run dev


---

### 3. Setup Frontend


cd client
npm install
npm run dev


---

## 🚀 Usage

- Register / Login
- Start a new chat
- Ask any question
- View chat history
- Delete chats
- Enjoy AI responses with formatting

---

## 🧠 How It Works

- User sends message → frontend
- Backend receives → calls OpenRouter API
- AI response returned → stored in MongoDB
- UI updates in real-time with typing effect

---

## 📸 Screenshots

*(Add screenshots here for better presentation)*

---

## 🔐 Security Note

- API keys are stored in `.env`
- `.env` is not pushed to GitHub

---

## 🌟 Future Improvements

- Chat rename feature
- Streaming responses (real-time tokens)
- Voice input
- Multi-user support

---

## 👨‍💻 Author

**Shreyash Mahalle**  
GitHub: https://github.com/ShreyashMahalle75

---

## ⭐ Support

If you like this project, give it a ⭐ on GitHub!