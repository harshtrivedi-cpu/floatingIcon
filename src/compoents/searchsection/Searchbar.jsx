import { useState } from "react";
import "./Searchbar.scss";
import SearchIcon from "../../assets/search_icon.svg";
import MicIcon from "../../assets/mic_icon.svg";

export default function Searchbar({ value, setValue, inputRef }) {
    const [focused, setFocused] = useState(false);
    return (
        <div className="searchbar_container">

            <div className="searchbar_inner">
                <div className="left_section">
                    <img src={SearchIcon} alt="search icon" className="left_icon" />
                    <div className="input_wrapper">
                        {!value && !focused && (
                            <div className="custom_placeholder">
                                <span className="small_text">Ask Question</span>
                                <span className="big_text">What’s on your mind?</span>
                            </div>
                        )}

                        <input
                            type="text"
                            className="search_input_field"
                            value={value}
                            ref={inputRef}
                            onChange={(e) => setValue(e.target.value)}
                            onFocus={() => setFocused(true)}
                            onBlur={() => setFocused(false)}
                        />
                    </div>
                </div>
                <img src={MicIcon} alt="mic_icon" className="right_icon" />
            </div>
        </div>
    );
}
