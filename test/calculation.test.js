const assert = require('assert/strict');
const calculateMacros = require('../calculator');
const { test } = require('node:test');

test('calculate macros for metric male example', () => {
  const result = calculateMacros({
    sex: 'male',
    age: 30,
    height: 180,
    weight: 80,
    activity: 1.55,
    goal: 'maintain',
    system: 'metric'
  });

  assert.ok(Math.abs(result.calories - 2759) < 1);
  assert.ok(Math.abs(result.proteinGrams - 176) < 0.1);
  assert.ok(Math.abs(result.fatGrams - 80) < 0.1);
  assert.ok(Math.abs(result.carbsGrams - 333.75) < 0.01);
});

test('calculate macros for metric male lose goal', () => {
  const result = calculateMacros({
    sex: 'male',
    age: 30,
    height: 180,
    weight: 80,
    activity: 1.55,
    goal: 'lose',
    system: 'metric'
  });

  assert.ok(Math.abs(result.calories - 2259) < 1);
  assert.ok(Math.abs(result.proteinGrams - 176) < 0.1);
  assert.ok(Math.abs(result.fatGrams - 80) < 0.1);
  assert.ok(Math.abs(result.carbsGrams - 208.75) < 0.01);
});

test('calculate macros for metric male gain goal', () => {
  const result = calculateMacros({
    sex: 'male',
    age: 30,
    height: 180,
    weight: 80,
    activity: 1.55,
    goal: 'gain',
    system: 'metric'
  });

  assert.ok(Math.abs(result.calories - 3059) < 1);
  assert.ok(Math.abs(result.proteinGrams - 176) < 0.1);
  assert.ok(Math.abs(result.fatGrams - 80) < 0.1);
  assert.ok(Math.abs(result.carbsGrams - 408.75) < 0.01);
});

test('calculate macros for imperial male example', () => {
  const result = calculateMacros({
    sex: 'male',
    age: 30,
    height: 71,
    weight: 176,
    activity: 1.55,
    goal: 'maintain',
    system: 'imperial'
  });

  assert.ok(Math.abs(result.calories - 2759.69) < 1);
  assert.ok(Math.abs(result.proteinGrams - 175.63) < 0.1);
  assert.ok(Math.abs(result.fatGrams - 79.83) < 0.1);
  assert.ok(Math.abs(result.carbsGrams - 334.67) < 0.01);
});

test('calculate macros for metric female example', () => {
  const result = calculateMacros({
    sex: 'female',
    age: 30,
    height: 180,
    weight: 80,
    activity: 1.55,
    goal: 'maintain',
    system: 'metric'
  });

  assert.ok(Math.abs(result.calories - 2501.7) < 1);
  assert.ok(Math.abs(result.proteinGrams - 176) < 0.1);
  assert.ok(Math.abs(result.fatGrams - 80) < 0.1);
  assert.ok(Math.abs(result.carbsGrams - 269.43) < 0.01);
});

test('calculate macros for imperial female example', () => {
  const result = calculateMacros({
    sex: 'female',
    age: 30,
    height: 71,
    weight: 176,
    activity: 1.55,
    goal: 'maintain',
    system: 'imperial'
  });

  assert.ok(Math.abs(result.calories - 2502.39) < 1);
  assert.ok(Math.abs(result.proteinGrams - 175.63) < 0.1);
  assert.ok(Math.abs(result.fatGrams - 79.83) < 0.1);
  assert.ok(Math.abs(result.carbsGrams - 270.34) < 0.01);
});
