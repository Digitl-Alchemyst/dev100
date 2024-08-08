let voltage = 13;
let current = 4;
let power = 52;
let resistance = 3.25;

function calculatePower(voltage, current) {
    let v = voltage;
    let i = current;
    const p = v * i;
    return p;
}

function calculateResistance(voltage, current) {
    let v = voltage;
    let i = current;    
    const o = v / i;
    return o;
};

function calculateVoltage(power, resistance) {
    let p = power;
    let r = resistance;
    const v = Math.sqrt(p * r);
    return v;
}

function calculateCurrent(power, voltage) {
    let p = power;
    let v = voltage;
    const i = p / v;
    return i;
}

const watts = calculatePower(voltage, current);
const ohms = calculateResistance(voltage, current);
const volts = calculateVoltage(power, resistance);
const amps =  calculateCurrent(power, voltage);

console.log(
  `⚡ Power: ${watts} Watts`,
  `🌩 Resistance: ${ohms} Ohms`,
  `🔌 Voltage: ${volts} Volts`,
  `💡 Current: ${amps} Amps`,
);
