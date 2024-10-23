function calculateStatistics(grades) {
  // Your code here
  let sum = 0;
  let count = 0;
  let min = grades[0];
  let max = grades[0];

  let results = grades.reduce(
    (acc, grade) => {
      acc.sum += grade;
      acc.count++;
      if (grade < acc.min) {
        acc.min = grade;
      }
      if (grade > acc.max) {
        acc.max = grade;
      }
      return acc;
    },
    { sum: 0, count: 0, min: grades[0], max: grades[0] }
  );
  return results;
}

const grades = [85, 90, 78, 92, 88, 76];
const statistics = calculateStatistics(grades);
console.log(statistics); // Output: { sum: 509, count: 6, min: 76, max: 92 }
console.log(`Average: ${statistics.sum / statistics.count}`); // Output: Average: 84.8333333333