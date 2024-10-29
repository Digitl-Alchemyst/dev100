# Code Challenge: Employee Data Analysis with Combined Object Methods

## Problem Statement

Human Resources data analysis often requires processing employee information in various ways, such as grouping employees by department, calculating salary statistics, and identifying top performers. This challenge focuses on combining multiple object methods (Object.entries(), Object.values(), and destructuring) to perform complex data analysis.

This challenge demonstrates how to combine different object manipulation methods in JavaScript to perform real-world data analysis tasks. This is particularly relevant for business applications, HR systems, and data processing workflows where complex data transformations are common.

## Function Signature

```javascript
const analyzeEmployeeData = (employeesData) => {
    // TODO: Return an object containing:
    // - departmentGroups: employees grouped by department
    // - averageSalaries: average salary per department
    // - topEarners: highest paid employee per department
    return {
        departmentGroups: {},
        averageSalaries: {},
        topEarners: {}
    };
};
```

## Input

- `employeesData`: An object where:
  - Keys are employee IDs
  - Values are employee objects containing:
    - name (string)
    - department (string)
    - salary (number)

## Output

An object containing:
- `departmentGroups`: Object with departments as keys and arrays of employees as values
- `averageSalaries`: Object with departments as keys and average salaries as values
- `topEarners`: Object with departments as keys and highest-paid employee objects as values

## Example

### Input:
```javascript
const employees = {
    emp101: { name: "Alice", department: "Engineering", salary: 85000 },
    emp102: { name: "Bob", department: "Marketing", salary: 75000 },
    emp103: { name: "Charlie", department: "Engineering", salary: 90000 },
    emp104: { name: "Diana", department: "Sales", salary: 80000 }
};
```

### Output:
```javascript
{
    departmentGroups: {
        Engineering: [
            { name: "Alice", salary: 85000 },
            { name: "Charlie", salary: 90000 }
        ],
        Marketing: [
            { name: "Bob", salary: 75000 }
        ],
        Sales: [
            { name: "Diana", salary: 80000 }
        ]
    },
    averageSalaries: {
        Engineering: 87500,
        Marketing: 75000,
        Sales: 80000
    },
    topEarners: {
        Engineering: { name: "Charlie", salary: 90000 },
        Marketing: { name: "Bob", salary: 75000 },
        Sales: { name: "Diana", salary: 80000 }
    }
}
```

## Constraints

- All salaries must be positive numbers
- Each employee must have a name, department, and salary
- Department names are case-sensitive
- There must be at least one employee per department

## Testing the Script

```javascript
const employees = {
    emp101: { name: "Alice", department: "Engineering", salary: 85000 },
    emp102: { name: "Bob", department: "Marketing", salary: 75000 },
    emp103: { name: "Charlie", department: "Engineering", salary: 90000 },
    emp104: { name: "Diana", department: "Sales", salary: 80000 }
};

console.log(analyzeEmployeeData(employees));
```

## Bonus Challenge

1. Add salary range (min/max) per department
2. Calculate the salary percentile for each employee
3. Find departments that are over/under the company average salary

## Detailed Explanation & Expanded Instructions

### **Spoilers Ahead**

### Step 1: Understanding the Problem

This challenge combines multiple object manipulation methods:

1. Object.entries(): To iterate over employee records
2. Object.values(): To process collections of employees
3. Destructuring: To extract properties efficiently
4. Grouping and Aggregation: To organize and analyze data

### Step 2: Implementing the Functions

Method 1: Using Array Methods and Reduce
```javascript
const analyzeEmployeeData = (employeesData) => {
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
        topEarners[dept] = emps.reduce((max, emp) => 
            emp.salary > (max?.salary || 0) ? emp : max, null);
    });
    
    return { departmentGroups, averageSalaries, topEarners };
};
```

Method 2: Using Separate Processing Steps
```javascript
const analyzeEmployeeData = (employeesData) => {
    const result = {
        departmentGroups: {},
        averageSalaries: {},
        topEarners: {}
    };
    
    // First pass: Group by department
    for (const [_, employee] of Object.entries(employeesData)) {
        const { department, ...empData } = employee;
        
        if (!result.departmentGroups[department]) {
            result.departmentGroups[department] = [];
        }
        result.departmentGroups[department].push(empData);
    }
    
    // Second pass: Calculate statistics
    for (const [dept, employees] of Object.entries(result.departmentGroups)) {
        // Average salary
        const totalSalary = employees.reduce((sum, emp) => sum + emp.salary, 0);
        result.averageSalaries[dept] = Math.round(totalSalary / employees.length);
        
        // Top earner
        result.topEarners[dept] = employees.reduce((max, emp) => 
            emp.salary > (max?.salary || 0) ? emp : max, null);
    }
    
    return result;
};
```

### Step 3: Testing the Functions

**Test Cases**

1. Multiple employees per department:
   - Input: The employees object shown above
   - Expected Output: Complete analysis with grouped data

2. Single employee per department:
   - Input: One employee in each department
   - Expected Output: Employee is both top earner and average

3. Equal salaries test:
   - Input: All employees with same salary
   - Expected Output: Same average and top earner salary

## Time and Space Complexity

- Time Complexity: O(n) where n is the number of employees
- Space Complexity: O(n) to store the processed data

Multiple passes through the data are still O(n) as they're sequential.

## References

- [MDN Object.entries()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries)
- [MDN Array.prototype.reduce()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)
- [MDN Destructuring Assignment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)

## Related Problems

- Payroll Processing: Calculating salaries and bonuses
- Performance Analysis: Evaluating employee performance metrics
- Department Analytics: Analyzing departmental statistics

## Key Takeaways

- Combining multiple object methods enables complex data analysis
- Destructuring simplifies property access in data processing
- Using reduce() for grouping and aggregation
- Managing multiple data transformations efficiently
- Real-world applications in HR and business analytics

## Notes

- Consider using Set for unique department names
- Watch out for floating-point arithmetic in salary calculations
- Consider adding error handling for missing or invalid data
- This pattern is commonly used in business intelligence applications
