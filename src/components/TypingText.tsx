"use client";

import { useEffect, useState } from "react";

export default function TypingText({
  text,
  speed = 60,
}: {
  text: string;
  speed?: number;
}) {
  const [displayed, setDisplayed] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed(text.slice(0, i + 1));
      i++;
      if (i === text.length) clearInterval(interval);
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <span className="font-mono text-2xl sm:text-3xl text-amber-400">
      {displayed}
      <span
        className={`border-r-2 border-amber-400 ${
          showCursor ? "opacity-100" : "opacity-0"
        }`}
      >
        &nbsp;
      </span>
    </span>
  );
}
