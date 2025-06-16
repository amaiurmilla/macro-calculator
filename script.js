let currentUnit = 'metric';

const metricBtn = document.getElementById('metricBtn');
const imperialBtn = document.getElementById('imperialBtn');

metricBtn.addEventListener('click', () => {
  currentUnit = 'metric';
  metricBtn.classList.add('active');
  imperialBtn.classList.remove('active');
  document.getElementById('height').placeholder = 'cm';
  document.getElementById('weight').placeholder = 'kg';
});

imperialBtn.addEventListener('click', () => {
  currentUnit = 'imperial';
  imperialBtn.classList.add('active');
  metricBtn.classList.remove('active');
  document.getElementById('height').placeholder = 'inches';
  document.getElementById('weight').placeholder = 'lbs';
});

function validateInputs() {
  let valid = true;

  const age = parseInt(document.getElementById('age').value);
  const height = parseFloat(document.getElementById('height').value);
  const weight = parseFloat(document.getElementById('weight').value);

  const ageError = document.getElementById('ageError');
  const heightError = document.getElementById('heightError');
  const weightError = document.getElementById('weightError');

  if (isNaN(age) || age < 18) {
    ageError.textContent = "Age must be at least 18.";
    ageError.style.display = "block";
    document.getElementById('age').classList.add('invalid');
    valid = false;
  } else {
    ageError.style.display = "none";
    document.getElementById('age').classList.remove('invalid');
  }

  if (isNaN(height) || height < 100) {
    heightError.textContent = "Height must be at least 100 cm.";
    heightError.style.display = "block";
    document.getElementById('height').classList.add('invalid');
    valid = false;
  } else {
    heightError.style.display = "none";
    document.getElementById('height').classList.remove('invalid');
  }

  if (isNaN(weight) || weight < 30) {
    weightError.textContent = "Weight must be at least 30 kg.";
    weightError.style.display = "block";
    document.getElementById('weight').classList.add('invalid');
    valid = false;
  } else {
    weightError.style.display = "none";
    document.getElementById('weight').classList.remove('invalid');
  }

  return valid;
}

document.getElementById('macroForm').addEventListener('submit', function (e) {
  e.preventDefault();
  if (!validateInputs()) return;

  const sex = document.getElementById('sex').value;
  const age = parseInt(document.getElementById('age').value);
  const height = parseFloat(document.getElementById('height').value);
  const weight = parseFloat(document.getElementById('weight').value);
  const activity = parseFloat(document.getElementById('activity').value);
  const goal = document.getElementById('goal').value;
  const system = currentUnit;

  const result = calculateMacros({ sex, age, height, weight, activity, goal, system });

  const resultText =
    `Estimated Daily Calories: ${result.calories.toFixed(0)} kcal\n` +
    `Protein: ${result.proteinGrams.toFixed(0)} g (${result.proteinPercent.toFixed(0)}%)\n` +
    `Fat: ${result.fatGrams.toFixed(0)} g (${result.fatPercent.toFixed(0)}%)\n` +
    `Carbohydrates: ${result.carbsGrams.toFixed(0)} g (${result.carbsPercent.toFixed(0)}%)`;

  const resultsDiv = document.getElementById('results');
  resultsDiv.classList.remove('fade-in');
  void resultsDiv.offsetWidth;
  resultsDiv.textContent = resultText;
  resultsDiv.classList.add('fade-in');

  document.getElementById('copyBtn').style.display = 'block';

  // Guardar última sesión
  const data = {
    sex, age, height, weight, activity, goal, unit: currentUnit
  };
  localStorage.setItem('macroData', JSON.stringify(data));
});

// COPIAR RESULTADO
document.getElementById('copyBtn').addEventListener('click', () => {
  const text = document.getElementById('results').textContent;
  navigator.clipboard.writeText(text);
  alert("Result copied to clipboard!");
});

// RECUPERAR DATOS
window.addEventListener('DOMContentLoaded', () => {
  const saved = JSON.parse(localStorage.getItem('macroData'));
  if (!saved) return;

  document.getElementById('sex').value = saved.sex;
  document.getElementById('age').value = saved.age;
  document.getElementById('height').value = saved.height;
  document.getElementById('weight').value = saved.weight;
  document.getElementById('activity').value = saved.activity;
  document.getElementById('goal').value = saved.goal;

  if (saved.unit === 'imperial') {
    imperialBtn.click();
  } else {
    metricBtn.click();
  }
});

// MODO OSCURO
const toggleBtn = document.getElementById('toggleDarkMode');
const prefersDark = localStorage.getItem('theme') === 'dark';

if (prefersDark) {
  document.body.classList.add('dark');
  toggleBtn.textContent = '☀️ Light Mode';
}

toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  const isDark = document.body.classList.contains('dark');
  toggleBtn.textContent = isDark ? '☀️ Light Mode' : '🌙 Dark Mode';
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
});
