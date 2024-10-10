import { useEffect, useRef, useState } from "react";

function Edge() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const element = useRef(null);
  const gradientBackground = `radial-gradient(circle at ${pos.x}px ${pos.y}px, rgba(252, 98, 12, 0.3), rgba(255, 255, 255, 0))`;

  useEffect(() => {
    const parent = element.current.parentElement.parentElement;
    const secondParent = element.current.parentElement;

    const handlePos = (e) => {
      const secondParentRect = secondParent.getBoundingClientRect();
      const mouseX = e.clientX - secondParentRect.left;
      const mouseY = e.clientY - secondParentRect.top;

      // Set position based on mouse coordinates relative to the parent
      setPos({
        x: mouseX,
        y: mouseY,
      });
    };

    parent.addEventListener("mousemove", handlePos);

    return () => {
      parent.removeEventListener("mousemove", handlePos);
    };
  }, [element]);

  return (
    <div
      className={
        "absolute w-80 aspect-square rounded-full -z-10 -translate-y-1/2 -translate-x-1/2"
      }
      ref={element}
      style={{
        background: gradientBackground,
        top: `${pos.y}px`,
        left: `${pos.x}px`,
      }}
    ></div>
  );
}

export default Edge;
