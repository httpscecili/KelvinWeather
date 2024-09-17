//283K = 10ºC = 50ºF

const kelvin = 0;

// this is the value about const Kelvin 

let celsius = kelvin - 273;

// celsius is 273 grades minus kelvin

let fahrenheit = celsius * (9/5) + 32;

//fahrenheit use this celsius equation

 fahrenheit = Math.floor(fahrenheit);

/*When fahrenheit be converted to celsius, we get often a decimal number */

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`)
