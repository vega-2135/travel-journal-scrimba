const nums = [1,2,3,4,5];
const newNums = nums.map((x) => x ** 2);
console.log(newNums);

const names = ["alice", "bob", "charlie"];
const capitalizedNames = names.map(name => 
  name.charAt(0).toUpperCase() + name.slice(1)
);
console.log(capitalizedNames);

const pokemons = ["Bulbasaur", "Charmander", "Squirtle"];
const newPokemons = pokemons.map((pokemon) => `<p>${pokemon}</p>`);
console.log(newPokemons);