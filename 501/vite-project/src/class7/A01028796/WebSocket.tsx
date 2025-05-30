import { useEffect, useState } from 'react';

const RealTimeNotifications = () => {
  const [notifications, setNotifications] = useState<string[]>([]);

  useEffect(() => {
    const ws = new WebSocket('ws://localhost:8080');

    ws.onopen = () => {
      console.log('Connected to WebSocket server');
      ws.send('Hello from client!');
    };

    ws.onmessage = (event) => {
      const message = event.data;
      setNotifications((prev) => [...prev, message]);
    };

    return () => {
      ws.close();
    };
  }, []);

  return (
    <div>
      <h2>Real-Time Notifications</h2>
      <ul>
        {notifications.map((msg, idx) => (
          <li key={idx}>{msg}</li>
        ))}
      </ul>
    </div>
  );
};

export default RealTimeNotifications;
