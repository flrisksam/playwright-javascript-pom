console.log("JavaScript Operators Tests")

//Arithmetic Operators
let a = 10
let b = 3
console.log("a + b = " + (a + b))           //Addition
console.log("a - b = " + (a - b))           //Subtraction
console.log("a * b = " + (a * b))           //Multiplication
console.log("a / b = " + (a / b))           //Division
console.log("a % b = " + (a % b))           //Modulus
console.log("a ** b = " + (a ** b))         //Exponentiation
console.log("++a = " + (++a))                //Pre-increment
console.log("b++ = " + (b++))                //Post-increment
console.log("--a = " + (--a))                //Pre-decrement
console.log("b-- = " + (b--))                //Post-decrement
console.log("a after increments/decrements: " + a)
console.log("b after increments/decrements: " + b)

//Assignment Operators
let c = 5
console.log("c = "+ c)                 //Assignment
c += 2                                 //Addition assignment
console.log("c += 2 -> c = " + c)
c -= 1                                 //Subtraction assignment
console.log("c -= 1 -> c = " + c)
c *= 3                                 //Multiplication assignment
console.log("c *= 3 -> c = " + c)
c /= 2                                 //Division assignment
console.log("c /= 2 -> c = " + c)

//Comparison Operators
let x = 15
let y = '15'
console.log("x == y: " + (x == y))           //Equal
console.log("x === y: " + (x === y))         //Strict Equal
console.log("x != y: " + (x != y))           //Not Equal
console.log("x !== y: " + (x !== y))         //Strict Not Equal
console.log("x > 10: " + (x > 10))           //Greater than
console.log("x < 20: " + (x < 20))           //Less than
console.log("x >= 15: " + (x >= 15))         //Greater than or equal to
console.log("x <= 15: " + (x <= 15))         //Less than or equal to

//Logical Operators
let p = true
let q = false
console.log("p && q: " + (p && q))           //Logical AND
console.log("p || q: " + (p || q))           //Logical OR
console.log("!p: " + (!p))                   //Logical NOT

//Ternary Operator
let age = 20
let eligibility = (age >= 18) ? "Eligible to vote" : "Not eligible to vote"
console.log("Age: " + age + " -> " + eligibility)

//Typeof Operator
console.log("Type of a: " + typeof a)                 //number
console.log("Type of fname: " + typeof "Sampath")     //string
console.log("Type of p: " + typeof p)                 //boolean
console.log("Type of obj: " + typeof {name: "John"})  //object

//Instanceof Operator
let date = new Date()
console.log("date instanceof Date: " + (date instanceof Date))         //true
console.log("date instanceof Object: " + (date instanceof Object))     //true
console.log("a instanceof Number: " + (a instanceof Number))           //false

//Delete Operator
let obj = {name: "Alice", age: 25}
console.log("Before delete, obj.age: " + obj.age)
delete obj.age
console.log("After delete, obj.age: " + obj.age)  //undefined

//Void Operator
function returnValue() {
    return 42
}
console.log("Return value: " + returnValue())          //42
console.log("Void return value: " + void returnValue()) //undefined

//Spread Operator
let arr1 = [1, 2, 3]
let arr2 = [4, 5, 6]
let combinedArr = [...arr1, ...arr2]
console.log("Combined Array: " + combinedArr)          //[1,2,3,4,5,6]

//Type Conversion Operators
let strNum = "100"
let numValue = Number(strNum)
console.log("String to Number: " + numValue + " Type: " + typeof numValue)
let boolValue = Boolean(1)
console.log("Number to Boolean: " + boolValue + " Type: " + typeof boolValue)

//Bitwise Operators
let m = 5      //0101
let n = 3      //0011
console.log("m & n: " + (m & n))     //AND -> 0001 = 1
console.log("m | n: " + (m | n))     //OR  -> 0111 = 7
console.log("m ^ n: " + (m ^ n))     //XOR -> 0110 = 6
console.log("~m: " + (~m))           //NOT -> 1010 = -6
console.log("m << 1: " + (m << 1))   //Left Shift -> 1010 = 10
console.log("m >> 1: " + (m >> 1))   //Right Shift -> 0010 = 2
console.log("m >>> 1: " + (m >>> 1)) //Zero-fill Right Shift -> 0010 = 2

//Nullish Coalescing Operator
let foo = null
let bar = foo ?? "default value"
console.log("bar: " + bar)   //default value

//Optional Chaining Operator
let user = {profile: {name: "Bob"}}
console.log("User Name: " + user?.profile?.name)        //Bob
console.log("User Age: " + user?.profile?.age ?? "N/A") //N/A

console.log("JavaScript Operators Tests Completed")