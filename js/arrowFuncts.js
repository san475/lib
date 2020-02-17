/*
	Francisco Esteve
	My cheatsheet for Declarative Javascript

	--Basic Arrow Function
	18: multiple-param arrow function
	21: single arrow function

	--Array Iteration Methods
	35:	map
	41: reduce
	47:	filter
	53: forEach
	*/
'use strict'

/*
	Basic arrow function taking two params
	*/
var add = (a, b) => a + b
console.log("Running add arrow funct on 2, 5:\n" + add(2, 5) + "\n")

var square = i => i * i
console.log("Running square arrow funct on 5:\n" + square(5) + "\n")



/*
	Array iteration methods
	*/
var array = [1, 3, 5, 7, 9, 11]
/*
	Map anon function to array
	*/
var squaredArr = array.map(i => Math.pow(i, 2))
console.log("Printing array after mapping a square funct:\n" + squaredArr + "\n")

/*
	Reduce array using sum anon function
	*/
var summedArr = array.reduce(((a, b) => a + b), 0);
console.log("Printing array after reducing to sum:\n" + summedArr + "\n")

/*
	Filter multiples of three out, using anon function
	*/
var filteredArr = array.filter(i => i % 3 !== 0)
console.log("Printing array after filtering out multiples of three:\n" + filteredArr + "\n")

/*
	forEach print out every entry in array and "ayy"
	*/
array.forEach(i => console.log(i + ", ayy"))

