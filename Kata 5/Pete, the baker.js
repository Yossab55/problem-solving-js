function cakes(recipe, available) {
  let recipeKeys = Object.keys(recipe);
  let availableKeys = Object.keys(available);
  let result = [];
  if (recipeKeys.length > availableKeys.length) return 0;
  for (let i = 0; i < recipeKeys.length; i++) {
    if (available[recipeKeys[i]] === undefined) return 0;
    result.push(parseInt(available[recipeKeys[i]] / recipe[recipeKeys[i]]));
  }
  return Math.min(...result);
}

console.log(
  cakes(
    { flour: 500, sugar: 200, eggs: 1 },
    { flour: 1200, sugar: 1200, eggs: 5, milk: 200 }
  )
);
console.log(
  cakes(
    { apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100 },
    { sugar: 500, flour: 2000, milk: 2000 }
  )
);
