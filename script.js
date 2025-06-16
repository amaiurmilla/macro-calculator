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

  const minHeightMetric = 100;
  const minWeightMetric = 30;
  let minHeight = minHeightMetric;
  let minWeight = minWeightMetric;
  let heightUnit = 'cm';
  let weightUnit = 'kg';

  if (currentUnit === 'imperial') {
    minHeight = minHeightMetric / 2.54; // convert cm to inches
    minWeight = minWeightMetric / 0.453592; // convert kg to lbs
    heightUnit = 'inches';
    weightUnit = 'lbs';
  }

  if (isNaN(age) || age < 18) {
    ageError.textContent = "Age must be at least 18.";
    ageError.style.display = "block";
    document.getElementById('age').classList.add('invalid');
    valid = false;
  } else {
    ageError.style.display = "none";
    document.getElementById('age').classList.remove('invalid');
  }

  if (isNaN(height) || height < minHeight) {
    const minHeightDisplay = Math.round(minHeight);
    heightError.textContent = `Height must be at least ${minHeightDisplay} ${heightUnit}.`;
    heightError.style.display = "block";
    document.getElementById('height').classList.add('invalid');
    valid = false;
  } else {
    heightError.style.display = "none";
    document.getElementById('height').classList.remove('invalid');
  }

  if (isNaN(weight) || weight < minWeight) {
    const minWeightDisplay = Math.round(minWeight);
    weightError.textContent = `Weight must be at least ${minWeightDisplay} ${weightUnit}.`;
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
  let height = parseFloat(document.getElementById('height').value);
  let weight = parseFloat(document.getElementById('weight').value);
  const activity = parseFloat(document.getElementById('activity').value);
  const goal = document.getElementById('goal').value;
  const system = currentUnit;

  if (system === 'imperial') {
    height *= 2.54;
    weight *= 0.453592;
  }

  let tmb;
  if (sex === 'male') {
    tmb = 10 * weight + 6.25 * height - 5 * age + 5;
  } else {
    tmb = 10 * weight + 6.25 * height - 5 * age - 161;
  }

  const maintenanceCalories = tmb * activity;

  let finalCalories;
  if (goal === 'lose') {
    finalCalories = maintenanceCalories - 500;
  } else if (goal === 'gain') {
    finalCalories = maintenanceCalories + 300;
  } else {
    finalCalories = maintenanceCalories;
  }

  const proteinGrams = weight * 2.2;
  const fatGrams = weight * 1;
  const proteinCalories = proteinGrams * 4;
  const fatCalories = fatGrams * 9;
  const carbsCalories = finalCalories - (proteinCalories + fatCalories);
  const carbsGrams = carbsCalories / 4;

  const total = proteinCalories + fatCalories + carbsCalories;
  const pPct = (proteinCalories / total) * 100;
  const fPct = (fatCalories / total) * 100;
  const cPct = (carbsCalories / total) * 100;

  const resultText = 
    `Estimated Daily Calories: ${finalCalories.toFixed(0)} kcal\n` +
    `Protein: ${proteinGrams.toFixed(0)} g (${pPct.toFixed(0)}%)\n` +
    `Fat: ${fatGrams.toFixed(0)} g (${fPct.toFixed(0)}%)\n` +
    `Carbohydrates: ${carbsGrams.toFixed(0)} g (${cPct.toFixed(0)}%)`;

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
