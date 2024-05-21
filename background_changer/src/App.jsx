import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [bgColor, setBgColor] = useState("white");

  const colors = ["red", "blue", "green", "yellow", "purple", "orange"];

  useEffect(() => {
    document.body.style.backgroundColor = bgColor;
  }, [bgColor]);

  return (
    <div className="App" style={{ backgroundColor: bgColor }}>
      <h1>Background Color Changer</h1>
      <div className="button-container">
        {colors.map((color) => (
          <button
            key={color}
            onClick={() => setBgColor(color)}
            style={{
              backgroundColor: color,
              color: "white",
              margin: "0 5px",
              padding: "10px 20px",
              border: "none",
              cursor: "pointer",
            }}
          >
            {color}
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;
