function welcome(name) {
  return `Hola ${name}, buenas noches`;
}

let greet = welcome("Héctor");

console.log(greet);

names = ["roberto", "murmurujo", "zopilote", "shaniqua", "remigia"];
function randomName(arrayNames) {
  const min = 0;
  const max = arrayNames.length;
  const randomIndex = Math.floor(Math.random() * (max - min + 1) + min);
  return arrayNames[randomIndex];
}

const firstGreet = welcome(randomName());

let name = randomName(names);
const secondGreet = welcome(name);
