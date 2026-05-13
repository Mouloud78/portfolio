import { useEffect, useState } from "react";
import { Snowflake } from "lucide-react";

export const SnowBackground = () => {
  const [snows, setsnows] = useState([]);
  const [winds, setwinds] = useState([]);

  useEffect(() => {
    generatesnows();
    generatewinds();

    const handleResize = () => {
      generatesnows();
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const generatesnows = () => {
    const numberOfsnows = Math.floor(
      (window.innerWidth * window.innerHeight) / 12000,
    );

    const newsnows = [];

    for (let i = 0; i < numberOfsnows; i++) {
      newsnows.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 8 + 6,
        opacity: Math.random() * 0.5 + 0.4,
        animationDuration: Math.random() * 10 + 10,
        delay: Math.random() * 5,
      });
    }

    setsnows(newsnows);
  };

  const generatewinds = () => {
    const numberOfwinds = 6;

    const newwinds = [];

    for (let i = 0; i < numberOfwinds; i++) {
      newwinds.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        delay: Math.random() * 10,
        animationDuration: Math.random() * 4 + 3,
      });
    }

    setwinds(newwinds);
  };

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Snowflakes */}
      {snows.map((snow) => (
        <Snowflake
          key={snow.id}
          className="snowflake"
          style={{
            width: `${snow.size}px`,
            height: `${snow.size}px`,
            left: `${snow.x}%`,
            top: `${snow.y}%`,
            opacity: snow.opacity,
            animationDuration: `${snow.animationDuration}s`,
            animationDelay: `${snow.delay}s`,
          }}
        />
      ))}

      {/* Wind */}
      {winds.map((wind) => (
        <div
          key={wind.id}
          className="wind animate-wind"
          style={{
            left: `${wind.x}%`,
            top: `${wind.y}%`,
            animationDelay: `${wind.delay}s`,
            animationDuration: `${wind.animationDuration}s`,
          }}
        />
      ))}

      {/* Mountains */}
      <div className="mountains">
        <div className="mountain mountain-1" />
        <div className="mountain mountain-2" />
        <div className="mountain mountain-3" />
      </div>
    </div>
  );
};
