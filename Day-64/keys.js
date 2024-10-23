const analyzeObjectKeys = (obj, searchKey) => {
  // TODO: Return an object containing:
  // - keys: array of all property names

  // - count: number of properties
  // - hasKey: boolean indicating if searchKey exists
  // - countNested: number of nested objects
  // - caseSensitiveSearch: boolean indicating if searchKey is case sensitive
  return {
    keys: Object.keys(obj),
    count: Object.keys(obj).length,
    hasKey: Object.keys(obj).includes(searchKey),
    countNested: Object.keys(obj).filter((key) => typeof obj[key] === 'object').length,
    caseSensitiveSearch: false,
  };

};

const student = {
  id: "ST101",
  name: "John Doe",
  age: 20,
  grade: "A",
  subjects: ["Math", "Physics", "English"],
};

console.log(analyzeObjectKeys(student, "grade"));
console.log(analyzeObjectKeys(student, "address"));
console.log(analyzeObjectKeys(student, "subjects"));