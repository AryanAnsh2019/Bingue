import React, { useState } from "react";
import { francAll } from "franc-min";
import langs from "langs";
import "./css/Detect.css";
import Crying from "./Crying";
import SingleLanguage from "./SingleLanguage";


function Detect() {
  const [text, setText] = useState("");
  const [results, setResults] = useState("");
  function handleChange(evt) {
    setText(evt.target.value);
  }
  function handleSubmit(evt) {
    evt.preventDefault();
    setResults(
      francAll(text)
        .filter((r) => r[1] > 0.7)
        .map((r) => (langs.where("3", r[0]) ? langs.where("3", r[0]).name : ""))
        .filter((e) => e)
    );
    setText("");
  }
  return (
    <div className="Detect">
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Put in text to detect"
            value={text}
            onChange={handleChange}
          />
        </form>
        <p>
          We are easily confused on small samples. Make sure to pass it big
          documents to get reliable results.
        </p>
      </div>
      <div className="Detect-results">
        {results.length ? (
          <>
            <h5>Most Probable Languages</h5>
            <ul>
              {results.map((r) => {
                console
                  .log
                  //   countryData
                  //     .map((c) => (c.lang === r ? c : ""))[0]
                  // ["TZ", "KE", "RW"].map(countryCodeEmoji)
                  ();
                // <li key={r}>{langs.where(3, r).name}</li>
                return <SingleLanguage key={r} lang={r}>{r}</SingleLanguage>;
              })}
            </ul>
          </>
        ) : typeof results === "object" ? (
          <>
            <p className="error">
              Sorry! We were not able to detect the language of the above
              text...
            </p>
            <Crying />
          </>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default Detect;
