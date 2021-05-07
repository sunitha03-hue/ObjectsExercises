
let superChimpOne = {
    name: "Chad",
    species: "Chimpanzee",
    mass: 9,
    age: 6,
    astronautID:1,
    move: move()};
let salamander = {
    name: "Lacey",
    species: "Axolotl Salamander",
    mass: 0.1,
    age: 5,
    astronautID:10,
    move: move()};
let animal1 = {
    name: "Brad",
    species: "Chimpanzee",
    mass: 11,
    age: 6,
    astronautID:5,
    move: move()};
let animal2 = {
    name: "Leroy",
    species: "Beagle",
    mass: 14,
    age: 5,
    astronautID:7,
    move: move()};
let animal3 = {
    name: "Almina",
    species: "Tardigrade",
    mass: 0.0000000001,
    age: 1,
    astronautID:3,
    move: move()
    };
function move(){
      return Math.round(Math.random()*10);
    }
// After you have created the other object literals, add the astronautID property to each one.
//Create an array to hold the animal objects.
let crew=[superChimpOne, salamander, animal1, animal2, animal3];
console.log(crew);

// Print out the relevant information about each animal.
function crewReports(animal){
  return `${animal.name} is a ${animal.species}. They are ${animal.age} years old and ${animal.mass} kilograms. Their ID is ${animal.astronautID}.`
}

// for(let item in crew){
//   console.log(crewReports(crew[item]));
// }
// for(let i=0; i<crew.length; i++)
// {
//   console.log(crewReports(crew[i]));
// }
function fitnessTest(crew){
  let results=[];
  for(item in crew)
  {
//console.log(crew[item]);
let steps=0;
let numMoves=0;
while(steps<20){
  
  steps += crew[item.move]=move();
  numMoves++;
}
function displayTest(animal){
 //let results=fitnessTest(crew[item])
 //console.log("***70");
  return `"${animal.name} took ${numMoves} turns to take 20 steps",`
}

console.log(displayTest(crew[item]));
results.push(numMoves);
}
return results;
}
let results=fitnessTest(crew);
let turns=Math.min(...results);
let winner=crew[results.indexOf(turns)];
 console.log(`${winner.name} took ${turns} turns to take 20 steps`);



