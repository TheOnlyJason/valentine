import { useState } from "react";
import "./App.css";

const phrase = [
  "No",
  "Please",
  "Are you sure?",
  "Please don't",
  "I'm going to kill myself",
  "I'm really going to kill myself if you dont say yes",
];

function App() {
  const [noCount, setCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesBottonSize = noCount * 20 + 50;
  const fontSize = yesBottonSize / 4;

  function handleNoClick() {
    setCount(noCount + 1);
  }
  function getNoButtonText() {
    return phrase[Math.min(noCount, phrase.length - 1)];
  }

  return (
    <div className="valentine-container">
      {yesPressed ? (
        <>
          <img
            alt="bears kissing"
            src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kissing"
          />
          <div className="text"> YAYY!!!</div>
        </>
      ) : (
        <>
          <img
            alt="bear with heart"
            src="https://gifdb.com/images/high/kiss-goodnight-cute-bears-dl1g095ttb1rr8i8.gif"
          />
          <div style={{ fontFamily: "cursive", fontSize: "50px" }}>
            Will you be my Valentine?
          </div>

          <div>
            <button
              className="yesButton"
              style={{
                height: yesBottonSize,
                width: yesBottonSize + 20,
                backgroundColor: "red",
                marginRight: "20px",
                borderRadius: "10%",
                outline: "none",
                border: "none",
                fontSize: `${fontSize}px`,
                color: "white",
              }}
              onClick={() => setYesPressed(true)}
            >
              <div className="yesButton"> YES </div>
            </button>
            <button
              onClick={handleNoClick}
              className="noButton"
              style={{
                height: 50,
                width: 70,
                backgroundColor: "green",
                borderRadius: "10%",
                border: "none",
                color: "white",
              }}
            >
              {getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
