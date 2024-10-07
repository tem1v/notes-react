import "./styles/App.css";
import Note from "./components/NoteItem";
import { useEffect, useState } from "react";
import NoteList from "./components/NoteList";
import CreateButton from "./components/CreateButton";

function App() {
    const [notes, setNotes] = useState([
        { id: 1, title: "Заметка 1", text: "Текст" },
        { id: 2, title: "Заметка 2", text: "Текст 2" },
        { id: 3, title: "Заметка", text: "Description" },
        { id: 4, title: "", text: "" },
    ]);
	/*const [notes, setNotes] = useState([]);
	useEffect(() => {
		fetch('http://localhost/notes/back/web/api/posts')
	    .then((response) => response.json())
		.then((data) => {
			setNotes(data);
		})
		.catch((error) =>{
			console.error("Error fetching notes", error)
		})
	},[]);*/


    return (
        <div className="App">
            <div className="notes-block">
                <NoteList notes={notes}></NoteList>
            </div>
			<div className="create-note">
				<CreateButton></CreateButton>
			</div>
        </div>
    );
}

export default App;
