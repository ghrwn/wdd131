document.getElementById('lastModified').textContent = document.lastModified;

// Store the exercise log in LocalStorage for later use
const exercises = JSON.parse(localStorage.getItem("exercises")) || [];

const exerciseForm = document.getElementById("exercise-form");

exerciseForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.getElementById("exercise-name").value;
  const duration = document.getElementById("duration").value;
  const calories = document.getElementById("calories").value;

  const newExercise = { name, duration, calories };
  exercises.push(newExercise);
  localStorage.setItem("exercises", JSON.stringify(exercises));

  alert("Exercise logged successfully!");
});