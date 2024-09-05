const double = (num) => {
  return num * 2;
};

const square = (num) => {
  return num * num;
};

const absolute = (num) => {
  return Math.abs(num);
};

function callback() {
  return double;
}

function operateOnArray(arr, callback) {
  return arr.map(callback);
}

console.log(operateOnArray([1, 2, 3, 4, 5], double));
console.log(operateOnArray([2, 4, 6, 8, 10], square));
console.log(operateOnArray([-3, -1, 0, 2, 4], absolute));
