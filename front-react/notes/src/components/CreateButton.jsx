import React from "react";

const CreateButton = () => {
	return (
        <button className="create-button" onClick={() => alert("Create Note")}>+</button>
    );
}
export default CreateButton;