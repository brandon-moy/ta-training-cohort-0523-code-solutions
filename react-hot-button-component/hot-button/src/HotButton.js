import { useState } from 'react';
import './HotButton.css';

export default function HotButton() {
  const [clicks, setClicks] = useState(0);

  function chooseColor() {
    if (clicks < 4) return 'cold';
    if (clicks < 7) return 'cool';
    if (clicks < 10) return 'tepid';
    if (clicks < 13) return 'warm';
    if (clicks < 16) return 'hot';
    return 'nuclear';
  }

  const tempColor = chooseColor();

  return (
    <button
      onClick={() => setClicks(clicks + 1)}
      className={`hot-button ${tempColor}`}>
      Hot Button
    </button>
  );
}
