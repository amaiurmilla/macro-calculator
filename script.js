let currentUnit = 'metric';
let currentLang = 'en';
const translations = {};

async function loadTranslations(lang) {
  if (translations[lang]) return translations[lang];
  const response = await fetch(`./locales/${lang}.json`);
  const data = await response.json();
  translations[lang] = data;
  return data;
}

const metricBtn = document.getElementById('metricBtn');
const imperialBtn = document.getElementById('imperialBtn');
const languageSelect = document.getElementById('language');
const toggleBtn = document.getElementById('toggleDarkMode');
const calculateBtn = document.getElementById('calculateBtn');
const copyBtn = document.getElementById('copyBtn');

function applyTranslations() {
  const t = translations[currentLang];
  document.querySelector('h1').textContent = t.title;
  document.getElementById('systemLabel').textContent = t.system;
  metricBtn.textContent = t.metric;
  imperialBtn.textContent = t.imperial;
  document.getElementById('sexLabel').textContent = t.sex;
  document.querySelector('#sex option[value="male"]').textContent = t.male;
  document.querySelector('#sex option[value="female"]').textContent = t.female;
  document.getElementById('ageLabel').textContent = t.age;
  document.getElementById('heightLabel').textContent = t.height;
  document.getElementById('weightLabel').textContent = t.weight;
  document.getElementById('activityLabel').textContent = t.activity;
  const act = document.querySelectorAll('#activity option');
  if (act.length >= 6) {
    act[0].textContent = t.activity1;
    act[1].textContent = t.activity2;
    act[2].textContent = t.activity3;
    act[3].textContent = t.activity4;
    act[4].textContent = t.activity5;
    act[5].textContent = t.activity6;
  }
  document.getElementById('goalLabel').textContent = t.goal;
  document.querySelector('#goal option[value="lose"]').textContent = t.lose;
  document.querySelector('#goal option[value="maintain"]').textContent = t.maintain;
  document.querySelector('#goal option[value="gain"]').textContent = t.gain;
  calculateBtn.textContent = t.calculate;
  copyBtn.textContent = t.copy;
  const isDark = document.body.classList.contains('dark');
  toggleBtn.textContent = isDark ? t.light : t.dark;
  
}

languageSelect.addEventListener('change', async () => {
  currentLang = languageSelect.value;
  await loadTranslations(currentLang);
  applyTranslations();
});

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
    ageError.textContent = translations[currentLang].ageMin;
    ageError.style.display = "block";
    document.getElementById('age').classList.add('invalid');
    valid = false;
  } else {
    ageError.style.display = "none";
    document.getElementById('age').classList.remove('invalid');
  }

  if (isNaN(height) || height < minHeight) {
    const minHeightDisplay = Math.round(minHeight);
    heightError.textContent = translations[currentLang].heightMin
      .replace('{min}', minHeightDisplay)
      .replace('{unit}', heightUnit);
    heightError.style.display = "block";
    document.getElementById('height').classList.add('invalid');
    valid = false;
  } else {
    heightError.style.display = "none";
    document.getElementById('height').classList.remove('invalid');
  }

  if (isNaN(weight) || weight < minWeight) {
    const minWeightDisplay = Math.round(minWeight);
    weightError.textContent = translations[currentLang].weightMin
      .replace('{min}', minWeightDisplay)
      .replace('{unit}', weightUnit);
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

  const result = calculateMacros({
    sex,
    age,
    height,
    weight,
    activity,
    goal,
    system
  });

  const t = translations[currentLang];
  const resultText =
    `${t.estCalories}: ${result.calories.toFixed(0)} kcal\n` +
    `${t.proteinW}: ${result.proteinGrams.toFixed(0)} g (${result.proteinPercent.toFixed(0)}%)\n` +
    `${t.fatW}: ${result.fatGrams.toFixed(0)} g (${result.fatPercent.toFixed(0)}%)\n` +
    `${t.carbsW}: ${result.carbsGrams.toFixed(0)} g (${result.carbsPercent.toFixed(0)}%)`;

  const resultsDiv = document.getElementById('results');
  resultsDiv.classList.remove('fade-in');
  void resultsDiv.offsetWidth;
  resultsDiv.textContent = resultText;
  resultsDiv.classList.add('fade-in');

  document.getElementById('copyBtn').style.display = 'block';

  // Guardar última sesión
  const data = {
    sex,
    age,
    height,
    weight,
    activity,
    goal,
    unit: currentUnit
  };
  localStorage.setItem('macroData', JSON.stringify(data));
});

// COPIAR RESULTADO
document.getElementById('copyBtn').addEventListener('click', () => {
  const text = document.getElementById('results').textContent;
  navigator.clipboard.writeText(text);
  alert(translations[currentLang].copied);
});

// RECUPERAR DATOS
window.addEventListener('DOMContentLoaded', async () => {
  await loadTranslations(currentLang);
  const saved = JSON.parse(localStorage.getItem('macroData'));
  if (saved) {
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
  }

  applyTranslations();
});

// MODO OSCURO
const prefersDark = localStorage.getItem('theme') === 'dark';

if (prefersDark) {
  document.body.classList.add('dark');
}

toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  const isDark = document.body.classList.contains('dark');
  toggleBtn.textContent = isDark ? translations[currentLang].light : translations[currentLang].dark;
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
});

if (typeof module !== 'undefined') {
  module.exports = { loadTranslations };
}
