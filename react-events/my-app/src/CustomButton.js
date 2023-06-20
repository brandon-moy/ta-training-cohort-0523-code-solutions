export default function CustomButton({ color, text, onCustomClick }) {
  return (
    <button
      style={{ backgroundColor: color }}
      onClick={() => onCustomClick(text)}>
      {text}
    </button>
  );
}
