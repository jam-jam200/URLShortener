import React, { useRef, useEffect, useState } from "react";

function InputShortener({ setInputValue }) {
  const [value, setValue] = useState("");
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  });
  const handleClick = () => {
    setInputValue(value);
    setValue("");
  };
  return (
    <div className="inputShortenerContainer">
      <h1>
        URL <span>Shortener</span>
      </h1>
      <div>
        <input
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
          ref={inputRef}
          type="text"
          placeholder="Paste URL Link..."
        />
        <button onClick={handleClick}>Shorten</button>
      </div>
    </div>
  );
}

export default InputShortener;
