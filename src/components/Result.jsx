import axios from "axios";
import React, { useState, useEffect } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

function Result({ inputValue }) {
  const [link, setLink] = useState("");
  console.log(link);
  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  useEffect(() => {
    if (inputValue.length) {
      axios
        .get(`https://api.shrtco.de/v2/shorten?url=${inputValue}`)
        .then((reponse) => {
          console.log(reponse);
          setLoading(false);
          setLink(reponse.data.result.full_short_link);
        })
        .catch((error) => {
          setError(error);
        })
        .finally(setLoading(true));
    }
     const timer = setTimeout(() => {
       setCopied(false);
     }, 2000);
     return () => {
       clearTimeout(timer);
     };
  }, [inputValue, copied]);


  if (loading) {
    return <p className="noData">Just a sec, your link is loading...</p>;
  }
  if (error) {
    return <p className="noData">Sorry, something went wrong😓</p>;
  }

  return (
    <>
      {link && (
        <div className="result">
          <p>{link}</p>
          <CopyToClipboard onCopy={() => setCopied(true)} text={link}>
            <button className={copied ? "copied" : null}>
              Copy Link
            </button>
          </CopyToClipboard>
        </div>
      )}
    </>
  );
}

export default Result;
