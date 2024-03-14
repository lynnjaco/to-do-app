const addTaskButton = document.querySelector("#add-task-button");
let taskCount = 0;

addTaskButton.addEventListener("click", (event) => {
  event.preventDefault();
  const form = document.querySelector("#to-do");
  const task = document.querySelector("#to-do").value;
  const error = document.querySelector("#error-message");
  const ul = document.querySelector("ul");
  const liTemplate = taskTemplate(task);

  if (task.length) {
    ul.append(liTemplate);
    form.value = "";
    taskCount++;
    document.querySelector("p").innerText = taskCount;
    
    // remove error message if input is seuccseful
    if (error.innerText) { 
      error.innerText = "";
    }
    // if text input is empty, show message
  } else {
    error.innerText = "Error: Text Input Required!";
  }
  
});

// create template for list item (input text + delete button)
function taskTemplate(task) {
    const template = document.createElement("li");
    template.innerHTML = `${task}
   <button id="delete-button">Delete</button>
  `;
    removeTask(template);
    return template;
  }

// delete function
function removeTask(element) {
    element.addEventListener("click", (event) => {
      event.target.parentNode.remove();
      taskCount--;
      document.querySelector("p").innerText = taskCount;
    });
  }