import { useState } from "react";
import "./TicTacToe.css";

import circle from "./assets/circle.png";
import cross from "./assets/cross.png";
import { useRef } from "react";

let data = ["", "", "", "", "", "", "", "", ""];

function TicTacToe() {
  let numRef1 = useRef(null);
  let numRef2 = useRef(null);
  let numRef3 = useRef(null);
  let numRef4 = useRef(null);
  let numRef5 = useRef(null);
  let numRef6 = useRef(null);
  let numRef7 = useRef(null);
  let numRef8 = useRef(null);
  let numRef9 = useRef(null);

  const numsOfArray = [
    numRef1,
    numRef2,
    numRef3,
    numRef4,
    numRef5,
    numRef6,
    numRef7,
    numRef8,
    numRef9,
  ];
  const [count, setCount] = useState(0);
  const [lock, setLock] = useState(false);

  const titleRef = useRef(null);

  const toggle = (e, num) => {
    if (lock || data[num] !== "") {
      return;
    }
    if (count % 2 === 0) {
      e.target.innerHTML = `<img src='${cross}'/>`;
      data[num] = "x";
      setCount((c) => c + 1);
      e.target.disabled = true;
    } else {
      e.target.innerHTML = `<img src='${circle}'/>`;
      data[num] = "o";
      setCount((c) => c + 1);
      e.target.disabled = true;
    }
    checkWin();
  };

  const checkWin = () => {
    if (data[0] === data[1] && data[1] == data[2] && data[2] !== "") {
      won(data[2]);
    } else if (data[3] === data[4] && data[4] == data[5] && data[5] !== "") {
      won(data[5]);
    } else if (data[6] === data[7] && data[7] == data[8] && data[8] !== "") {
      won(data[8]);
    } else if (data[0] === data[3] && data[3] == data[6] && data[6] !== "") {
      won(data[6]);
    } else if (data[1] === data[4] && data[4] == data[7] && data[7] !== "") {
      won(data[7]);
    } else if (data[2] === data[5] && data[5] == data[8] && data[8] !== "") {
      won(data[8]);
    } else if (data[0] === data[4] && data[4] == data[8] && data[8] !== "") {
      won(data[8]);
    } else if (data[2] === data[4] && data[4] == data[6] && data[6] !== "") {
      won(data[6]);
    }
  };

  const won = (winner) => {
    setLock(true);
    if (winner === "x") {
      titleRef.current.innerHTML = `Congratulation: <img src='${cross}'/> Win `;
    } else {
      titleRef.current.innerHTML = `Congratulation: <img src='${circle}'/>  Win `;
    }
    setTimeout(reset, 7000);
  };

  const reset = () => {
    setLock(false);
    setCount(0);
    data = ["", "", "", "", "", "", "", "", ""];
    titleRef.current.innerHTML = `
      <h1 class="title">
        Tic Tac Toe <span class="game">Game</span> In <span class="react">React</span>
      </h1>
    `;
    numsOfArray.map((n) => {
      n.current.innerHTML = "";
    });
  };
  console.log(data);

  return (
    <div className="container">
      <h1 className="title" ref={titleRef}>
        Tic Tac Toe <span className="game">Game</span> In{" "}
        <span className="react">React</span>
      </h1>
      <div className="board">
        <div className="row1">
          <div
            className="boxes"
            ref={numRef1}
            onClick={(e) => toggle(e, 0)}
          ></div>
          <div
            className="boxes"
            ref={numRef2}
            onClick={(e) => toggle(e, 1)}
          ></div>
          <div
            className="boxes"
            ref={numRef3}
            onClick={(e) => toggle(e, 2)}
          ></div>
        </div>
        <div className="row1">
          <div
            className="boxes"
            ref={numRef4}
            onClick={(e) => toggle(e, 3)}
          ></div>
          <div
            className="boxes"
            ref={numRef5}
            onClick={(e) => toggle(e, 4)}
          ></div>
          <div
            className="boxes "
            ref={numRef6}
            onClick={(e) => toggle(e, 5)}
          ></div>
        </div>
        <div className="row1">
          <div
            className="boxes"
            ref={numRef7}
            onClick={(e) => toggle(e, 6)}
          ></div>
          <div
            className="boxes"
            ref={numRef8}
            onClick={(e) => toggle(e, 7)}
          ></div>
          <div
            className="boxes"
            ref={numRef9}
            onClick={(e) => toggle(e, 8)}
          ></div>
        </div>
      </div>
      <button className="reset" onClick={reset}>
        Reset
      </button>
    </div>
  );
}

export default TicTacToe;
