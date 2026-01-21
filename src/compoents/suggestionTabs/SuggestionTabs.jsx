import "./SuggestionTabs.scss";
import arrowicon from "../../assets/side_arrow.svg";

const row1 = [
  "Find the best value in my budget ",
  "Explain the main differences between Variants",
  "Suggest bikes that fit my usage",
  "How durable is X440?",
  "Is it fade resistant?"
];

const row2 = [
   "Find the best value in my budget",
  "Explain the main differences between Variants",
  "Suggest bikes that fit my usage",
  "How durable is X440?",
  "Is it fade resistant?"
];

export default function SuggestionTabs({ onSelect, fastScroll }) {
  return (
    <div className="suggestion_tabs_container">
      <div className={`scroll_row ${fastScroll ? "fast" : ""}`}>
        {[...row1, ...row1].map((text, i) => (
          <button key={`r1-${i}`}  className="tab"
            onClick={() => onSelect(text)}>
            {text} <img src={arrowicon} alt="arrow icon" className="arrow_icon" />
          </button>
        ))}
      </div>

      <div className={`scroll_row reverse ${fastScroll ? "fast" : ""}`}>
        {[...row2, ...row2].map((text, i) => (
          <button key={`r2-${i}`} className="tab" onClick={() => onSelect(text)}>
            {text}  <img src={arrowicon} alt="arrow icon" className="arrow_icon" />
          </button>
        ))}
      </div>
    </div>
  );
}
