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
var winnerList = [
  {season: '1999-2000', team: 'Real Madrid', country: 'Spain'},
  {season: '2000-2001', team: 'Bayern Munich', country: 'Germany'},
  {season: '2001-2002', team: 'Real Madrid', country: 'Spain'},
  {season: '2002-2003', team: 'Milan', country: 'Italy'},
  {season: '2003-2004', team: 'Porto', country: 'Portugal'},
  {season: '2004-2005', team: 'Liverpool', country: 'England'},
  {season: '2005-2006', team: 'Barcelona', country: 'Spain'},
  {season: '2006-2007', team: 'Milan', country: 'Italy'},
  {season: '2007-2008', team: 'Manchester United', country: 'England'},
  {season: '2008-2009', team: 'Barcelona', country: 'Spain'},
  {season: '2009-2010', team: 'Internazionale', country: 'Italy'},
  {season: '2010-2011', team: 'Barcelona', country: 'Spain'},
  {season: '2011-2012', team: 'Chelsea', country: 'England'},
  {season: '2012-2013', team: 'Bayern Munich', country: 'Germany'},
  {season: '2013-2014', team: 'Real Madrid', country: 'Spain'},
  {season: '2014-2015', team: 'Barcelona', country: 'Spain'},
  {season: '2015-2016', team: 'Real Madrid', country: 'Spain'},
  {season: '2016-2017', team: 'Real Madrid', country: 'Spain'},
];
var country = 'Spain'  // should return 9
// var country = 'Portugal'  // should return 1
// var country = 'Russia'  // should return 0

var winCount = 0;
for (var k = 0; k < winnerList.length; k++) {
  if (winnerList[k].country === country) {
    winCount ++;
  }
}
document.getElementById("objChallenge2").innerHTML = "<h3>" + country + " won " + winCount + " times." + "</h3>";

// --------------------------------------
// --Challenge 3-------------------------
// --------------------------------------
// Given an object containing two numbers and an arithmetic operator, return the appropriate math result.
// The four operators are "add", "subtract", "divide", "multiply".
var test1 = {a: 5, b:2, operator: "add"};  //7
// var test1 = {a: 5, b:2, operator: "subtract"}; //3
// var test1 = {a: 5, b:2, operator: "multiply"}; //10
// var test1 = {a: 5, b:2, operator: "divide"}; //2.5

var challenge3Answer = 0;
if (test1.operator === "add") {
  challenge3Answer = test1.a + test1.b;
} else if (test1.operator === "subtract") {
  challenge3Answer = test1.a - test1.b;
} else if (test1.operator === "multiply") {
  challenge3Answer = test1.a * test1.b;
}else if (test1.operator === "divide") {
  challenge3Answer = test1.a / test1.b;
}
document.getElementById("objChallenge3").innerHTML = "<h3>" + challenge3Answer + "</h3>";

// --------------------------------------
// --Challenge 4-------------------------
// --------------------------------------
// Let's implement the zipObject function that takes and array of names and an array of ages and smashes them into one object.
var names = ['fred', 'barney'];
var ages = [30,40];
//Output:  { 'fred': 30, 'barney': 40 }

var hulkSmash = {};
for (i = 0; i < names.length; i++) {
  hulkSmash[names[i]] = ages[i];
}

document.getElementById("objChallenge4").innerHTML = "<h3>Challenge 4</h3>" +
"<p>" + JSON.stringify(hulkSmash) + "</p>";

// --------------------------------------
// --Challenge 5-------------------------
// --------------------------------------
// The company Strive is looking for a new developer. Given a candidates minSalary and a jobs maxSalary determine if the company can affort the candidate. The Company will only accept candidates that have a minSalary that is at least 10% less than the jobs maxSalary. If the candidate matches display true otherwise display false.

