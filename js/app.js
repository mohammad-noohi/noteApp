// select elements
const $ = document;
const noteInput = $.querySelector("#note-input");
const addBtn = $.querySelector(".add-btn");
const clearBtn = $.querySelector(".clear-btn");
const colorItems = $.querySelectorAll(".color");
const notesContainer = $.querySelector(".notes");
let note;
let noteText = "";
let noteBg = null;
let chooseColor = false;

// Add note function
function addNote() {
  if (noteInput.value) {
    noteText = noteInput.value;
    let note = $.createElement("div");
    note.className = "note";
    note.innerHTML = noteInput.value;
    // hover to see whole text of note in tooltip
    note.setAttribute("title", noteInput.value);
    if (chooseColor) {
      note.style.backgroundColor = noteBg;
    } else {
      note.style.backgroundColor = "#fff";
    }
    notesContainer.append(note);
    // note : after append the element reset the background of note element
    noteBg = null;
    noteInput.value = "";
    noteInput.style.backgroundColor = "#fff";
  }
}

/* CLICK ON COLOR ITEM */
colorItems.forEach(function (item) {
  item.addEventListener("click", function (event) {
    noteBg = getComputedStyle(item).backgroundColor;
    noteInput.style.backgroundColor = noteBg;
    chooseColor = true;
  });
});

/* INPUT EVENTS ( add new note with enter key ) */
noteInput.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    addNote();
  }
});

/* CLICK ON ADD BUTTON */
addBtn.addEventListener("click", function () {
  addNote();
});

/* CLICK ON CLEAR BUTTON */
clearBtn.addEventListener("click", function () {
  noteInput.value = "";
  noteInput.style.backgroundColor = "#fff";
});

/* DELETE NOTE WITH CLICK ON IT */
notesContainer.addEventListener("click", function (event) {
  if (event.target.className === "note") {
    event.target.remove();
  }
});
