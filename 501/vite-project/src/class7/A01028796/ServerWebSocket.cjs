const { WebSocketServer } = require('ws');

const wss = new WebSocketServer({ port: 8080 });

wss.on('connection', (ws) => {
  console.log('New client connected');

  // Avisar a todos que un usuario se conectó
  broadcast('Usuario conectado');

  ws.on('message', (message) => {
    console.log(`Received: ${message}`);
    broadcast(message.toString());
  });

  ws.on('close', () => {
    console.log('Client disconnected');
  });
});

function broadcast(data) {
  wss.clients.forEach(client => {
    if (client.readyState === client.OPEN) {
      client.send(data);
    }
  });
}

console.log('✅ WebSocket server is running on ws://localhost:8080');
