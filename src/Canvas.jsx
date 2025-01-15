import React from "react";

const Canvas = ({ canvasRef }) => {
  return (
    <div className="mt-8 w-full flex flex-col justify-center">
      <canvas
        ref={canvasRef}
        width="510"
        height="510"
        className="border  rounded bg-gray-100"
      ></canvas>
      <p className="text-sm text-gray-600 mt-2 text-center">
        Canvas Size: 50 x 50 from top-left corner to bottom-right corner
      </p>
    </div>
  );
};

export default Canvas;
