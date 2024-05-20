import React, { useState, useEffect } from "react";

function Relogio() {
  const [hora, setHora] = useState(new Date().toLocaleTimeString());
  useEffect(() => {
    const interval = setInterval(() => {
      setHora(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relogio">
      <h2>Relógio Digital</h2>
      <p className="hora">{hora}</p>
    </div>
  );
}

export default Relogio;
