//destructuring
//Ana todo
const empleados = [
  { name: "Luis", email: "Luis@gmail.com" },
  { name: "Ana", email: "Ana@gmail.com" },
  { name: "Andrea", email: "Andrea@gmail.com" },
];

const [, empleadaAna] = empleados;
console.log(empleadaAna);

//Luis correo
const [empleadoLuis] = empleados;
const { email } = empleadoLuis;
console.log(email);

const pokemon = {
  name: "Bulbasaur",
  type: "grass",
  ability: {
    primary: "Overgrow",
    hidden: "Chlorophyll",
  },
  stats: {
    hp: 45,
    attack: 49,
    deffense: 59,
    speed: 45,
  },
  moves: ["Growl", "Tackle", "Vine Whip", "Razor Leaf"],
};
//Change name to nombre y nombre del pokemon
const { name: nombre } = pokemon;
console.log(nombre);
//Tipo
const { type } = pokemon;
console.log(type);
//Tackle
const { moves } = pokemon;
const [, tackle] = moves;
console.log(tackle);

//spread/rest
//merge this object with the previous one
const pikachu = {
  name: "Pikachu",
  type: "electric",
  ability: {
    primary: "Static",
    hidden: "Lightning rod",
  },
  stats: {
    hp: 35,
    attack: 55,
    deffense: 40,
    speed: 90,
  },
  moves: ["Quick Attack", "Volt Tackle", "Iron Tail", "Thunderbolt"],
};

const newPokemon = { ...pokemon, ...pikachu };
console.log(newPokemon);

//funciones

function sumEveryOther(...nums) {
  const sumNumbers = nums.reduce((acc, curr) => acc + curr);
  console.log(sumNumbers);
}
sumEveryOther(6, 8, 2, 3, 1); //20
sumEveryOther(11, 3, 12); //26

function addOnlyNums(...nums) {
  const onlyNums = nums
    .filter((nums) => typeof nums === "number")
    .reduce((acc, curr) => acc + curr);
  console.log(onlyNums);
}
addOnlyNums(1, "perro", 2, 4); //7

function countTheArgs(...args) {
  const sumArgs = args.length;
  console.log(sumArgs);
}

countTheArgs("gato", "perro"); //2
countTheArgs("gato", "perro", "pollo", "oso"); //4

const marvelCharacters = ["Bucky", "Murdock", "Jessica"];
const neilCharacters = ["Sandman", "Crowley", "Aziraphale"];

function combineTwoArrays() {
  const favCharacters = [...marvelCharacters, ...neilCharacters];
  console.log(favCharacters);
}

combineTwoArrays();

//Extras
//destructure save temps
const HIGH_TEMPERATURES = {
  yesterday: 30,
  today: 35,
  tomorrow: 32,
};

const { today } = HIGH_TEMPERATURES;
const maximaHoy = today;
console.log(maximaHoy);

const { tomorrow } = HIGH_TEMPERATURES;
const maximaMañana = today;
console.log(maximaMañana);
//new unique array

function onlyUniques(...arr) {
  const unique = arr.reduce(function (acc, curr) {
    if (!acc.includes(curr)) acc.push(curr);
    return acc;
  }, []);
  console.log(unique);
  return unique;
}

onlyUniques("cerdo", "gato", "pollo", "cerdo"); //['gato', 'pollo', 'cerdo']
onlyUniques(1, 1, 2, 2, 3, 6, 7, 8); //[1, 2, 3, 6, 7, 8]

//combine array
const combineAllArrays = (...arr) => {
  console.log(arr.reduce((acc, curr) => [...acc, ...curr]));
};
combineAllArrays([3, 6, 7, 8], [2, 7, 3, 1]);
// [3, 6, 7, 8, 2, 7, 3, 1]
combineAllArrays([2, 7, 3, 1], [2, 7, 4, 12], [2, 44, 22, 7, 3, 1]);
// [2, 7, 3, 1, 2, 7, 4, 12, 2, 44, 22, 7, 3, 1]

//elevar al cuadrado
const sumAndSquare = (...num) => {
  const result = num.map((num) => num ** 2).reduce((acc, curr) => acc + curr);
  return result;
};
console.log(sumAndSquare(2, 4, 6, 8, 2, 7, 3, 1));
