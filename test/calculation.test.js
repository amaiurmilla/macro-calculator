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
