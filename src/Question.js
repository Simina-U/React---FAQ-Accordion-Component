import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

export default function Question({ title, info }) {
  const [showInfo, setShowInfo] = useState(false);

  const handleBtns = () => {
    setShowInfo(!showInfo);
  };
  return (
    <article className="question">
      <header>
        <h4>{title}</h4>
        <button className="btn" onClick={handleBtns}>
          {!showInfo ? <AiOutlinePlus /> : <AiOutlineMinus />}
        </button>
      </header>
      {showInfo && <p>{info}</p>}
    </article>
  );
}
