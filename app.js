const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const textInput = document.getElementById("input-box");

//Below code will call addTask function whenever we click enter, when we are inside the input-box
textInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    addTask();
  }
});

//addTask function = will addTask task as aList item in Html
function addTask() {
  if (inputBox.value === "") {
    alert("You Must Type Something");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value = "";
  saveDate();
}

//added event listener, so whenever someone click on list item - it will get checked or unchecked and if we click on span we will delete that task from the list

listContainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveDate();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveDate();
    }
  },
  false
);

//saveData() stores the data inside the listContainer
function saveDate() {
  localStorage.setItem("data", listContainer.innerHTML);
}

//showTask will get the stored localStorage data from localStorage
function showTask() {
  listContainer.innerHTML = localStorage.getItem("data");
}

showTask();
