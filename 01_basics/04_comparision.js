// console.log(2 > 1); // true
// console.log(2 < 1); // false
// console.log(2 == 1); // false
// console.log(2 >= 1); // true
// console.log(2 <= 1); // false
// console.log(2 == 1); // false
 
// Comparing Same data type is pretty easy. It's predictable.

// console.log("2" > 1); // true
// console.log("02" > 1); // true
// console.log("a02" > 1); // false
// console.log("02" == 1); // false
// Comparing different data type is not predictable.

// console.log(null > 0); // false
// console.log(null < 0); // false
// console.log(null == 0); // false
// console.log(null >= 0); //true
// console.log(null <= 0); //true

// >, <, == operators doesn't covert the data type but >=, <= converts the null to 0 and then do the conparison


// console.log(undefined > 0); // false
// console.log(undefined == 0); // false
// console.log(undefined >= 0); // false

// console.log(null === 0); //false
// console.log(0 === 0); //true
// console.log("0" === 0); //false
// === doesn't convert the data type. It's a strict comparision operator.


// SUMMERY

// The problem with comparing two different types of data type is that it doesn't return predictable value at all the time. So must avoid comparing two different type of data type instead you should always compare same type of data. 
// Infact typescript doesn't allow you to compare different data types. 