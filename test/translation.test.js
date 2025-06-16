const assert = require('assert/strict');
const fs = require('fs/promises');
const { test } = require('node:test');

 test('load default language file', async () => {
   const raw = await fs.readFile('locales/en.json', 'utf8');
   const data = JSON.parse(raw);
   assert.equal(data.title, 'Macro Calculator');
 });

