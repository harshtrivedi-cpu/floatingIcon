import { useEffect, useRef, useState } from "react";
import Searchbar from '../searchsection/Searchbar'
import SuggestionTabs from '../suggestionTabs/SuggestionTabs'
import './AskankythingSection.scss'
import Peoplechecksection from "../peoplechecksection/Peoplechecksection";


export default function AskanythingSection (){
   const [searchValue, setSearchValue] = useState("");
  const [fastScroll, setFastScroll] = useState(true);
  const inputRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFastScroll(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleTabSelect = (text) => {
    setSearchValue(text);

    requestAnimationFrame(() => {
      inputRef.current?.focus();
    });
  };
    return(
        < div className="askanything_section_container">
        <div className="heading_section">
            <h1 className="heading_text">Ask anything about X440 Demin 
                <span className="highlighted_text">NEW</span>
            </h1>
        </div>
            
          <Searchbar value={searchValue} setValue={setSearchValue} ref={inputRef} />
          <SuggestionTabs fastScroll={fastScroll} onSelect={handleTabSelect} />
          <br/>
          <Peoplechecksection/>
        </div>
    )
}