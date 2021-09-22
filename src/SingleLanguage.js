import countryData from "./data";
import { countryCodeEmoji } from "country-code-emoji";
import "./css/SingleLanguage.css";

function SingleLanguage({ lang }) {
  const info = countryData.find((c) => c.lang === lang);
  console.log(info, lang);
  return (
    <li key={lang} className="SingleLanguage">
      <h3>{info.lang}</h3>
      <p>{info.speakers}</p>
      <div>
        {info.countries.map(countryCodeEmoji).map((e, i) => (
          <span key={i}>{e}</span>
        ))}
      </div>
    </li>
  );
}

export default SingleLanguage;
