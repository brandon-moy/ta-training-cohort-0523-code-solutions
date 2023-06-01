const prices = [42.42, 10, 28.2234, 3.2, 5, 12];

console.log(
  'Price objects:',
  prices.map((price) => ({ price, salePrice: price / 2 }))
);
console.log(
  'Formatted prices:',
  prices.map((price) => `$${price.toFixed(2)}`)
);
