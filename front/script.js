function createNote(){
	var xhr = new XMLHttpRequest();
	xhr.open("POST", "createNote.php", true);
	xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	xhr.send();
}

var titleInputs = document.querySelectorAll(".title-input");

titleInputs.forEach(input =>{
	input.addEventListener("focus", function () {
		var id_in_db = input.getAttribute("id_in_db");
		var button = document.getElementById("delete-button"+id_in_db);
		button.className = "save-button";
    	button.id = "save-button"+id_in_db;
    	button.onclick = "saveNote('<?= $data['note_id']?>')";
    	document.getElementById("button-image"+id_in_db).src = "images/save.png";	
    });
    input.addEventListener("blur", function () {
		var id_in_db = input.getAttribute("id_in_db");
		var button = document.getElementById("save-button" + id_in_db);
		button.className = "delete-button";
		button.id = "delete-button" + id_in_db;
		button.onclick = "deleteNote('<?= $data['note_id']?>')";
		document.getElementById("button-image" + id_in_db).src = "images/trash.png";
        var xhr = new XMLHttpRequest();
        xhr.open("POST", "insertTitle.php", true);
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.send(
        `id=${encodeURIComponent(
            input.getAttribute("id_in_db")
        )}&title=${encodeURIComponent(input.value)}`
        );
		document.location.reload();
    });
});


var contentTextareas = document.querySelectorAll(".text-block-textarea");
contentTextareas.forEach(textarea => {
	textarea.addEventListener("focus", function () {
		var id_in_db = textarea.getAttribute("id_in_db");
    	var button = document.getElementById("delete-button"+id_in_db);
		button.className = "save-button";
		button.id = "save-button"+id_in_db;
		button.onclick = "saveNote('<?= $data['note_id']?>')";
		document.getElementById("button-image"+id_in_db).src = "images/save.png";
	});

	textarea.addEventListener("blur", function () {
		var id_in_db = textarea.getAttribute("id_in_db");
		var button = document.getElementById("save-button" + id_in_db);
		button.className = "delete-button";
		button.id = "delete-button" + id_in_db;
		button.onclick = "deleteNote('<?= $data['note_id']?>')";
		document.getElementById("button-image" + id_in_db).src = "images/trash.png";
		var xhr = new XMLHttpRequest();
		xhr.open("POST", "insertText.php", true);
		xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
		xhr.send(
		`id=${encodeURIComponent(
			textarea.getAttribute("id_in_db")
		)}&text=${encodeURIComponent(textarea.value)}`
		);
	});

});



function deleteNote(id) {
	var xhr = new XMLHttpRequest();
	xhr.open("POST", "deleteNote.php", true);
	xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	xhr.send("id=" + encodeURIComponent(id));
};

function saveNote(id) {
	
	var xhr = new XMLHttpRequest();
	xhr.open("POST", "insertTitle.php", true);
	xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	xhr.send(
	`id=${encodeURIComponent(
		titleInputs.getAttribute("id_in_db")
	)}&title=${encodeURIComponent(titleInputs.value)}`
	);
	xhr.open("POST", "insertText.php", true);
	xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	xhr.send(
	`id=${encodeURIComponent(
		contentTextarea.getAttribute("id_in_db")
	)}&text=${encodeURIComponent(contentTextarea.value)}`
	);
	document.getElementById("button-image" + id_in_db).src = "images/trash.png";
	document.reload();
};

var theme = JSON.parse(localStorage.getItem("theme"));

function changeTheme(){
	if (theme === "classic") {
		localStorage.setItem("theme", JSON.stringify("white"));
		theme = JSON.parse(localStorage.getItem("theme"));
    }
	else if (theme === "white") {
        localStorage.setItem("theme", JSON.stringify("dark"));
        theme = JSON.parse(localStorage.getItem("theme"));
    }
	else if (theme === "dark"){
		localStorage.setItem("theme", JSON.stringify("classic"));
    	theme = JSON.parse(localStorage.getItem("theme"));
	};
	
	document.location.reload();
};

if (theme === "white") {
  document.body.style.backgroundColor = "white";
  document.querySelectorAll(".note").forEach((note) => {
    note.style.backgroundColor = "rgb(255, 201, 51)";
    note.style.borderRadius = "20px";
    note.style.boxShadow = "none";
    note.onmouseover = function () {
      note.style.backgroundColor = "rgb(253, 211, 95)";
    };
    note.onmouseleave = function () {
      note.style.backgroundColor = "rgb(255, 201, 51)";
    };
  });
  document.querySelectorAll(".text-block-textarea").forEach((textarea) => {
    textarea.style.color = "white";
  });
  document.querySelectorAll(".title-input").forEach((input) => {
    input.style.color = "white";
  });
  document.querySelector(".change-theme-button").style.background =
    "linear-gradient(to right, rgb(255, 201, 51) 50%, white 50%)";
  document.querySelector(".change-theme-button").style.border =
    "3px solid grey";
  document.querySelector(".create-button").style.backgroundColor = "gray";
  document.querySelector(".create-button").style.color = "white";

} else if (theme === "dark") {
  document.body.style.backgroundColor = "rgb(40, 40, 40)";
  document.querySelectorAll(".note").forEach((note) => {
    note.style.backgroundColor = "rgb(70, 70, 70)";
    note.style.borderRadius = "20px";
    note.style.boxShadow = "none";
    note.onmouseover = function () {
      note.style.backgroundColor = "rgb(55, 55, 55)";
    };
    note.onmouseleave = function () {
      note.style.backgroundColor = "rgb(70, 70, 70)";
    };
  });
  document.querySelectorAll(".text-block-textarea").forEach((textarea) => {
    textarea.style.color = "rgb(110, 110, 110)";
  });
  document.querySelectorAll(".title-input").forEach((input) => {
    input.style.color = "gray";
  });
  document.querySelector(".change-theme-button").style.background =
    "linear-gradient(to right, rgb(63, 63, 63) 50%, rgb(26, 26, 26) 50%)";
  document.querySelector(".change-theme-button").style.border =
    "3px solid grey";
  document.querySelector(".create-button").style.backgroundColor =
    "rgb(63, 63, 63)";
  document.querySelector(".create-button").style.color = "gray";

} else if (theme === "classic") {
  document.body.style.backgroundColor = "rgb(224, 224, 224)";
  document.querySelectorAll(".note").forEach((note) => {
    note.style.backgroundColor = "rgb(255, 248, 206)";
    note.style.borderRadius = "0px";
    note.style.boxShadow = "13px 17px 16px -4px rgba(34, 60, 80, 0.2)";
    note.onmouseover = function () {
      note.style.backgroundColor = "rgb(255, 251, 226)";
    };
    note.onmouseleave = function () {
      note.style.backgroundColor = "rgb(255, 248, 206)";
    };
  });
  document.querySelectorAll(".text-block-textarea").forEach((textarea) => {
    textarea.style.color = "rgb(100,100,100)";
  });
  document.querySelectorAll(".title-input").forEach((input) => {
    input.style.color = "black";
  });
  document.querySelector(".change-theme-button").style.background =
    "linear-gradient(to right, rgb(255, 248, 206) 50%, rgb(224, 224, 224) 50%)";
  document.querySelector(".change-theme-button").style.border =
    "3px solid white";
  document.querySelector(".create-button").style.backgroundColor = "white";
  document.querySelector(".create-button").style.color = "gray";
}
