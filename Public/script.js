// Modal and overlay variables
const addButtons = document.querySelectorAll("[data-open-modal]");
const closeButton = document.querySelector("[data-close-modal]");
const modal = document.querySelector("[data-modal]");
const overlay = document.querySelector("[data-overlay]");

// Add button, for opening the modal/pop-up - used for the form
addButtons.forEach((button) => {
  button.addEventListener("click", () => {
    modal.classList.add("open");
    overlay.classList.add("open");
  });
});

// Close button, for closing the modal/pop-up - used for the form
closeButton.addEventListener("click", () => {
  modal.classList.remove("open");
  overlay.classList.remove("open");
});

// Based off week 4 tutorial - JS Objects - event listening and handling
const form = document.getElementById('inputForm');
const outputList = document.getElementById('outputList');

// Function to remove all tasks from local storage
function removeAllTasks() {
  localStorage.removeItem('tasks');
}

// Add submit event listener
form.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent default form submission behavior

  // Fetching the values when event listener is triggered - Week 4 scrimba 
  addTask(
    form.elements.textType.value,
    form.elements.selectType.value,
    form.elements.startTime.value,
    form.elements.endTime.value,
    form.elements.intenScale.value,
    {
      physScale: form.elements.phyScale.value,
      physType: form.elements.phyType.value
    },
    {
      psyScale: form.elements.psyScale.value,
      psyCheckboxes: getSelectedEmotions(),
      psyType: form.elements.emotionType.value
    },
    form.elements.motivScale.value
  );
//Form reset after the submit button is clicked 
  form.reset();
});

// Function to get the selected emotions from checkboxes - chatGPT helped generate this code, based off my initial attempt code 
function getSelectedEmotions() {
  const checkboxes = document.querySelectorAll('#emotionCheck input[type="checkbox"]');
  const selectedEmotions = [];

  checkboxes.forEach(function(checkbox) {
    if (checkbox.checked) {
      selectedEmotions.push(checkbox.value);
    }
  });

  return selectedEmotions;
}

// Function, when a task is created, append it to the HTML so it appears on the webpage
function displayTask(task) {
  let item = document.createElement('li');
  // Set the data-id attribute so items can be removed by the unique identifier from the local storage and DOM
  item.setAttribute('data-id', task.id); 
//Added the label for each input, then the data that matches from the addTask form 
  item.innerHTML = `
    <div class="taskBox">
      <p class="activityName"> ${task.name}</p>
      <div class="taskDetails">
        <p> <strong>Category:</strong> ${task.category}</p>
        <p> <strong>Id:</strong> ${task.id}</p>
        <p> <strong>Date:</strong> ${task.date}</p>
        <p> <strong>Start Time</strong>: ${task.startTime}</p>
        <p> <strong>End Time:</strong> ${task.endTime}</p>
        <p> <strong>Intensity:</strong> ${task.intensity}</p>
        <p> <strong>Physical Rating:</strong> ${task.physicalFeedback.physScale}</p>
        <p> <strong>Physical Comment:</strong> ${task.physicalFeedback.physType}</p>
        <p> <strong>Psychological Scale:</strong> ${task.psychologicalFeedback.psyScale}</p>
        <p> <strong>Psychological Emotions:</strong>${task.psychologicalFeedback.psyCheckboxes.join(', ')}</p>
        <p> <strong>Other:</strong> ${task.psychologicalFeedback.psyType}</p>
        <p> <strong>Motivation: </strong>${task.motivation}</p>
      </div>
    </div>`;

// item element represents each and appends to the submitted task in the outputList
  outputList.appendChild(item);

  //console.log(addTask); 

//Delete button created - based off week 4 scrimba task list tutorial 
  let delButton = document.createElement('button');
  let delButtonText = document.createTextNode('Delete');
  delButton.id = 'delete';
  delButton.appendChild(delButtonText);
  item.appendChild(delButton);

  // Delete Button event listener - based off week 4 scrimba task list tutorial 
  delButton.addEventListener('click', function(event) {
    item.remove();
    taskList = taskList.filter(function(taskItem) {
      return taskItem.id !== task.id;
    });

    // Retreiving the task array from local storage, removes specific task from the array based on the id unique identifier move the task from local storage
    let tasks = JSON.parse(localStorage.getItem('tasks'));
    tasks = tasks.filter(function(taskItem) {
      //callback function, if true will be included, if false will be excluded 
      return taskItem.id !== task.id;
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));

    // Check if there are no more tasks and remove all tasks from local storage, clearing it 
    if (tasks.length === 0) {
      removeAllTasks();
    }
  });

  //Modal Functionality 
  const taskBox = item.querySelector('.taskBox');
  const activityName = item.querySelector('.activityName');
  const taskDetails = item.querySelector('.taskDetails');

  taskBox.addEventListener('click', function() {
    taskBox.classList.toggle('expanded');
  });
}

//Array created for taskList
var taskList = [];

//Function for addTask, directly passing through the input parrameters 
function addTask(name, category, startTime, endTime, intensity, physicalFeedback, psychologicalFeedback, motivation) {
  let task = {
    name,
    category,
    id: Date.now(),
    date: new Date().toISOString(),
    startTime,
    endTime,
    intensity,
    physicalFeedback,
    psychologicalFeedback,
    motivation
  };

  taskList.push(task);
  displayTask(task);

// Store the task in local storage
  let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  tasks.push(task);
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

//Render tasks function clears existing tasks
function renderTasks() {
  outputList.innerHTML = '';

//Retrieves the value of the 'tasks' key from the local storage 
  let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

//Appending the tasks to the outputList 
  tasks.forEach(function(task) {
    displayTask(task);
  });
}

// Check if there are any tasks stored in local storage
if (localStorage.getItem('tasks')) {
  renderTasks();
}

// Sample task for testing
// addTask("Basketball Training", "Sports", "09:00", "11:00", 8, { physScale: 7, physType: "Sore muscles" }, { psyScale: 9, psyCheckboxes: ["Energized"], psyType: "" }, 10);
