const currentTemp = 74;
const raining = true;
if (currentTemp > 80) {
  console.log("☀️  It's hot outside");
} else if (currentTemp < 65 && currentTemp > 50) {
  console.log("⛅  It's cool outside");
} else if (currentTemp < 50) {
  console.log("❄️  It's cold outside");
} else {
  console.log("🌞  It's nice outside");
} 


if (currentTemp >= 120) {
  console.log("🔥🔥🔥 Move to the equator where it's cooler");
}

if (currentTemp >= 70 && currentTemp <= 80 && !raining) {
  console.log("🌞  It's very nice outside");
  
}

if (raining) {
  console.log("🌧️  It's raining outside");
}