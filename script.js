// 1.1
let myAlphabet = ["A", "B", "C", "D", "E", "F", "G"];
const myAlphabetLength = (array) => console.log(array.length);
myAlphabetLength(myAlphabet);

// 1.2
let planets = ["Mercury", "Venus", "Earth", "Mars", "Jupiter"];
planets.forEach(function (item, index) {
	console.log(item, [index]);
});

// 1.3
let myArr = [1, 2, "One", true];
myArr.forEach(function (item) {
	console.log(item);
});
