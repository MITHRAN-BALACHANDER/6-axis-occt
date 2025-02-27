import React, { useState } from "react";
import "./Sliders.css";

function XYZSliders() {
  const [xValue, setXValue] = useState(0);
  const [yValue, setYValue] = useState(0);
  const [zValue, setZValue] = useState(0);

  return (
    <div className="slider-container">
      <div className="slider">
        <label>X-Axis: {xValue}</label>
        <input
          type="range"
          min="-100"
          max="100"
          value={xValue}
          onChange={(e) => setXValue(e.target.value)}
        />
      </div>
      
      <div className="slider">
        <label>Y-Axis: {yValue}</label>
        <input
          type="range"
          min="-100"
          max="100"
          value={yValue}
          onChange={(e) => setYValue(e.target.value)}
        />
      </div>
      
      <div className="slider">
        <label>Z-Axis: {zValue}</label>
        <input
          type="range"
          min="-100"
          max="100"
          value={zValue}
          onChange={(e) => setZValue(e.target.value)}
        />
      </div>
    </div>
  );
}

export default XYZSliders;
