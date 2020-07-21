import React from "react";
import styles from "./styles.module.scss";

//<Key data-key={key.key} sound={key.sound} />
function Key({ keyNumber, keySound, onClick }) {
  return (
    <div data-key={keyNumber} className="key" onClick={onClick}>
      <kbd>{String.fromCharCode(keyNumber)}</kbd>
      <br />
      <span className={styles.sound}>{keySound}</span>
    </div>
  );
}

export default Key;
