import React from "react";
import styles from "./styles.module.scss";
//<Key data-key={key.key} sound={key.sound} />
function Key({ keyNumber, keySound }) {
  return (
    <div data-key={keyNumber} className="key">
      <kbd>{String.fromCharCode(keyNumber)}</kbd>
      <br />
      <span className={styles.sound}>{keySound}</span>
      <audio
        data-key={keyNumber}
        src={require(`./sounds/${keySound}.wav`)}
      ></audio>
    </div>
  );
}

export default Key;
