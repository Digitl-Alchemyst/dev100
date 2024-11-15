
function createVehicle(type, make, model, year) {
  // Your code here
  return {
    type,
    make,
    model,
    year,
    drive() {
      console.log(`Driving a ${this.make} ${this.type}.`);
    },
  };
}

function createCar(make, model, year, doors) {
  // Your code here
  const car = Object.create(createVehicle('car', make, model, year));
  car.doors = doors;
  car.info = function () {
    console.log(`This is a ${this.year} ${this.make} ${this.model} with ${this.doors} doors.`);
  };
  car.honk = function () {
    console.log('Beep Beep!');
  };
  return car;
}

function createMotorcycle(make, model, year, hasSidecar) {
  // Your code here
  const motorcycle = Object.create(createVehicle('motorcycle', make, model, year));
  motorcycle.hasSidecar = hasSidecar;
  motorcycle.info = function () {
    console.log(`This is a ${this.year} ${this.make} ${this.model} with a sidecar= = ${this.hasSidecar}.`);
  };
  motorcycle.wheelie = function (){
    console.log('Wheee!')
  }
  motorcycle.rev = function (){
    console.log('Vroom!')
  }
  return motorcycle
}


const genericVehicle = createVehicle("sedan", "Toyota", "Camry", 2023);
genericVehicle.drive(); // Outputs: Driving a Toyota sedan.



const myCar = createCar("Honda", "Civic", 2022, 4);
myCar.drive(); // Outputs: Driving a Honda car.
myCar.info(); // Outputs: This is a 2022 Honda Civic with 4 doors.
myCar.honk(); // Outputs: Beep, beep!


const myMotorcycle = createMotorcycle("Harley-Davidson", "Street 750", 2021, false);
myMotorcycle.drive(); // Outputs: Driving a Harley-Davidson motorcycle.
myMotorcycle.info(); // Outputs: This is a 2021 Harley-Davidson Street 750 with a sidecar: false.
myMotorcycle.rev(); // Outputs: Vroom!
myMotorcycle.wheelie(); // Outputs: Wheee!













