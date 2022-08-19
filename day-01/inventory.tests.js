function inventoryChecker(inventory, { itemName }) {
  const qty = inventory[itemName];
  return qty > 5 ? 'plenty of inventory' : `running low on ${itemName}`;
}
