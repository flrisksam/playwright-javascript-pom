let fname = "Sampath kumar"
let lname = new String("Mohan")
let value

console.log("First Name: " + fname + " Type: " + typeof fname)
console.log("Last Name: " + lname + " Type: " + typeof lname)

//Size and position related methods. Index starts from 0
console.log("Lenght: "+fname.length)                                    //number of characters
console.log("Char at index 3: " + fname.charAt(3))                      //character at index 3
console.log("First Index of 'a': " + fname.indexOf('a'))                      //first occurrence
console.log("Last Index of 'a': " + fname.lastIndexOf('a'))             //last occurrence
console.log("Search for 'kumar' in fname: " + fname.search('kumar'))    //index of match or -1. indexOf starting letter.
console.log("Substring (1,4): " + fname.substring(1, 4))                //index 1 to 4
console.log("Slice (1,4): " + fname.slice(1,4))                         //index 1 to 4 ???

//Case Conversion methods
console.log("To Upper Case: " + fname.toUpperCase())                    //convert to upper case
console.log("To Lower Case: " + fname.toLowerCase())                    //convert to lower case

//Type Conversion methods
let price = Number(value)                                               //convert String to Number
console.log("To Number: " + price + " is " + typeof price)                                  
value = parseInt("200")                                                 //convert String to Int
console.log("To Int: " + value + " is " + typeof value)                
console.log("To Float: " + parseFloat("20.55"))                         //convert String to Float
console.log("To Fixed (2): " + (20.5567).toFixed(2))                    //convert Float to String with 2 decimal places

//Locale case conversion methods
console.log("String Locale Upper Case: " + fname.toLocaleUpperCase())   //locale upper case ???
console.log("String Locale Lower Case: " + fname.toLocaleLowerCase())   //locale lower case ???

//Check methods
console.log("Includes 'kumar': " + fname.includes('kumar'))             //true/false
console.log("Starts with 'Sam': " + fname.startsWith('Sam'))            //true/false
console.log("Ends with 'Mohan': " + lname.endsWith('Mohan'))            //true/false

//Comparison methods
console.log("Are fname and lname equal? " + (fname == lname))           //true
console.log("Are fname and lname strictly equal? " + (fname === lname)) //false ???
console.log("Is fname a String? " + (typeof fname === 'string'))        //true
console.log("Is lname a String Object? " + (lname instanceof String))   //true
console.log("Is fname empty? " + (fname.length === 0))                  //false
console.log("Locale Compare: " + fname.localeCompare('Sampath kumar'))  //0 if equal ???

//String manipulation methods
console.log("To String: " + lname.toString() + " "+ typeof lname)                   //string representation of lname object
console.log("Trimmed String: " + "   Hello World   ".trim())                        //removes leading and trailing spaces
console.log("Replace 'Sampath' with 'Priya': " + fname.replace('Sampath', 'Priya')) //string replace if found
console.log("Concatenate fname and lname: " + fname.concat(' ', lname))             //string concatenation
console.log("Repeat fname 3 times: " + fname.repeat(3))                             //repeats string 3 times
console.log("Pad Start fname to length 20 with '*': " + fname.padStart(20, '*'))    //pads start
console.log("Pad End fname to length 20 with '*': " + fname.padEnd(20, '*'))        //pads end

//Extraction methods
console.log("Split by ' ': " + fname.split(' '))                                    //returns array of substrings
console.log("Split", fname.split(' ')[1])                                           //Second word from firstname using split
console.log("Match 'a' in fname: " + fname.match(/a/g))                             //array of matches. RegEx
console.log("String from Array: " + Array.from(['Hello', 'World']).join(' '))       //creates string from array

//String Iterators
console.log("String Iterator for fname:")                                   //iterator for string
for (const char of fname) {
    console.log(char)
}

//Character code methods
console.log("Character Code at index 2 of fname: " + fname.charCodeAt(2))   //character code at index 2
console.log("From Char Code 65,66,67: " + String.fromCharCode(65,66,67))    //ABC

//Template Literals and Escape Sequences
let message = 'Final \tamount is \'1000\' \nThank you!'
let newMessage = `Final amount is 
'1000' 
Thank you!`
console.log("Template Literal: " + `Original: ${message} Backstage ${newMessage}`)  //template literal

//Other useful methods
console.log("Unicode Normalization of fname: " + fname.normalize())         //normalized string
console.log("Raw String: " + String.raw`C:\Development\profile\name`)       //C:\Development\profile\name
console.log("Value of lname using valueOf(): " + lname.valueOf())           //primitive value of lname