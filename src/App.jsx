import { useState } from "react";
import { useEffect } from "react";
import "./App.css";

function App() {
  const [index, setIndex] = useState(0);
  let [isActive, setIsActive] = useState(false);
  let [popup, setPopup] = useState(false);
  let [popupMessage, setPopupMessage] = useState(false);
  let [backgroundColor, setBackgroundColor] = useState("#8691bae8");

  useEffect(() => {
    setPopup(true);
  }, []);
  useEffect(() => {
    if (index === 10 || index === 100 || index === 1000) {
      setPopupMessage(true);
      if (index >= 10 && index < 100) {
        setBackgroundColor("rgb(139 237 142)");
      } else if (index >= 100 && index < 1000) {
        setBackgroundColor("#ff8e32e3");
      } else setBackgroundColor("#ff0000c7");
    } else setPopupMessage(false);
  }, [index]);

  useEffect(() => {
    if (index === 1000) {
      setIsActive(true);
    }
  }, [index]);

  function increase() {
    switch (true) {
      case index < 10:
        setIndex(index + 1);
        break;

      case index >= 10 && index < 100:
        setIndex(index + 10);
        break;

      case index >= 100 && index < 1000:
        setIndex(index + 100);
        break;
    }
  }

  function decrease() {
    switch (true) {
      case index > 100:
        setIndex(index - 100);
        break;

      case index <= 100 && index > 10:
        setIndex(index - 10);
        break;

      case index <= 10:
        setIndex(index - 1);
        break;
    }
  }

  function handleClickPopup() {
    setPopup(false);
  }
  function handleClickPopupMessage() {
    setPopupMessage(false);
  }
  return (
    <>
      {popup ? (
        <div className="pop-up">
          <h3>Welcome to my reactHooks page!</h3>
          <p>let me show you how we can use the hooks effectively</p>
          <i
            onClick={handleClickPopup}
            className="fa-solid fa-xmark close-btn"
          ></i>
        </div>
      ) : (
        ""
      )}

      {popupMessage ? (
        <div className="pop-up message">
          <h3>You've reached {index} !!</h3>
          <i
            onClick={handleClickPopupMessage}
            className="fa-solid fa-xmark close-btn"
          ></i>
        </div>
      ) : (
        ""
      )}
      <div
        className="container"
        style={(backgroundColor = { backgroundColor })}
      >
        <div>
          <button className="btn" onClick={increase}>
            increase
          </button>

          {isActive ? (
            <button className="btn" onClick={decrease}>
              decrease
            </button>
          ) : (
            ""
          )}
        </div>
        <p className="index-p">{index}</p>
      </div>
    </>
  );
}

export default App;
