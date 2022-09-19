let input = document.querySelector("input");
let ol = document.getElementById("ol");

function addTask() {
  if (input.value != "") {
    let li = document.createElement("li");
    li.innerText = input.value;
    ol.appendChild(li);
    input.value = "";
    li.addEventListener("click", edit);
  } else {
    alert("Please enter some task");
  }
}

let selectedTask;
function edit(event) {
  input.value = event.target.innerText;
  selectedTask = event.target;
}

function deleteTask() {
  if (selectedTask) {
    ol.removeChild(selectedTask);
  } else {
    alert("Please select something");
  }
}

function updateTask() {
  selectedTask.innerText = input.value;
  selectedTask = undefined;
  input.value = "";
}
