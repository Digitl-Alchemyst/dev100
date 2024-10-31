const analyzeInventory = (inventory) => {
  const total = Object.values(inventory).reduce((acc, curr) => acc + curr, 0);

  const highestStock = Object.entries(inventory).reduce((acc, curr) => {
    if (curr[1] > acc.stock) {
      return { item: curr[0], stock: curr[1] };
    }
    return acc;
  }, { item: "", stock: 0 });

  const lowStock = Object.entries(inventory).reduce((acc, curr) => {
    if (curr[1] < 50) {
        acc.push({ item: curr[0], stock: curr[1] });
    }
    return acc;
  }, []);

  return {
    total,
    highestStock,
    lowStock,
  };
};

const productInventory = {
  laptop: 1200,
  smartphone: 800,
  headphones: 100,
  charger: 30,
  case: 25,
};

console.log(analyzeInventory(productInventory));