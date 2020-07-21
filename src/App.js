import React from "react";
import "./App.css";

// App Comonent
import Drumkit from "app/component/Drumkit";

function App() {
  return (
    <div className="App">
      <h1>
        ReactJS Drum Kit<span>.</span>
      </h1>
      <h3>
        <span>by </span>
        <a href="https://www.pudpark.dev">
          pudpark<span>.</span>dev
        </a>
      </h3>
      <Drumkit />
    </div>
  );
}

export default App;
