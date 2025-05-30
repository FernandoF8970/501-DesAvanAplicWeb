import { useEffect, useRef, useState } from 'react';

const RealTimeNotifications = () => {
  const [messages, setMessages] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState('');
  const socketRef = useRef<WebSocket | null>(null);

  useEffect(() => {
    socketRef.current = new WebSocket('ws://localhost:8080');

    socketRef.current.onmessage = event => {
      setMessages(prev => [...prev, event.data]);
    };

    return () => {
      socketRef.current?.close();
    };
  }, []);

  const handleSend = () => {
    if (socketRef.current?.readyState === WebSocket.OPEN && inputValue.trim()) {
      socketRef.current.send(inputValue);
      setInputValue('');
    }
  };

  return (
    <div>
      <h2>Notifications</h2>

      <div style={{ marginBottom: '1rem' }}>
        <input
          type="text"
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
          placeholder="Escribe un mensaje"
          style={{ padding: 8, marginRight: 8 }}
        />
        <button onClick={handleSend}>Enviar</button>
      </div>

      <ul>
        {messages.map((msg, i) => (
          <li key={i}>{msg}</li>
        ))}
      </ul>
    </div>
  );
};

export default RealTimeNotifications;
