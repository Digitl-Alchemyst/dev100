const analyzeEmployeeData = (employeesData) => {
  // TODO: Return an object containing:
  // - departmentGroups: employees grouped by department
  // - averageSalaries: average salary per department
  // - topEarners: highest paid employee per department
  // Convert to array of employees with their data
  const employees = Object.entries(employeesData).map(([id, data]) => data);

  // Group by department
  const departmentGroups = employees.reduce((groups, emp) => {
    const { department, ...employeeData } = emp;
    groups[department] = groups[department] || [];
    groups[department].push(employeeData);
    return groups;
  }, {});

  // Calculate averages and find top earners
  const averageSalaries = {};
  const topEarners = {};

  Object.entries(departmentGroups).forEach(([dept, emps]) => {
    // Calculate average
    const total = emps.reduce((sum, emp) => sum + emp.salary, 0);
    averageSalaries[dept] = Math.round(total / emps.length);

    // Find top earner
    topEarners[dept] = emps.reduce(
      (max, emp) => (emp.salary > (max?.salary || 0) ? emp : max),
      null
    );
  });

  return { departmentGroups, averageSalaries, topEarners };
};

const employees = {
  emp101: { name: "Alice", department: "Engineering", salary: 85000 },
  emp102: { name: "Bob", department: "Marketing", salary: 75000 },
  emp103: { name: "Charlie", department: "Engineering", salary: 90000 },
  emp104: { name: "Diana", department: "Sales", salary: 80000 },
};

// console.log(analyzeEmployeeData(employees));
// console.log(JSON.stringify(analyzeEmployeeData(employees), null, 2));

// Get the analysis result
const analysisResult = analyzeEmployeeData(employees);

// Display results in the console
console.table(analysisResult.departmentGroups);
console.table(analysisResult.averageSalaries);
console.table(analysisResult.topEarners);