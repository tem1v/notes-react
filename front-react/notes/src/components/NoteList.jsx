import React from "react";
import NoteItem from "./NoteItem";

const NoteList = ({ notes }) => {
    return (
        <div className="notes-list">
            {notes.map((note) => (
                <NoteItem note={note} key={note.id}></NoteItem>
            ))}
        </div>
    );
};

export default NoteList;
