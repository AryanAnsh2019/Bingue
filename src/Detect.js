import React, { useState } from "react";
import { francAll } from "franc";
import langs from "langs";

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
    console.log(typeof results);
    setText("");
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Put in text to detect"
          value={text}
          onChange={handleChange}
        />
      </form>
      {results.length ? (
        <>
          <h6>Most Probable Languages</h6>
          <ul>
            {results.map((r) => (
              <li key={r}>{r}</li>
            ))}
          </ul>
        </>
      ) : typeof results === "object" ? (
        "Sorry! We were not able to detect the language of the above text..."
      ) : (
        ""
      )}
    </div>
  );
}

export default Detect;
