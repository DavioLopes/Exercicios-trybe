const listNames = ['Maria', 'Manuela', 'Jorge', 'Ricardo', 'Wilson'];

const verifyFirstLetter = (letter) => listNames.some((name) => name === letter);

//console.log(verifyFirstLetter('Maria')); // true
console.log(verifyFirstLetter('Maria')); // false