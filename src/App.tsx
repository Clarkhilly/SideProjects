// src/App.tsx

import React, { useEffect, useState } from 'react';
import Confetti from 'react-confetti';

function App() {
  const [showConfetti, setShowConfetti] = useState(true);

  useEffect(() => {
    // Stop the confetti after 5 seconds
    const timer = setTimeout(() => {
      setShowConfetti(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      {showConfetti && <Confetti />}
      <h1>Hello World</h1>
    </div>
  );
}

export default App;
