import { useEffect, useRef, useState } from "react";
import "./FloatingIcon.scss";
import Icon from "./../assets/floatingIcon.svg";

export default function FloatingIcon() {
  const [showIcon, setShowIcon] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [placeholder, setPlaceholder] = useState("");
  const [floatingSentences, setFloatingSentences] = useState([]);
  const [inputValue, setInputValue] = useState("");


  const wrapper_Ref = useRef(null);
  const typing_interval_Ref = useRef(null);
  const collapse_timeout_Ref = useRef(null);

  const Typing_Ref = useRef(false);
  const First_Auto_Open_Ref = useRef(true);

  const sentences = [
    "What are better alternatives at this price?",
    "Tell me which variant makes sense?",
    "What are better alternatives at this price?",
    "Tell me which variant makes sense?",
  ];

  useEffect(() => {
    const t = setTimeout(() => setShowIcon(true), 3000);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (!showIcon) return;
    const t = setTimeout(() => open_with_typing(), 5000);
    return () => clearTimeout(t);
  }, [showIcon]);

  useEffect(() => {
    const outside_Click = (e) => {
      if (
        !isOpen || !wrapper_Ref.current || wrapper_Ref.current.contains(e.target)
      ) return;

      if (First_Auto_Open_Ref.current)
        return;
      clearAllTimers();
      setIsOpen(false);
      setPlaceholder("");
    };

    document.addEventListener("mousedown", outside_Click);
    return () => document.removeEventListener("mousedown", outside_Click);
  }, [isOpen]);

  const open_with_typing = () => {
    clearAllTimers();
    setIsOpen(true);
    setPlaceholder("");
    setFloatingSentences([]);
    setInputValue("");

    let sentenceIndex = 0;
    let charIndex = 0;

    const typingSpeed = 80;
    const pauseAfterType = 1000;

    const type = () => {
      const currentSentence = sentences[sentenceIndex];

      if (charIndex <= currentSentence.length) {
        setPlaceholder(currentSentence.slice(0, charIndex));
        charIndex++;
      } else {

        setFloatingSentences([currentSentence]);
        setPlaceholder("");

        sentenceIndex++;
        charIndex = 0;

        if (sentenceIndex >= sentences.length) {
          clearInterval(typing_interval_Ref.current);
          Schedule_Collapse();
          return;
        }
      }
    };

    typing_interval_Ref.current = setInterval(type, typingSpeed);
  };

  const Schedule_Collapse = () => {
    collapse_timeout_Ref.current = setTimeout(() => {
      if (!Typing_Ref.current) {
        setIsOpen(false);
        setPlaceholder("");
        setFloatingSentences([]);
        First_Auto_Open_Ref.current = false;
      }
    }, 300);
  };

  const clearAllTimers = () => {
    clearInterval(typing_interval_Ref.current);
    clearTimeout(collapse_timeout_Ref.current);
  };

  const handleIconClick = () => {
    if (isOpen) {
      clearAllTimers();
      setIsOpen(false);
      setPlaceholder("");
      setFloatingSentences([]);
      First_Auto_Open_Ref.current = false;
    } else {
      open_with_typing();
    }
  };

  const handleFocus = () => {
    Typing_Ref.current = true;
    clearTimeout(collapse_timeout_Ref.current);
  };

  const handleBlur = () => {
    Typing_Ref.current = false;
    Schedule_Collapse();
  };


  return !showIcon ? null : (
    <div
      ref={wrapper_Ref}
      className={`floating_wrapper ${isOpen ? "open" : "close"}`}
    >
      <img
        src={Icon}
        alt="floating_icon"
        className="floating_icon"
        onClick={handleIconClick}
      />

      <div className="placeholder_wrapper">
        {!inputValue &&
          floatingSentences.map((s, idx) => (
            <div key={idx} className="floating_sentence">
              {s}
            </div>
          ))}

        <input
          className="floating_input"
          type="text"
          value={inputValue}
          placeholder={inputValue ? "" : placeholder}
          onChange={(e) => setInputValue(e.target.value)}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
      </div>
    </div>
  );
}
