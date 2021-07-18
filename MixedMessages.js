// //////////////////////////
// Arrays ///////////////////
// //////////////////////////

// List of cat species
const arrayCats = [
  "caracal",
  "cheetah",
  "cougar",
  "jaguar",
  "leopard",
  "lion",
  "lynx",
  "ocelot",
  "serval",
  "tiger"
];

// List of tree species
const arrayTrees = [
  "apple",
  "banyan",
  "baobab",
  "fir",
  "magnolia",
  "oak",
  "pine",
  "spruce",
  "sycamore",
  "willow"
];

// List of months
const arrayMonths = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

// //////////////////////////
// Functions ////////////////
// //////////////////////////

// Function to determine whether first letter of a word is a vowel
function startsWithVowel(str) {
  switch (str[0]) {
    case "a":
      return true;
    case "e":
      return true;
    case "i":
      return true;
    case "o":
      return true;
    case "u":
      return true;
    default:
      return false;
  }
}

// //////////////////////////
// Main Script //////////////
// //////////////////////////

// Randomly select a cat and a tree
let cat = arrayCats[Math.floor(Math.random() * 9)];
let tree = arrayTrees[Math.floor(Math.random() * 9)];

// Check if "A" or "An" is appropriate depending on species of cat
if (startsWithVowel(cat)) {
  cat = "n " + cat;
} else {
  cat = " " + cat;
}

// Get the current date
let today = new Date();
let date =
  arrayMonths[today.getMonth()] +
  " " +
  today.getDate() +
  ", " +
  today.getFullYear();

// Output message to the user
console.log(`A${cat} climbed up the ${tree} tree on ${date}!`);
