# 💬 Realtime Chat Messenger

A real-time chat application built using **Node.js**, **Express**, and **Socket.IO**. This project enables multiple users to connect over a shared space and communicate instantly through a clean, responsive web interface. Whether you're on the same local network or across the globe (via deployment), this app brings live interaction to your browser with simplicity and speed.

---

## ✨ Key Features

- ⚡ Real-time messaging powered by WebSockets (Socket.IO)
- 🔔 Instant sound alerts for incoming messages
- 🕒 Live timestamps to track conversations
- 📡 Broadcasts join and leave notifications to all users
- 🧠 Simple prompt-based username entry
- 📱 Mobile-responsive design with scroll-to-bottom
- 🧰 Minimal setup, no external DB required
- 🌐 Local LAN support and deployable online

---

## 📂 Project Structure

---
🛠️ Built With
Node.js – server-side runtime
Express.js – HTTP server framework
Socket.IO – real-time bidirectional communication
HTML/CSS/JS – frontend interface
Nano / VS Code – text editors used during development

🧠 How It Works
When a user visits the app, they're prompted for their name
The frontend establishes a WebSocket connection with the backend
Socket.IO handles:
Sending messages
Broadcasting to other users
Notifying when a user joins or leaves
Messages are appended to the DOM with position & timestamp
Sound alerts are played using the HTML Audio API


🛡 License
Licensed under the MIT License



