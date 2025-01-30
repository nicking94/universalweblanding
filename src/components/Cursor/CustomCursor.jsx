"use client";
import { useEffect, useState } from "react";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let animationFrameId;

    const moveCursor = (e) => {
      if (animationFrameId) return;
      animationFrameId = requestAnimationFrame(() => {
        setPosition({ x: e.clientX, y: e.clientY });
        animationFrameId = null;
      });
    };

    const hideCursor = () => setIsVisible(false);
    const showCursor = () => setIsVisible(true);

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseout", hideCursor);
    window.addEventListener("mouseover", showCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseout", hideCursor);
      window.removeEventListener("mouseover", showCursor);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      <div
        className={`cursor2 ${!isVisible ? "hide" : ""}`}
        style={{
          transform: `translate(calc(${position.x}px - 20px), calc(${position.y}px - 20px))`,
        }}
      ></div>
      <div
        className={`cursor1 ${!isVisible ? "hide" : ""}`}
        style={{
          transform: `translate(calc(${position.x}px - 4px), calc(${position.y}px - 4px))`,
        }}
      ></div>
    </>
  );
};

export default CustomCursor;
