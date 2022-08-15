test.skip('object keys', () => {
  const pet = {
    ['name']: 'max',
    ['type']: 'cat',
    ['isCute']: 'true',
    ['fhdouafna']: 'this works',
  };

  expect(pet).toEqual({
    name: 'max',
    type: 'cat',
    isCute: 'true',
    fhdouafna: 'this works',
  });

  pet['name'] = 'heidi';
  pet['type'] = 'cat';
  pet['isCute'] = 'true';
  pet['fhdouafna'] = 'this still works';

  expect(pet).toEqual({
    name: 'heidi',
    type: 'cat',
    isCute: 'true',
    fhdouafna: 'this still works',
  });

  pet.name = 'midnight';
  pet.type = 'cat';
  pet.isCute = 'true';
  pet['fhdouafna'] = 'this still works';

  expect(pet).toEqual({
    name: 'midnight',
    type: 'cat',
    isCute: 'true',
    fhdouafna: 'this still works',
  });
});

test.skip('dynamic object properties', () => {
  const pet = {
    name: 'felix',
    lives: 9,
  };
  let prop = 'name';
  expect(pet[prop]).toBe('felix');
  prop = 'lives';
  pet[prop]--;
  expect(pet[prop]).toBe(8);
});

test.skip('lookup or map', () => {
  const cats = [
    (felix = { name: 'felix', lives: 8 }),
    (midnight = { name: 'midnight', lives: 4 }),
    (max = { name: 'max', lives: 2 }),
    (heidi = { name: 'heidi', lives: 5 }),
  ];

  const catMap = {
    felix: felix,
    midnight: midnight,
    max: max,
    heidi: heidi,
  };
  let name = 'max';
  expect(catMap[name]).toBe(max);
});

function inventoryChecker(inventory, { itemName }) {
  return inventory[itemName] > 5
    ? 'plenty of inventory'
    : `running low on ${itemName}`;
}
test.skip('inventory checker', () => {
  const inventory = {
    eggs: 20,
    bananas: 4,
    grapes: 16,
  };

  const { eggs, ...rest } = inventory;

  expect(rest).toEqual({ bananas: 4, grapes: 16 });

  expect(inventoryChecker(inventory, { itemName: 'grapes' })).toBe(
    'plenty of inventory'
  );

  expect(inventoryChecker(inventory, { itemName: 'bananas' })).toBe(
    'running low on bananas'
  );
});
