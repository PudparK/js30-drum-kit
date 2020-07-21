import React, { useEffect, useState } from "react";

//Components
import Key from "component/Key";

import keys from "utils/keys.js";

function Drumkit() {
  const [isPlayed, setIsPlayed] = useState(false);

  function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    if (!audio) return;

    key.classList.add("playing");
    audio.currentTime = 0;
    audio.play();
  }

  function removeTransition(e) {
    console.log("eeeeeeee", e);
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
    const keys = Array.from(document.querySelectorAll(".key"));
    keys.forEach((key) =>
      key.addEventListener("transitionend", removeTransition)
    );
  }

  return (
    <div className="keys">
      {keys.map((key, i) => {
        return (
          <Key key={i} keyNumber={key.keyNumber} keySound={key.keySound} />
        );
      })}
    </div>
  );
}

export default Drumkit;
