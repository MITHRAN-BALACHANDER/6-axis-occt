import React, { useState } from "react";
import "./Sliders.css";

function XYZSliders() {
  const [xValue, setXValue] = useState(0);
  const [yValue, setYValue] = useState(0);
  const [zValue, setZValue] = useState(0);

  const handleIncrement = (axis) => {
    if (axis === "x") setXValue((prev) => Math.min(prev + 1, 100));
    if (axis === "y") setYValue((prev) => Math.min(prev + 1, 100));
    if (axis === "z") setZValue((prev) => Math.min(prev + 1, 100));
  };

  const handleDecrement = (axis) => {
    if (axis === "x") setXValue((prev) => Math.max(prev - 1, -100));
    if (axis === "y") setYValue((prev) => Math.max(prev - 1, -100));
    if (axis === "z") setZValue((prev) => Math.max(prev - 1, -100));
  };

  return (
    <div className="slider-container">
      {/* X-Axis */}
      <div className="slider">
        <label>X-Axis: {xValue}</label>
        <div className="slider-controls">
          <button onClick={() => handleDecrement("x")}>-</button>
          <input
            type="range"
            min="-100"
            max="100"
            value={xValue}
            onChange={(e) => setXValue(Number(e.target.value))}
          />
          <button onClick={() => handleIncrement("x")}>+</button>
        </div>
      </div>
      
      {/* Y-Axis */}
      <div className="slider">
        <label>Y-Axis: {yValue}</label>
        <div className="slider-controls">
          <button onClick={() => handleDecrement("y")}>-</button>
          <input
            type="range"
            min="-100"
            max="100"
            value={yValue}
            onChange={(e) => setYValue(Number(e.target.value))}
          />
          <button onClick={() => handleIncrement("y")}>+</button>
        </div>
      </div>
      
      {/* Z-Axis */}
      <div className="slider">
        <label>Z-Axis: {zValue}</label>
        <div className="slider-controls">
          <button onClick={() => handleDecrement("z")}>-</button>
          <input
            type="range"
            min="-100"
            max="100"
            value={zValue}
            onChange={(e) => setZValue(Number(e.target.value))}
          />
          <button onClick={() => handleIncrement("z")}>+</button>
        </div>
      </div>
    </div>
  );
}

export default XYZSliders;
