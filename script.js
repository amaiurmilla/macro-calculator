let currentUnit = 'metric';
let currentLang = 'en';

const translations = {
  en: {
    title: 'Macro Calculator',
    system: 'System:',
    metric: 'Metric',
    imperial: 'Imperial',
    sex: 'Sex:',
    male: 'Male',
    female: 'Female',
    age: 'Age:',
    height: 'Height:',
    weight: 'Weight:',
    activity: 'Activity Level:',
    activity1: 'Sedentary or very little exercise',
    activity2: 'Moderate exercise 1\u20133 days per week',
    activity3: 'Moderate exercise 4\u20135 days per week',
    activity4: 'Moderate exercise 7 days per week or intense exercise 3\u20134 times per week',
    activity5: 'Intense exercise 6\u20137 days per week',
    activity6: 'Very intense exercise 6\u20137 days per week or physically demanding job',
    goal: 'Goal:',
    lose: 'Lose Fat',
    maintain: 'Maintain',
    gain: 'Gain Muscle',
    protein: 'Protein %:',
    fat: 'Fat %:',
    carbs: 'Carbs %:',
    calculate: 'Calculate',
    estCalories: 'Estimated Daily Calories',
    proteinW: 'Protein',
    fatW: 'Fat',
    carbsW: 'Carbohydrates',
    copy: '📋 Copy Result',
    ageMin: 'Age must be at least 18.',
    heightMin: 'Height must be at least {min} {unit}.',
    weightMin: 'Weight must be at least {min} {unit}.',
    ratioSum: 'Ratios must total 100%.',
    copied: 'Result copied to clipboard!',
    dark: '🌙 Dark Mode',
    light: '☀️ Light Mode',
    advancedShow: 'Advanced Options',
    advancedHide: 'Hide Advanced Options'
  },
  es: {
    title: 'Calculadora de Macronutrientes',
    system: 'Sistema:',
    metric: 'Métrico',
    imperial: 'Imperial',
    sex: 'Sexo:',
    male: 'Hombre',
    female: 'Mujer',
    age: 'Edad:',
    height: 'Altura:',
    weight: 'Peso:',
    activity: 'Nivel de actividad:',
    activity1: 'Sedentario o muy poco ejercicio',
    activity2: 'Ejercicio moderado 1\u20133 d\xedas por semana',
    activity3: 'Ejercicio moderado 4\u20135 d\xedas por semana',
    activity4: 'Ejercicio moderado 7 d\xedas o intenso 3\u20134 veces por semana',
    activity5: 'Ejercicio intenso 6\u20137 d\xedas por semana',
    activity6: 'Ejercicio muy intenso 6\u20137 d\xedas o trabajo f\xedsicamente demandante',
    goal: 'Objetivo:',
    lose: 'Perder grasa',
    maintain: 'Mantener',
    gain: 'Ganar músculo',
    protein: 'Proteína %:',
    fat: 'Grasa %:',
    carbs: 'Carbohidratos %:',
    calculate: 'Calcular',
    estCalories: 'Calor\u00edas diarias estimadas',
    proteinW: 'Prote\u00ednas',
    fatW: 'Grasas',
    carbsW: 'Carbohidratos',
    copy: '📋 Copiar resultado',
    ageMin: 'La edad mínima es 18.',
    heightMin: 'La altura mínima es {min} {unit}.',
    weightMin: 'El peso mínimo es {min} {unit}.',
    ratioSum: 'Los porcentajes deben sumar 100%.',
    copied: '¡Resultado copiado!',
    dark: '🌙 Modo oscuro',
    light: '☀️ Modo claro',
    advancedShow: 'Opciones avanzadas',
    advancedHide: 'Ocultar opciones'
  }
};

const metricBtn = document.getElementById('metricBtn');
const imperialBtn = document.getElementById('imperialBtn');
const languageSelect = document.getElementById('language');
const toggleBtn = document.getElementById('toggleDarkMode');
const calculateBtn = document.getElementById('calculateBtn');
const copyBtn = document.getElementById('copyBtn');
const advancedBtn = document.getElementById('toggleAdvanced');
const advancedSection = document.getElementById('advancedSection');

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
  document.getElementById('proteinLabel').textContent = t.protein;
  document.getElementById('fatLabel').textContent = t.fat;
  document.getElementById('carbLabel').textContent = t.carbs;
  calculateBtn.textContent = t.calculate;
  copyBtn.textContent = t.copy;
  const isDark = document.body.classList.contains('dark');
  toggleBtn.textContent = isDark ? t.light : t.dark;
  if (advancedBtn) {
    const isHidden = advancedSection.style.display === 'none';
    advancedBtn.textContent = isHidden ? t.advancedShow : t.advancedHide;
  }
}

languageSelect.addEventListener('change', () => {
  currentLang = languageSelect.value;
  applyTranslations();
});

window.addEventListener('DOMContentLoaded', applyTranslations);

advancedBtn.addEventListener('click', () => {
  const isHidden = advancedSection.style.display === 'none';
  advancedSection.style.display = isHidden ? 'block' : 'none';
  const t = translations[currentLang];
  advancedBtn.textContent = isHidden ? t.advancedHide : t.advancedShow;
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
  const pRatio = parseFloat(document.getElementById('proteinRatio').value);
  const fRatio = parseFloat(document.getElementById('fatRatio').value);
  const cRatio = parseFloat(document.getElementById('carbRatio').value);

  const ageError = document.getElementById('ageError');
  const heightError = document.getElementById('heightError');
  const weightError = document.getElementById('weightError');
  const ratioError = document.getElementById('ratioError');

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

  const totalRatio = pRatio + fRatio + cRatio;
  if (isNaN(totalRatio) || Math.round(totalRatio) !== 100) {
    ratioError.textContent = translations[currentLang].ratioSum;
    ratioError.style.display = 'block';
    valid = false;
  } else {
    ratioError.style.display = 'none';
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

  const proteinRatio = parseFloat(document.getElementById('proteinRatio').value);
  const fatRatio = parseFloat(document.getElementById('fatRatio').value);
  const carbRatio = parseFloat(document.getElementById('carbRatio').value);

  const result = calculateMacros({
    sex,
    age,
    height,
    weight,
    activity,
    goal,
    system,
    ratios: { protein: proteinRatio, fat: fatRatio, carbs: carbRatio }
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
    unit: currentUnit,
    ratios: { protein: proteinRatio, fat: fatRatio, carbs: carbRatio }
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
window.addEventListener('DOMContentLoaded', () => {
  const saved = JSON.parse(localStorage.getItem('macroData'));
  if (!saved) return;

  document.getElementById('sex').value = saved.sex;
  document.getElementById('age').value = saved.age;
  document.getElementById('height').value = saved.height;
  document.getElementById('weight').value = saved.weight;
  document.getElementById('activity').value = saved.activity;
  document.getElementById('goal').value = saved.goal;
  if (saved.ratios) {
    document.getElementById('proteinRatio').value = saved.ratios.protein;
    document.getElementById('fatRatio').value = saved.ratios.fat;
    document.getElementById('carbRatio').value = saved.ratios.carbs;
  }

  if (saved.unit === 'imperial') {
    imperialBtn.click();
  } else {
    metricBtn.click();
  }

  applyTranslations();
});

// MODO OSCURO
const prefersDark = localStorage.getItem('theme') === 'dark';

if (prefersDark) {
  document.body.classList.add('dark');
}
toggleBtn.textContent = prefersDark ? translations[currentLang].light : translations[currentLang].dark;

toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  const isDark = document.body.classList.contains('dark');
  toggleBtn.textContent = isDark ? translations[currentLang].light : translations[currentLang].dark;
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
});
