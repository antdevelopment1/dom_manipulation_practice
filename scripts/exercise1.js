// Exercises #1 Come up with at four ways to target the first paragraph inside the HTML page
var oneWay = document.getElementById('#first');  //Needs # to target id
console.log(oneWay);

var twoWay = document.getElementsByClassName('special')[0]; //Could add index after index value
console.log(twoWay);

var threeWay = document.getElementsByTagName('p');
console.log(threeWay);

var fourWay = document.querySelector('p');
console.log(fourWay);