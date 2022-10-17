import "./App.css";
import BackgroundAnimation from "./components/BackgroundAnimation";
import InputShortener from "./components/InputShortener";
import Result from "./components/Result";
import React, { useState } from "react";

function App() {
  const [inputValue, setInputValue] = useState("");
  return (
    <div className="App appContainer">
      <InputShortener setInputValue={setInputValue}/>
      <BackgroundAnimation />
      <Result inputValue={inputValue}/>
    </div>
  );
}

export default App;
