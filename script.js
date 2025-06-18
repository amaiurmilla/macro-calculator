let currentUnit = 'metric';
let currentLang = document.documentElement.lang ||
  (navigator.language ? navigator.language.slice(0, 2) : 'en');

const defaultTranslations = {
  en: {
    "title": "Macro Calculator",
    "system": "System:",
    "metric": "Metric",
    "imperial": "Imperial",
    "sex": "Sex:",
    "male": "Male",
    "female": "Female",
    "age": "Age:",
    "height": "Height:",
    "weight": "Weight:",
    "activity": "Activity Level:",
    "activity1": "Sedentary or very little exercise",
    "activity2": "Moderate exercise 1–3 days per week",
    "activity3": "Moderate exercise 4–5 days per week",
    "activity4": "Moderate exercise 7 days per week or intense exercise 3–4 times per week",
    "activity5": "Intense exercise 6–7 days per week",
    "activity6": "Very intense exercise 6–7 days per week or physically demanding job",
    "goal": "Goal:",
    "lose": "Lose Fat",
    "maintain": "Maintain",
    "gain": "Gain Muscle",
    "calculate": "Calculate",
    "estCalories": "Estimated Daily Calories",
    "proteinW": "Protein",
    "fatW": "Fat",
    "carbsW": "Carbohydrates",
    "copy": "\uD83D\uDCCB Copy Result",
    "ageMin": "Age must be at least 18.",
    "heightMin": "Height must be at least {min} {unit}.",
    "weightMin": "Weight must be at least {min} {unit}.",
    "copied": "Result copied to clipboard!",
    "dark": "\uD83C\uDF19 Dark Mode",
    "light": "\u2600\uFE0F Light Mode"
  },
  es: {
    "title": "Calculadora de Macronutrientes",
    "system": "Sistema:",
    "metric": "Métrico",
    "imperial": "Imperial",
    "sex": "Sexo:",
    "male": "Hombre",
    "female": "Mujer",
    "age": "Edad:",
    "height": "Altura:",
    "weight": "Peso:",
    "activity": "Nivel de actividad:",
    "activity1": "Sedentario o muy poco ejercicio",
    "activity2": "Ejercicio moderado 1–3 días por semana",
    "activity3": "Ejercicio moderado 4–5 días por semana",
    "activity4": "Ejercicio moderado 7 días o intenso 3–4 veces por semana",
    "activity5": "Ejercicio intenso 6–7 días por semana",
    "activity6": "Ejercicio muy intenso 6–7 días o trabajo físicamente demandante",
    "goal": "Objetivo:",
    "lose": "Perder grasa",
    "maintain": "Mantener",
    "gain": "Ganar músculo",
    "calculate": "Calcular",
    "estCalories": "Calorías diarias estimadas",
    "proteinW": "Proteínas",
    "fatW": "Grasas",
    "carbsW": "Carbohidratos",
    "copy": "\uD83D\uDCCB Copiar resultado",
    "ageMin": "La edad mínima es 18.",
    "heightMin": "La altura mínima es {min} {unit}.",
    "weightMin": "El peso mínimo es {min} {unit}.",
    "copied": "¡Resultado copiado!",
    "dark": "\uD83C\uDF19 Modo oscuro",
    "light": "\u2600\uFE0F Modo claro"
  },
  pt: {
    "title": "Calculadora de Macros",
    "system": "Sistema:",
    "metric": "Métrico",
    "imperial": "Imperial",
    "sex": "Sexo:",
    "male": "Homem",
    "female": "Mulher",
    "age": "Idade:",
    "height": "Altura:",
    "weight": "Peso:",
    "activity": "Nível de atividade:",
    "activity1": "Sedentário ou muito pouco exercício",
    "activity2": "Exercício moderado 1–3 dias por semana",
    "activity3": "Exercício moderado 4–5 dias por semana",
    "activity4": "Exercício moderado 7 dias por semana ou intenso 3–4 vezes por semana",
    "activity5": "Exercício intenso 6–7 dias por semana",
    "activity6": "Exercício muito intenso 6–7 dias por semana ou trabalho fisicamente exigente",
    "goal": "Objetivo:",
    "lose": "Perder gordura",
    "maintain": "Manter",
    "gain": "Ganhar músculo",
    "calculate": "Calcular",
    "estCalories": "Calorias diárias estimadas",
    "proteinW": "Proteína",
    "fatW": "Gordura",
    "carbsW": "Carboidratos",
    "copy": "\uD83D\uDCCB Copiar resultado",
    "ageMin": "A idade mínima é 18.",
    "heightMin": "A altura mínima é {min} {unit}.",
    "weightMin": "O peso mínimo é {min} {unit}.",
    "copied": "Resultado copiado para a área de transferência!",
    "dark": "\uD83C\uDF19 Modo escuro",
    "light": "\u2600\uFE0F Modo claro"
  },
  fr: {
    "title": "Calculateur de Macros",
    "system": "Système :",
    "metric": "Métrique",
    "imperial": "Impérial",
    "sex": "Sexe :",
    "male": "Homme",
    "female": "Femme",
    "age": "Âge :",
    "height": "Taille :",
    "weight": "Poids :",
    "activity": "Niveau d'activité :",
    "activity1": "Sédentaire ou très peu d'exercice",
    "activity2": "Exercice modéré 1 à 3 jours par semaine",
    "activity3": "Exercice modéré 4 à 5 jours par semaine",
    "activity4": "Exercice modéré 7 jours par semaine ou intense 3 à 4 fois par semaine",
    "activity5": "Exercice intense 6 à 7 jours par semaine",
    "activity6": "Exercice très intense 6 à 7 jours par semaine ou travail physiquement exigeant",
    "goal": "Objectif :",
    "lose": "Perdre de la graisse",
    "maintain": "Maintenir",
    "gain": "Gagner du muscle",
    "calculate": "Calculer",
    "estCalories": "Calories quotidiennes estimées",
    "proteinW": "Protéines",
    "fatW": "Graisse",
    "carbsW": "Glucides",
    "copy": "\uD83D\uDCCB Copier le résultat",
    "ageMin": "L'âge doit être d'au moins 18 ans.",
    "heightMin": "La taille doit être d'au moins {min} {unit}.",
    "weightMin": "Le poids doit être d'au moins {min} {unit}.",
    "copied": "Résultat copié dans le presse-papiers !",
    "dark": "\uD83C\uDF19 Mode sombre",
    "light": "\u2600\uFE0F Mode clair"
  },
  de: {
    "title": "Makro-Rechner",
    "system": "System:",
    "metric": "Metrisch",
    "imperial": "Imperial",
    "sex": "Geschlecht:",
    "male": "Mann",
    "female": "Frau",
    "age": "Alter:",
    "height": "Größe:",
    "weight": "Gewicht:",
    "activity": "Aktivitätsniveau:",
    "activity1": "Sitzend oder sehr wenig Bewegung",
    "activity2": "Mäßige Bewegung 1–3 Tage pro Woche",
    "activity3": "Mäßige Bewegung 4–5 Tage pro Woche",
    "activity4": "Mäßige Bewegung 7 Tage pro Woche oder intensive Bewegung 3–4 Mal pro Woche",
    "activity5": "Intensive Bewegung 6–7 Tage pro Woche",
    "activity6": "Sehr intensive Bewegung 6–7 Tage pro Woche oder körperlich anspruchsvoller Job",
    "goal": "Ziel:",
    "lose": "Fett verlieren",
    "maintain": "Erhalten",
    "gain": "Muskeln aufbauen",
    "calculate": "Berechnen",
    "estCalories": "Geschätzte tägliche Kalorien",
    "proteinW": "Protein",
    "fatW": "Fett",
    "carbsW": "Kohlenhydrate",
    "copy": "\uD83D\uDCCB Ergebnis kopieren",
    "ageMin": "Das Alter muss mindestens 18 sein.",
    "heightMin": "Die Größe muss mindestens {min} {unit} betragen.",
    "weightMin": "Das Gewicht muss mindestens {min} {unit} betragen.",
    "copied": "Ergebnis in die Zwischenablage kopiert!",
    "dark": "\uD83C\uDF19 Dunkler Modus",
    "light": "\u2600\uFE0F Heller Modus"
  },
  it: {
    "title": "Calcolatore di Macro",
    "system": "Sistema:",
    "metric": "Metrico",
    "imperial": "Imperiale",
    "sex": "Sesso:",
    "male": "Uomo",
    "female": "Donna",
    "age": "Età:",
    "height": "Altezza:",
    "weight": "Peso:",
    "activity": "Livello di attività:",
    "activity1": "Sedentario o pochissimo esercizio",
    "activity2": "Esercizio moderato 1–3 giorni a settimana",
    "activity3": "Esercizio moderato 4–5 giorni a settimana",
    "activity4": "Esercizio moderato 7 giorni a settimana o intenso 3–4 volte a settimana",
    "activity5": "Esercizio intenso 6–7 giorni a settimana",
    "activity6": "Esercizio molto intenso 6–7 giorni a settimana o lavoro fisicamente impegnativo",
    "goal": "Obiettivo:",
    "lose": "Perdere grasso",
    "maintain": "Mantenere",
    "gain": "Aumentare la massa muscolare",
    "calculate": "Calcola",
    "estCalories": "Calorie giornaliere stimate",
    "proteinW": "Proteine",
    "fatW": "Grassi",
    "carbsW": "Carboidrati",
    "copy": "\uD83D\uDCCB Copia risultato",
    "ageMin": "L'età minima è 18.",
    "heightMin": "L'altezza minima è {min} {unit}.",
    "weightMin": "Il peso minimo è {min} {unit}.",
    "copied": "Risultato copiato negli appunti!",
    "dark": "\uD83C\uDF19 Modalità scura",
    "light": "\u2600\uFE0F Modalità chiara"
  },
  tr: {
    "title": "Makro Hesaplayıcı",
    "system": "Sistem:",
    "metric": "Metrik",
    "imperial": "İngiliz",
    "sex": "Cinsiyet:",
    "male": "Erkek",
    "female": "Kadın",
    "age": "Yaş:",
    "height": "Boy:",
    "weight": "Kilo:",
    "activity": "Aktivite Seviyesi:",
    "activity1": "Hareketsiz veya çok az egzersiz",
    "activity2": "Haftada 1–3 gün orta düzeyde egzersiz",
    "activity3": "Haftada 4–5 gün orta düzeyde egzersiz",
    "activity4": "Haftada 7 gün orta düzeyde veya haftada 3–4 gün yoğun egzersiz",
    "activity5": "Haftada 6–7 gün yoğun egzersiz",
    "activity6": "Haftada 6–7 gün çok yoğun egzersiz veya fiziksel olarak zorlayıcı iş",
    "goal": "Hedef:",
    "lose": "Yağ kaybet",
    "maintain": "Koru",
    "gain": "Kas kazan",
    "calculate": "Hesapla",
    "estCalories": "Tahmini Günlük Kalori",
    "proteinW": "Protein",
    "fatW": "Yağ",
    "carbsW": "Karbonhidrat",
    "copy": "\uD83D\uDCCB Sonucu kopyala",
    "ageMin": "Yaş en az 18 olmalı.",
    "heightMin": "Boy en az {min} {unit} olmalı.",
    "weightMin": "Kilo en az {min} {unit} olmalı.",
    "copied": "Sonuç panoya kopyalandı!",
    "dark": "\uD83C\uDF19 Karanlık Mod",
    "light": "\u2600\uFE0F Aydınlık Mod"
  },
  pl: {
    "title": "Kalkulator Makro",
    "system": "System:",
    "metric": "Metryczny",
    "imperial": "Imperialny",
    "sex": "Płeć:",
    "male": "Mężczyzna",
    "female": "Kobieta",
    "age": "Wiek:",
    "height": "Wzrost:",
    "weight": "Waga:",
    "activity": "Poziom aktywności:",
    "activity1": "Siedzący tryb lub bardzo mało ćwiczeń",
    "activity2": "Umiarkowane ćwiczenia 1–3 dni w tygodniu",
    "activity3": "Umiarkowane ćwiczenia 4–5 dni w tygodniu",
    "activity4": "Umiarkowane ćwiczenia 7 dni w tygodniu lub intensywne 3–4 razy w tygodniu",
    "activity5": "Intensywne ćwiczenia 6–7 dni w tygodniu",
    "activity6": "Bardzo intensywne ćwiczenia 6–7 dni w tygodniu lub fizycznie wymagająca praca",
    "goal": "Cel:",
    "lose": "Stracić tłuszcz",
    "maintain": "Utrzymać",
    "gain": "Zbudować mięśnie",
    "calculate": "Oblicz",
    "estCalories": "Szacowane dzienne kalorie",
    "proteinW": "Białko",
    "fatW": "Tłuszcz",
    "carbsW": "Węglowodany",
    "copy": "\uD83D\uDCCB Skopiuj wynik",
    "ageMin": "Wiek musi wynosić co najmniej 18 lat.",
    "heightMin": "Wzrost musi wynosić co najmniej {min} {unit}.",
    "weightMin": "Waga musi wynosić co najmniej {min} {unit}.",
    "copied": "Wynik skopiowany do schowka!",
    "dark": "\uD83C\uDF19 Tryb ciemny",
    "light": "\u2600\uFE0F Tryb jasny"
  }
};

const translations = {};

async function loadTranslations(lang) {
  if (translations[lang]) return translations[lang];
  try {
    const response = await fetch(`./locales/${lang}.json`);
    if (!response.ok) throw new Error('network');
    const data = await response.json();
    translations[lang] = data;
    return data;
  } catch (e) {
    translations[lang] = defaultTranslations[lang] || defaultTranslations['en'];
    return translations[lang];
  }
}

const metricBtn = document.getElementById('metricBtn');
const imperialBtn = document.getElementById('imperialBtn');
const languageSelect = document.getElementById('language');
const toggleBtn = document.getElementById('toggleDarkMode');
const calculateBtn = document.getElementById('calculateBtn');
const copyBtn = document.getElementById('copyBtn');
const toast = document.getElementById('toast');

function showToast(message) {
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3000);
}

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
  document.documentElement.lang = currentLang;
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
  showToast(translations[currentLang].copied);
});

// RECUPERAR DATOS
window.addEventListener('DOMContentLoaded', async () => {
  await loadTranslations(currentLang);
  document.documentElement.lang = currentLang;
  languageSelect.value = currentLang;
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
