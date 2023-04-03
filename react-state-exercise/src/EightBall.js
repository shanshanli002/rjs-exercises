import React, { useState } from "react";
import './EightBall.css';

const EightBall = ({ answers }) => {
  const [message, setMessage] = useState("Think of a Question");
  const [ballColor, setBallColor] = useState("black");
  const randomQuestion = () => {
    //returns a number from 0 to 19 inclusive
    return Math.floor(Math.random() * answers.length);
  };
  
  const newMessage = () => {
    const randomMessage = answers[randomQuestion()];
    setMessage(randomMessage['msg']);
    setBallColor(randomMessage['color']);
  }

  return (
    <div className="EightBall" onClick={newMessage} style={{backgroundColor: ballColor}}>
      <h1 className="EightBall-message">{message}</h1>
    </div>
  );
};

export default EightBall;
