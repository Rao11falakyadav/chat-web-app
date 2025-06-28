const socket = io('http://192.168.1.33:8000');
const form = document.getElementById('send-container');
const messageInput = document.getElementById('messageInp');
const messageContainer = document.getElementById('message-container');
const audio = new Audio('ting.mp3');

const append = (message, position) => {
  const messageElement = document.createElement('div');
  const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  messageElement.innerText = `[${time}] ${message}`;
  messageElement.classList.add('message', position);
  messageContainer.append(messageElement);
  messageContainer.scrollTop = messageContainer.scrollHeight;
  if (position === 'left') audio.play();
};

let name;
do {
  name = prompt('Enter your name:');
} while (!name || name.trim().length === 0);

socket.emit('new-user-joined', name);

socket.on('user-joined', name => {
  append(`${name} joined`, 'left');
});

socket.on('receive', data => {
  append(`${data.name}: ${data.message}`, 'left');
});

form.addEventListener('submit', e => {
  e.preventDefault();
  const message = messageInput.value.trim();
  if (message.length > 0) {
    append(`You: ${message}`, 'right');
    socket.emit('send', message);
    messageInput.value = '';
  }
});

socket.on('left', name => {
  append(`${name} left`, 'left');
});