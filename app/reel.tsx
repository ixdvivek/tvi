const teeth = Array.from({ length: 6 }, (_, i) => i * 60);

export default function Reel() {
  return (
    <svg className="reel" viewBox="0 0 56 56">
      <circle cx="28" cy="28" r="27" fill="#ffc531" />
      <circle cx="28" cy="28" r="22" fill="#ffffff" />
      <g className="hub">
        <circle cx="28" cy="28" r="18" fill="#141414" />
        {teeth.map((a) => (
          <rect key={a} x="26.5" y="11" width="3" height="5" rx="1" fill="#ffffff"
            transform={`rotate(${a} 28 28)`} />
        ))}
        <circle cx="28" cy="28" r="5" fill="#e3e7ea" />
      </g>
    </svg>
  );
}
