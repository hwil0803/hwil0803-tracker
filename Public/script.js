const form = document.getElementById('inputForm');
const outputList = document.getElementById('outputList');

// Add submit event listener
form.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission

  
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

var taskList = [];

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
}

// Sample task for testing
addTask("Basketball Training", "Sports", "09:00", "11:00", 8, { physScale: 7, physType: "Sore muscles" }, { psyScale: 9, psyCheckboxes: ["Energized"], psyType: "" }, 10);

console.log(taskList);