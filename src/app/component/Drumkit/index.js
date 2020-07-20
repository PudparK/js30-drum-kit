import React from "react";
import styles from "./styles.module.scss";

import keys from "utils/keys.js";

import Key from "component/Key";

export default function Drumkit() {
  return (
    <div className={styles.Keys}>
      <div>test</div>
      {keys.forEach((key) => {
        return <Key key={key} />;
      })}
      <div>test</div>
    </div>
  );
}
