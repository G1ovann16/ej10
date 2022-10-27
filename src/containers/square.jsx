import React, {  useState } from "react";
import "../styles/square.css";
const Square = () => {
    const [rgb, setRgb] = useState([0, 0, 0]);
  
  function updateColor() {
    let min = 1;
    let max = 255;
    setRgb([
      min + Math.random() * (max - min),
      min + Math.random() * (max - min),
      min + Math.random() * (max - min),
    ]);
  }
  function stopColor() {
    setRgb([0,0,0])
  }

  return (
    <div>
      <div
        style={{ backgroundColor: `rgb(${rgb})` }}
        onMouseMove={updateColor}
        // onMouseEnter={updateColor}
        onMouseLeave={stopColor}
        // onMouseOut={stopColor}
        onDoubleClick={stopColor}
        className="container"
      ></div>
    </div>
  );
};

export default Square;
