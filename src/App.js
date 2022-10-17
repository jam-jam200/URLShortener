import "./App.css";
import BackgroundAnimation from "./components/BackgroundAnimation";
import InputShortener from "./components/InputShortener";
import Result from "./components/Result";
import React, { useState } from "react";
import { Helmet } from "react-helmet";

function App() {
  const [inputValue, setInputValue] = useState("");
  return (
    <div className="App appContainer">
      <Helmet>
        <meta charSet="utf-8" />
        <title>URLShortz</title>
        <link rel="canonical" href="http://mysite.com/example" />
        <meta name="description" content="shortening url links" />
      </Helmet>
      <InputShortener setInputValue={setInputValue} />
      <BackgroundAnimation />
      <Result inputValue={inputValue} />
    </div>
  );
}

export default App;
