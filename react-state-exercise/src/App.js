import React from "react";
import "./App.css";
import EightBall from "./EightBall";
import EightBallData from "./EightBallData";
function App() {
  return (
    <div className="App">
      <EightBall answers={EightBallData}/>
    </div>
  );
}

export default App;
