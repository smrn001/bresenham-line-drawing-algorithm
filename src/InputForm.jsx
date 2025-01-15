import React from "react";

const InputForm = ({
  startPoint,
  setStartPoint,
  endPoint,
  setEndPoint,
  speed,
  setSpeed,
  handleDraw,
  handleReset,
}) => {
  return (
    <div className="bg-white border border-gray-200 shadow-sm p-5 rounded-md w-full max-w-md md:mr-10">
      <div className="mb-5">
        <label className="block text-sm font-medium text-gray-600">
          Starting Point
        </label>
        <div className="flex gap-2 mt-1">
          <input
            type="number"
            value={startPoint.x}
            onChange={(e) =>
              setStartPoint((prev) => ({ ...prev, x: e.target.value }))
            }
            placeholder="x0"
            className="w-1/2 border border-gray-300 rounded-md px-3 py-1 focus:ring-0 focus:border-gray-400"
          />
          <input
            type="number"
            value={startPoint.y}
            onChange={(e) =>
              setStartPoint((prev) => ({ ...prev, y: e.target.value }))
            }
            placeholder="y0"
            className="w-1/2 border border-gray-300 rounded-md px-3 py-1 focus:ring-0 focus:border-gray-400"
          />
        </div>
      </div>

      <div className="mb-5">
        <label className="block text-sm font-medium text-gray-600">
          Ending Point
        </label>
        <div className="flex gap-2 mt-1">
          <input
            type="number"
            value={endPoint.x}
            onChange={(e) =>
              setEndPoint((prev) => ({ ...prev, x: e.target.value }))
            }
            placeholder="x1"
            className="w-1/2 border border-gray-300 rounded-md px-3 py-1 focus:ring-0 focus:border-gray-400"
          />
          <input
            type="number"
            value={endPoint.y}
            onChange={(e) =>
              setEndPoint((prev) => ({ ...prev, y: e.target.value }))
            }
            placeholder="y1"
            className="w-1/2 border border-gray-300 rounded-md px-3 py-1 focus:ring-0 focus:border-gray-400"
          />
        </div>
      </div>

      <div className="mb-5">
        <label className="block text-sm font-medium text-gray-600">
          Speed (ms)
        </label>
        <input
          type="number"
          value={speed}
          onChange={(e) => setSpeed(e.target.value)}
          min="10"
          step="10"
          className="w-full border border-gray-300 rounded-md px-3 py-1 focus:ring-0 focus:border-gray-400 mt-1 "
        />
      </div>

      <button
        onClick={handleDraw}
        className="w-full bg-black text-white py-2 rounded-md font-medium mt-3"
      >
        Draw Line
      </button>
      <button
        onClick={handleReset}
        className="w-full bg-red-600 text-white py-2 rounded-md font-medium mt-2"
      >
        Reset
      </button>
    </div>
  );
};

export default InputForm;
