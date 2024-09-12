function twoSum(nums, target) {
  // Your code here
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }

    }

  }

}

console.log(twoSum([2, 7, 11, 15], 9)); // [0,1]
console.log(twoSum([3, 2, 4], 6)); // [1,2]

 
function twoSums(nums, target) {
  const complementMap = {};

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    
    if (complement in complementMap) {
      return [complementMap[complement], i];
    }

    complementMap[nums[i]] = i;
  }

  return []; // If no solution is found
}

console.log(twoSums([2, 7, 11, 15], 9)); // [0,1]
console.log(twoSums([3, 2, 4], 6)); // [1,2]

console.log(twoSum([1, 5, 8, 3, 9, 12, 7, 2, 4, 6], 13)); // Expected: [2, 7]
console.log(twoSum([10, 5, 2, 3, 7, 5, 1, 8, 9, 4, 6], 11)); // Expected: [0, 6]
console.log(twoSum([-1, -2, -3, -4, -5, 10, 5, 2, 3, 7, 5], 5)); // Expected: [5, 10]
console.log(twoSum([100, 75, 50, 25, 12, 8, 6, 4, 2, 1], 14)); // Expected: [4, 8]
console.log(twoSum([1000, 500, 250, 125, 62, 31, 15, 7, 3, 1], 1031)); // Expected: [0, 5]





