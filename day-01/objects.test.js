function inventoryChecker(inventory, { itemName }) {
  return inventory[itemName] > 5
    ? 'plenty of inventory'
    : `running low on ${itemName}`;
}

test('inventory checker', () => {
  const inventory = {
    eggs: 24,
    bananas: 3,
    grapes: 12,
  };
  expect(inventoryChecker(inventory, { itemName: 'grapes' })).toBe(
    'plenty of inventory'
  );
  expect(inventoryChecker(inventory, { itemName: 'bananas' })).toBe(
    'running low on bananas'
  );
});
