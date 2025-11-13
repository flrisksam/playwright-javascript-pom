//* Give char with count, ignore space and special char */
const getCharCount = (inputText) => {
let fullName = inputText
let charCount = {}
console.log("Obj", charCount);
for(let char of fullName) {
    console.log("Before: "+char+" charCount[char]: "+charCount[char])
    
    //skip spaces
    if(char === " ") {
        continue;
    }

    //skip special characters and digits.
    if(!((char >= 'A' && char <= 'Z') || (char >= 'a' && char <= 'z'))) {
        continue;
    }

    charCount[char] = charCount[char] ? charCount[char] + 1 : 1 
    console.log("After: "+char+" charCount[char]: "+charCount[char])
    //Ternary operator to check if char exists in object or not. If exists increment by 1 else initialize to 1. (Similar to Python's dict.get(key, default)).
    //If we use only charCount[char]++, it will give NaN for first occurrence as undefined + 1 = NaN.
}

console.log(charCount);
//Output: { S: 1, a: 3, m: 2, p: 1, t: 1, h: 2, k: 1, u: 1, r: 1, o: 1, n: 1 }
}

getWordCount = (inputText) => {
    let words = inputText.split(" ");
    let wordCount = {};
    
getCharCount("Sampath kumar 1 & Mohan");

const reverseString = (inputStr) => {
    let reversedStr = "";
    for(let char of inputStr) {
        console.log("Current char: "+char+" Reversed so far: "+reversedStr);
        reversedStr = char + reversedStr; //Prepend current char to the reversed string.
        console.log("After Prepend Reversed so far: "+reversedStr);
    }
    return reversedStr;
}

console.log(reverseString("Sampath kumar")); //ramuk htapmaS
}
