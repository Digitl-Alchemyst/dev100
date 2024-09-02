function generateFibonacci(n) {
  if (n <= 0) return [];
  if (n === 1) return [0n];

    let fibonacci = [1n, 1n];
    for (let i = 2; i < n; i++) {
        fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
    }
    return fibonacci;
  }


console.log(generateFibonacci(100).map(n => n.toString())); // Should print [0, 1, 1, 2, 3, 5, 8] 