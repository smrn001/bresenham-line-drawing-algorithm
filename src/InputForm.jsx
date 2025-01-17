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
  // Validation function to check all inputs
  const validateInputs = () => {
    const isValidPoint = (value) => value >= 0 && value <= 50;

    if (
      !isValidPoint(startPoint.x) ||
      !isValidPoint(startPoint.y) ||
      !isValidPoint(endPoint.x) ||
      !isValidPoint(endPoint.y)
    ) {
      alert("Starting and Ending Point values must be between 0 and 50.");
      return false;
    }

    if (speed <= 0) {
      alert("Speed must be a positive value.");
      return false;
    }

    return true;
  };

  // Enhanced draw function with validation
  const handleValidatedDraw = () => {
    if (validateInputs()) {
      handleDraw();
    }
  };

  return (
    <div className="bg-white border border-gray-200 shadow-sm p-5 rounded-md w-full max-w-md md:mr-10">
      <div className="mb-5">
        <label className="block text-sm font-medium text-gray-600">
          Starting Point (0 to 50)
        </label>
        <div className="flex gap-2 mt-1">
          <input
            type="number"
            value={startPoint.x}
            onChange={(e) =>
              setStartPoint((prev) => ({
                ...prev,
                x: parseInt(e.target.value, 10) || 0,
              }))
            }
            placeholder="x0"
            className="w-1/2 border border-gray-300 rounded-md px-3 py-1 focus:ring-0 focus:border-gray-400"
          />
          <input
            type="number"
            value={startPoint.y}
            onChange={(e) =>
              setStartPoint((prev) => ({
                ...prev,
                y: parseInt(e.target.value, 10) || 0,
              }))
            }
            placeholder="y0"
            className="w-1/2 border border-gray-300 rounded-md px-3 py-1 focus:ring-0 focus:border-gray-400"
          />
        </div>
      </div>

      <div className="mb-5">
        <label className="block text-sm font-medium text-gray-600">
          Ending Point (0 to 50)
        </label>
        <div className="flex gap-2 mt-1">
          <input
            type="number"
            value={endPoint.x}
            onChange={(e) =>
              setEndPoint((prev) => ({
                ...prev,
                x: parseInt(e.target.value, 10) || 0,
              }))
            }
            placeholder="x1"
            className="w-1/2 border border-gray-300 rounded-md px-3 py-1 focus:ring-0 focus:border-gray-400"
          />
          <input
            type="number"
            value={endPoint.y}
            onChange={(e) =>
              setEndPoint((prev) => ({
                ...prev,
                y: parseInt(e.target.value, 10) || 0,
              }))
            }
            placeholder="y1"
            className="w-1/2 border border-gray-300 rounded-md px-3 py-1 focus:ring-0 focus:border-gray-400"
          />
        </div>
      </div>

      <div className="mb-5">
        <label className="block text-sm font-medium text-gray-600">
          Speed (Positive Value)
        </label>
        <input
          type="number"
          value={speed}
          onChange={(e) => setSpeed(Math.max(0, parseFloat(e.target.value)))}
          placeholder="Speed in ms"
          className="w-full border border-gray-300 rounded-md px-3 py-1 focus:ring-0 focus:border-gray-400 mt-1"
        />
      </div>

      <button
        onClick={handleValidatedDraw}
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
