//Primite data types in JavaScript
let employeName = "Sampath"
let age = 30
let isEmployed = true
let salary = null
let married

console.log("Name: " + employeName + " Type: " + typeof employeName)
console.log("Age: " + age)
console.log("Employed: " + isEmployed)
console.log("Salary: " + salary + " Type: " + typeof salary)
console.log("Married: " + married + " Type: " + typeof married)
married =  undefined
console.log("Married after undefined assignment: " + married + " Type: " + typeof married)
isEmployed = null
console.log("Employed after null assignment: " + isEmployed + " Type: " + typeof isEmployed)
isEmployed = "Sponsored"
console.log("Employed after string assignment: " + isEmployed + " Type: " + typeof isEmployed)

//Non-primitive data types in JavaScript
let studentName = {"FN": "Sam", "LN": "Mohan"}
console.log("Student Name Object: " + studentName + " Type: " + typeof studentName)

let student = {
    "FN": "Sam", "LN": "Mohan", "Age": 22, "Course": "Computer Science",
    "FN": "Pri", "LN": "Yuv", "Age": 20, "Course": "Information Technology"
}
console.log("Student Object: " + student + " Type: " + typeof student)

let courses = ["Computer Science", "Information Technology", "Electronics", "Mechanical"]
console.log("Courses Array: " + courses + " Type: " + typeof courses)

let mixedArray = ["Sampath", 30, true, null, undefined, {"FN": "Sam"}, ["Course1", "Course2"]]
console.log("Mixed Array: " + mixedArray + " Type: " + typeof mixedArray)
