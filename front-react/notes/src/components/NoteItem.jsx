import React from "react";
import { useState, setState } from "react";

const NoteItem = (props) => {

	const [title, setTitle] = useState(props.note.title);
    const [text, setText] = useState("");
	function handleChange(event){
		setTitle(event.target.value);
	}
	const [imageSrc, setImageSrc] = useState("images/trash.png");
    const onFocus = () => setImageSrc("images/save.png");
    const onBlur = () => setImageSrc("images/trash.png");

	return (
        <div className="note">
            <div className="title">
                <ul>
                    <li>
                        <input
                            className="title-input"
                            value={title}
                            onChange={handleChange}
                            onFocus={onFocus}
                            onBlur={onBlur}
                        />
                    </li>
                    <li>
                        <button className="delete-button" onclick="">
                            <img src={imageSrc} alt="trash" />
                        </button>
                    </li>
                </ul>
            </div>
            <div className="text-block">
                <textarea
                    className="text-block-textarea"
                    onChange={(e) => setText(e.target.value)}
                    onFocus={onFocus}
                    onBlur={onBlur}
                >
                    {props.note.text}
                </textarea>
            </div>
        </div>
    );
}
export default NoteItem