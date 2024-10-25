const weatherData = {
  monday: 72,
  tuesday: 68,
  wednesday: 75,
  thursday: 70,
  friday: 73,
  saturday: 78,
  sunday: 76,
};

const processWeatherData = (data) => {
  // TODO: Return an object containing:
  // - celsiusData: object with temperatures in Celsius
  const celsiusData = Object.entries(data).map(([day, temp]) => [
    day,
    (temp - 32) * (5 / 9),
  ]);
  // - warmDays: object with days above 72°F
  const warmDays = Object.entries(data).filter(([day, temp]) => temp > 72);
  

  // - formatted: array of "Day: Temperature" strings
  const formatted = Object.entries(data).map(([day, temp]) => `${day}: ${temp}°F`);
  return {
    celsiusData,
    warmDays,
    formatted,
  };
};



console.log(processWeatherData(weatherData));