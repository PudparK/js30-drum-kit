import React, { useEffect, useState } from "react";

//Components
import Key from "component/Key";

import keys from "utils/keys.js";

function Drumkit() {
  const [isPlayed, setIsPlayed] = useState(false);

  function playSound(e) {
    const keyData = keys.find((el) => {
      return el.keyNumber === e.keyCode;
    });
    if (!keyData) return;
    const audio = new Audio(require(`./sounds/${keyData.keySound}.wav`));

    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);

    key.classList.add("playing");
    audio.play();
  }

  function removeTransition(e) {
    if (e.propertyName !== "transform") return;
    e.target.classList.remove("playing");
  }

  useEffect(() => {
    window.addEventListener("keydown", playSound);
    setIsPlayed(true);
    return () => {
      window.removeEventListener("keydown", playSound);
    };
  }, []);

  if (isPlayed) {
    console.log("isPlayed:", isPlayed);
    const keys = Array.from(document.querySelectorAll(".key"));
    keys.forEach((key) =>
      key.addEventListener("transitionend", removeTransition)
    );
  }
  console.log("Played:", isPlayed);

  return (
    <div className="keys">
      {keys.map((key, i) => {
        return (
          <Key
            key={i}
            keyNumber={key.keyNumber}
            keySound={key.keySound}
            onClick={(e) => {
              playSound({ keyCode: key.keyNumber });
            }}
          />
        );
      })}
    </div>
  );
}

export default Drumkit;
