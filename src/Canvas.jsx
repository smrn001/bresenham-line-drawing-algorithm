import React from "react";

const Canvas = ({ canvasRef }) => {
  return (
    <div className="mt-8 w-full flex flex-col justify-center items-center relative">
      {/* Canvas Container */}
      <div className="relative">
        <canvas
          ref={canvasRef}
          width="510"
          height="510"
          className="border rounded bg-gray-100"
        ></canvas>
        {/* Coordinate Markers */}
        <p className="absolute top-1 left-1 text-xs md:text-sm text-gray-500">
          (0, 0)
        </p>
        <p className="absolute bottom-1 left-1 text-xs md:text-sm text-gray-500">
          (0, 50)
        </p>
        <p className="absolute top-1 right-1 text-xs md:text-sm text-gray-500">
          (50, 0)
        </p>
        <p className="absolute bottom-1 right-1 text-xs md:text-sm text-gray-500">
          (50, 50)
        </p>
      </div>
      {/* Instructions */}
      <p className="text-sm text-gray-600 mt-4 text-center px-4">
        The canvas represents a 50x50 pixel grid.
      </p>
    </div>
  );
};

export default Canvas;
