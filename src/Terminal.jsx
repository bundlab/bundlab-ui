import React, { useState, useEffect } from 'react';

const Terminal = () => {
  const [logs, setLogs] = useState(["[SYSTEM] Initializing bundlab-pulse..."]);

  useEffect(() => {
    const fetchStatus = async () => {
      try {
        const response = await fetch('http://localhost:8000/');
        const data = await response.json();
        setLogs(prev => [...prev, `[READY] Backend Status: ${data.status}`, `[ENGINE] ${data.worker}`]);
      } catch (err) {
        setLogs(prev => [...prev, "[ERROR] Backend unreachable. Check Docker status."]);
      }
    };

    fetchStatus();
  }, []);

  return (
    <div style={{ backgroundColor: '#000', color: '#00ff00', padding: '20px', borderRadius: '8px', fontFamily: 'monospace', marginTop: '20px', border: '1px solid #333', minHeight: '200px' }}>
      {logs.map((log, i) => (
        <div key={i}><span style={{ color: '#008800' }}>$</span> {log}</div>
      ))}
    </div>
  );
};

export default Terminal;
