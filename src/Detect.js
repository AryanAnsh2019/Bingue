import React, { useState } from "react";
import { francAll } from "franc";
import langs from "langs";
import "./css/Detect.css";

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
              {results.map((r) => (
                <li key={r}>{r}</li>
              ))}
            </ul>
          </>
        ) : typeof results === "object" ? (
          <>
            <p className="error">
              Sorry! We were not able to detect the language of the above
              text...
            </p>
            <div class="container">
              <div class="tear"></div>
              <div class="tear2"></div>
              <div class="face">
                <div class="eyebrow">︶</div>
                <div class="eyebrow">︶</div>
                <div class="eye"></div>
                <div class="eye"></div>
                <div class="mouth"></div>
              </div>
            </div>
          </>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default Detect;
