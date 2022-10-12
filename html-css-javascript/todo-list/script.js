let input = document.querySelector(".task-input");
let ol = document.getElementById("ol");

let numbers = document.querySelector(".number-input");

let pending = "pending";
let done = "done";
//Add Task
function addTask() {
  if (input.value != "" && numbers != "") {
    let li = document.createElement("li");
    li.innerText = input.value;
    ol.appendChild(li);
    input.value = "";

    //marked or unmarked button
    let status = document.createElement("button");
    status.innerText = pending;
    status.style.backgroundColor = "aqua";
    li.append(status);

    status.addEventListener("click", changeStatus);

    function changeStatus() {
      console.log(status);
      if (status.innerText == pending) {
        status.innerText = done;
        status.style.backgroundColor = "aqua";
      } else if (status.innerText == done) {
        status.innerText = pending;
        status.style.backgroundColor = "blue";
      }
    }

    //Edit button
    let editTaskButton = document.createElement("button");
    editTaskButton.innerText = "E";
    editTaskButton.style.background = "red";

    //edit listener
    editTaskButton.addEventListener("click", editTask);

    li.append(editTaskButton);

    function editTask() {
      input.value = li.childNodes[0].textContent;
    }

    //Delete Button
    let deleteTaskButton = document.createElement("button");
    deleteTaskButton.innerText = "D";
    deleteTaskButton.style.background = "red";
    li.append(deleteTaskButton);

    //delete listener
    deleteTaskButton.addEventListener("click", deleteTask);

    //Delete Task function
    function deleteTask(event) {
      deleteTaskButton.parentElement.remove();
    }

    //Update Task
    let updateTaskButton = document.createElement("button");
    updateTaskButton.innerText = "U";
    li.append(updateTaskButton);

    updateTaskButton.addEventListener("click", updateTask);
    function updateTask() {
      li.childNodes[0].textContent = input.value;
    }

    //adding duration
    let duration = document.createElement("h5");
    duration.innerText = numbers.value;
    li.append(duration);
    numbers.value = "";
  } else {
    alert("Please write some task before adding!!!");
  }
}

// Edit Task
let selectedTask;

//Update Task
// function updateTask() {
//   let selectedTask = event.target();
//   selectedTask.innerText = input.value;
//   selectedTask = undefined;
//   input.value = "";
// }
