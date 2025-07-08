const express = require('express');
const http = require('http');
const path = require('path');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

// ✅ Serve static files from the correct public path
app.use(express.static(path.join(__dirname, 'public')));

// ✅ Route for root path
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// ✅ Socket.IO chat logic
const users = {};

io.on('connection', socket => {
  socket.on('new-user-joined', name => {
    users[socket.id] = name;
    socket.broadcast.emit('user-joined', name);
  });

  socket.on('send', message => {
    socket.broadcast.emit('receive', {
      message,
      name: users[socket.id]
    });
  });

  socket.on('disconnect', () => {
    if (users[socket.id]) {
      socket.broadcast.emit('left', users[socket.id]);
      delete users[socket.id];
    }
  });
});

// ✅ Listen on Render's assigned port or fallback
const PORT = process.env.PORT || 8000;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
