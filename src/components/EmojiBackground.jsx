import { useEffect, useState } from "react";

export default function EmojiBackground() {
  const [emojis, setEmojis] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setEmojis((prev) => [
        ...prev,
        { id: Date.now(), left: Math.random() * 100 },
      ]);
      // remove old ones
      setEmojis((prev) => prev.filter((e) => Date.now() - e.id < 5000));
    }, 800);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {emojis.map((emoji) => (
        <span
          key={emoji.id}
          className="absolute text-2xl animate-float"
          style={{ left: `${emoji.left}%`, bottom: 0 }}
        >
          ❤️
        </span>
      ))}
    </div>
  );
}
