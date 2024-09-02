function isPrime(num) {
  if (num <= 2) {
    return false;
  }
  if (num <= 3) {
    return true;
  }
  if (num % 2 === 0 || num % 3 === 0) {
    return false;
  }

  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
  }  
    return true;

}

console.log('is 2 Prime?', isPrime(2)); // Should print true
console.log('is 7 Prime?', isPrime(7)); // Should print true
console.log('is 12 Prime?', isPrime(12)); // Should print false
console.log('is 13 Prime?', isPrime(13)); // Should print true


function primesTo(num) {
  const primes = [];
  for (let i = 2; i <= num; i++) {
    if (isPrime(i)) {
      primes.push(i);
    }
  }
  return primes;
}

console.log('Primes up to 10:', primesTo(10)); // Should print [3, 5, 7]
console.log('Primes up to 20:', primesTo(20)); // Should print [3, 5, 7, 11, 13, 17, 19]
console.log('Primes up to 30:', primesTo(30)); // Should print [3, 5, 7, 11, 13, 17, 19, 23, 29]