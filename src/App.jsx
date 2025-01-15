import React, { useState, useRef } from "react";
import Canvas from "./Canvas";
import InputForm from "./InputForm";
import About from "./About";

const App = () => {
  const [startPoint, setStartPoint] = useState({ x: 0, y: 0 });
  const [endPoint, setEndPoint] = useState({ x: 0, y: 0 });
  const [speed, setSpeed] = useState(100); // Default speed in ms
  const canvasRef = useRef(null);

  const drawLineSlowly = (x0, y0, x1, y1) => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = "black";

    let dx = Math.abs(x1 - x0);
    let dy = Math.abs(y1 - y0);
    let sx = x0 < x1 ? 1 : -1;
    let sy = y0 < y1 ? 1 : -1;
    let err = dx - dy;

    const drawStep = () => {
      ctx.fillRect(x0 * 10, y0 * 10, 8, 8); // Scale up for better visibility

      if (x0 === x1 && y0 === y1) return; // End of line

      const e2 = 2 * err;
      if (e2 > -dy) {
        err -= dy;
        x0 += sx;
      }
      if (e2 < dx) {
        err += dx;
        y0 += sy;
      }

      setTimeout(drawStep, speed);
    };

    drawStep(); // Start drawing
  };

  const handleDraw = () => {
    drawLineSlowly(
      parseInt(startPoint.x),
      parseInt(startPoint.y),
      parseInt(endPoint.x),
      parseInt(endPoint.y)
    );
  };

  const handleReset = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear canvas
  };

  const [showAbout, setShowAbout] = useState(false);

  const toggleAbout = () => {
    setShowAbout(!showAbout);
  };

  return (
    <div className="min-h-screen flex flex-col items-center p-5 w-full max-w-5xl mx-auto h-full my-auto">
      <h1 className="text-base  md:text-2xl font-bold text-gray-800 mb-5 md:line-clamp-1">
        Bresenham's line algorithm
      </h1>
      <div className="flex md:flex-row flex-col items-center justify-around w-full">
        <div className="flex flex-col items-center">
          <InputForm
            startPoint={startPoint}
            setStartPoint={setStartPoint}
            endPoint={endPoint}
            setEndPoint={setEndPoint}
            speed={speed}
            setSpeed={setSpeed}
            handleDraw={handleDraw}
            handleReset={handleReset}
          />
        </div>
        <Canvas canvasRef={canvasRef} />
      </div>
      <button
        onClick={toggleAbout}
        className="mt-5 px-4 py-2 border text-black rounded"
      >
        {showAbout ? "About ↑ " : "  About  ↓ "}
      </button>
      {showAbout && <About />}
    </div>
  );
};

export default App;
