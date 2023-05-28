const form = document.getElementById('inputForm');
const outputList = document.getElementById('outputList');

// Add submit event listener
form.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent defult form submission behaviour

//fetching the values when event listener is triggered
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

  renderTasks();
  form.reset();

  //Test log check local storage is working 
  console.log(taskList);
});

// Function to get the selected emotions from checkboxes
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

function displayTask(task) {
    let item = document.createElement('li');
    item.innerHTML = `<div class="taskBox"><p class="activityName">${task.name}</p><div class="taskDetails"><p>${task.category}</p><p>${task.startTime}</p><p>${task.endTime}</p><p>${task.intensity}</p><p>${task.physicalFeedback.physScale}</p><p>${task.physicalFeedback.physType}</p><p>${task.psychologicalFeedback.psyScale}</p><p>${task.psychologicalFeedback.psyCheckboxes.join(', ')}</p><p>${task.psychologicalFeedback.psyType}</p><p>${task.motivation}</p></div></div>`;
    outputList.appendChild(item);
  
    const taskBox = item.querySelector('.taskBox');
    const activityName = item.querySelector('.activityName');
    const taskDetails = item.querySelector('.taskDetails');
  
    taskBox.addEventListener('click', function() {
      taskBox.classList.toggle('expanded');
    });
  }

//Array created for taskList
var taskList = [];

//Function for addTask, directly passing through the input parametres 
function addTask(name, category, startTime, endTime, intensity, physicalFeedback, psychologicalFeedback, motivation) {
  let task = {
    name,
    category,
    startTime,
    endTime,
    intensity,
    physicalFeedback,
    psychologicalFeedback,
    motivation
  };

  taskList.push(task);
  displayTask(task);
}

function renderTasks() {
    outputList.innerHTML = '';
    
    taskList.forEach(function(task) {
      displayTask(task);
    });
  }
  

  // Sample task for testing
addTask("Basketball Training", "Sports", "09:00", "11:00", 8, { physScale: 7, physType: "Sore muscles" }, { psyScale: 9, psyCheckboxes: ["Energized"], psyType: "" }, 10);

console.log(taskList);
renderTasks();
