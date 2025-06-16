function calculateMacros({sex, age, height, weight, activity, goal, system}) {
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

  return {
    calories: finalCalories,
    proteinGrams,
    fatGrams,
    carbsGrams,
    proteinPercent: pPct,
    fatPercent: fPct,
    carbsPercent: cPct
  };
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = calculateMacros;
} else {
  window.calculateMacros = calculateMacros;
}
