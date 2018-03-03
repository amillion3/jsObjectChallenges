console.log("Hello!");
// --------------------------------------
// --Challenge 1-------------------------
// --------------------------------------

// var players = [
//   { name: "Bob", scores: [10, 65] },
//   { name: "Bill", scores: [90, 5] },
//   { name: "Charlie", scores: [40, 55]
// }]; // Displays "Bill"
var players = [
  { name: "Bob", scores: [15, 20] },
  { name: "Bill", scores: [10, 15] },
  { name: "Charlie", scores: [90, 10]
}]; // Displays "Charlie"

var scoreArray = []; //[1,2,4]
for (var i = 0; i < players.length; i++) {
  scoreArray.push(players[i].scores[0] + players[i].scores[1]);
}
var highestScore = Math.max.apply(Math, scoreArray);
var outputstring;
for (var j = 0; j < scoreArray.length; j++) {
  if (scoreArray[j] === highestScore && scoreArray[j] <= 100) {
    outputString = players[j].name;
    break;
  } else if (scoreArray[j] > 100) {
      outputString = "False";
    }
}
document.getElementById("objChallenge1").innerHTML = "<h3>" + outputString + "</h3>";

// --------------------------------------
// --Challenge 2-------------------------
// --------------------------------------
// Given an array called winnerList and the name of a country, display the number of times a team from a given country has won. Return 0 if there have been no wins.



// --------------------------------------
// --Challenge 3-------------------------
// --------------------------------------
// Given an object containing two numbers and an arithmetic operator, return the appropriate math result.
// The four operators are "add", "subtract", "divide", "multiply".


// --------------------------------------
// --Challenge 4-------------------------
// --------------------------------------
// Let's implement the zipObject function that takes and array of names and an array of ages and smashes them into one object.


// --------------------------------------
// --Challenge 5-------------------------
// --------------------------------------
// The company Strive is looking for a new developer. Given a candidates minSalary and a jobs maxSalary determine if the company can affort the candidate. The Company will only accept candidates that have a minSalary that is at least 10% less than the jobs maxSalary. If the candidate matches display true otherwise display false.

