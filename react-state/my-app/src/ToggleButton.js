import { useState } from 'react';

export default function ToggleButton({ text, color }) {
  const [isClicked, setIsClicked] = useState(false);

  function handleClick() {
    setIsClicked(!isClicked);
  }

  const bgColor = isClicked ? 'white' : color;

  return (
    <button style={{ backgroundColor: bgColor }} onClick={handleClick}>
      {text}
    </button>
  );
}
