let name = "Jerry";
let age = 45;
let occupation = "Unemployed Bum";
let children = ['Morty', 'Summer'];

function createPerson(name, age, occupation) {
  // Your code here
  let person = {
    name: name,
    age: age,
    occupation: occupation,
  };
  return person;
}

function addProperty(person, key, value) {
  // Your code here
  person[key] = value;
    return person
}

function displayProperties(person) {
    let results = person.name + ' is a ' + person.age + ' year old ' + person.occupation + ' his kids are ' + person.children.join(', & ');
    return results;
}


let person = createPerson(name, age, occupation);
person = addProperty(person, 'children', children);
const results = displayProperties(person);

console.log(results);
