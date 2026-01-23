console.log("Array Examples")

//Creating arrays
let arr1 = [10, 20, 30, 40, 50]
let arr2 = new Array(5, 15, 25, 35, 45)
let arr3 = Array.of(1, 2, 3, 4, 5)
console.log("Length of arr1: " + arr1.length)               //length of array

//Accessing elements
console.log("Element at index 2 of arr1: " + arr1[2])       //access element at index 2
console.log("Last element of arr3: " + arr3[arr3.length - 1]) //last element

//Modifying elements
arr1[1] = 25
console.log("Modified arr1: " + arr1)                       //modified array
arr2.push(55)
console.log("arr2 after push: " + arr2)                     //after push (Add element at end)
arr1.unshift(5)
console.log("arr1 after unshift: " + arr1)                  //after unshift (Add element at start)
arr3.pop()
console.log("arr3 after pop: " + arr3)                       //after pop (Remove last element)
arr2.shift()
console.log("arr2 after shift: " + arr2)                    //after shift (Remove first element)

//Array methods
console.log("Index of 30 in arr1: " + arr1.indexOf(30))     //indexOf
console.log("Does arr2 include 25? " + arr2.includes(25))   //includes
console.log("Joined arr3: " + arr3.join('-'))               //join
console.log("Sliced arr1 (1 to 4): " + arr1.slice(1, 4))    //slice (from index 1 to 4, excluding 4). returns new array.
console.log("Spliced arr2: " + arr2.splice(2, 2, 100, 200)) //splice (from index 2, remove 2 elements, add 100 and 200). returns removed elements.
console.log("Reversed arr3: " + arr3.reverse())             //reverse
console.log("Ascending Sorted arr1: " + arr1.sort((a, b) => a - b))   //sort (ascending order)   
console.log("Descending Sorted arr2: " + arr2.sort((a, b) => b - a))   //sort (descending order)                            
console.log("fill 0 from index 1 to 4: " + arr2.fill(0, 1, 4))  //fill (fill with 0 from index 1 to 4)

//Higher-order functions. Map, Filter, Reduce
console.log("Map: " + arr1.map(x => x * 2))                 //map (multiply each element by 2. returns new array.)

function fun(e) { return e + 2 }                            //function for map
mappedArr = arr1.map(fun)                                   //map using function
console.log("Actual Array " + arr1 + " Mapped arr1: " + mappedArr)

console.log("Filtered arr2: " + arr2.filter(x => x > 20) ) //filter (elements greater than 20. returns new array.)

let reducedValue = arr3.reduce((acc, val) => acc + val, 0)  //accumulator + current value. initial value = 0.
console.log("Reduced arr3 (sum of elements): " + reducedValue)


//Iteration methods
console.log("Iterating arr1:")
arr1.forEach((value, index) => {                            //forEach iteration. value and index as parameters 
    console.log("Index " + index + ": " + value)
})

console.log("Iterating arr2 using for...of: Returns values")
for (let value of arr2) {                                   //for...of iteration. value as parameter
    console.log(value)
}
console.log("Iterating arr3 using for...in: Returns indices")
for (let index in arr3) {                                   //for...in iteration. index as parameter
    console.log("Index " + index + ": " + arr3[index])
}


//Array from string
let str = "Hello"
let arrFromStr = Array.from(str)                            //Array from string. Each character becomes an element. //H,e,l,l,o
console.log("Array from string '" + str + "': " + arrFromStr)

//Array toString
console.log("arr2 toString(): " + arr2.toString())           //toString representation

//Array toLocaleString
console.log("arr3: " + arr3.toLocaleString())               //toLocaleString representation

//Array.isArray
console.log("Is arr1 an array? " + Array.isArray(arr1))     //true
console.log("Is str an array? " + Array.isArray(str))       //false

//Multidimensional Array
let multiArr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
console.log("Multidimensional Array: " + multiArr)
console.log("Element at [1][2]: " + multiArr[1][2])         //accessing element

//Flattening an array
let nestedArr = [1, [2, [3, 4]], 5]
let flatArr = nestedArr.flat(2)                             //flattening to depth 2
console.log("Flattened Array: " + flatArr)                  //flattened array

//Finding elements
let foundElement = arr1.find(x => x > 30)                   //find 1st element matching condition.
console.log("First element in arr1 greater than 30: " + foundElement) //find 1st element
let foundIndex = arr2.findIndex(x => x === 100)
console.log("Index of element 100 in arr2: " + foundIndex)  //findIndex of 1st element matching condition

//Array copyWithin
let copyArr = [10, 20, 30, 40, 50]
console.log("Original copyArr: " + copyArr)
copyArr.copyWithin(0, 3, 5)                                  //copy elements from index 3 to 5 to index 0
console.log("copyArr after copyWithin(0,3,5): " + copyArr)   //modified array

//Array flatMap
let flatMapArr = [1, 2, 3]
let resultArr = flatMapArr.flatMap(x => [x, x * 2])          //flatMap (for each element, return array of element and element*2)
console.log("Result of flatMap on flatMapArr: " + resultArr) //flatMap result

//Array iterator
let arrIterator = arr1.entries()                            //array iterator using entries(). //returns key/value pairs
console.log("Array Iterator for arr1:")
for (let entry of arrIterator) {
    console.log(entry)
}

//Array buffer and typed arrays
let buffer = new ArrayBuffer(16)                             //create buffer of 16 bytes
let int32View = new Int32Array(buffer)                       //create Int32 view
int32View[0] = 42
int32View[1] = 84
console.log("Int32 Array from buffer: " + int32View)         //typed array

//Array sorting with custom comparator
let unsortedArr = [5, 2, 9, 1, 5, 6]
console.log("Unsorted Array: " + unsortedArr)
unsortedArr.sort((a, b) => b - a)                            //sort in descending order
console.log("Sorted Array (descending): " + unsortedArr)     //sorted array

//Array includes with fromIndex
console.log("Does arr1 include 25 starting from index 2? " + arr1.includes(25, 2)) //includes with fromIndex
console.log("Does arr1 include 25 starting from index 3? " + arr1.includes(25, 3)) //includes with fromIndex

//Array iterator keys
let keysIterator = arr1.keys()                              //keys iterator. //returns keys (indices).
console.log("Array Keys Iterator for arr1:")
for (let key of keysIterator) {
    console.log(key)
}

//Array iterator values
let valuesIterator = arr2.values()                          //values iterator. //returns values.
console.log("Array Values Iterator for arr2:")
for (let value of valuesIterator) {
    console.log(value)
}

//Array iterator with entries
let entriesIter = arr2.entries()
console.log("Array Entries Iterator for arr2:")                  //entries iterator. //returns key/value pairs.
for (let entry of entriesIter) {
    console.log(entry)
}

//Array iterator with forEach
let forEachIterator = arr3.entries()
console.log("Array Iterator with forEach for arr3:")            //iterator with forEach. //returns key/value pairs.
forEachIterator.forEach(entry => {
    console.log(entry)
})

//Array iterator with keys and values
let keysIter = arr3.keys()
let valuesIter = arr3.values()
console.log("Array Keys and Values Iterator for arr3:")
for (let key of keysIter) {
    console.log("Key: " + key + ", Value: " + arr3[key])
}
for (let value of valuesIter) {
    console.log("Value: " + value)
}

//Array every
let allGreaterThan5 = arr1.every(x => x > 5)                //every (check if all elements match condition)
console.log("Are all elements in arr1 greater than 5? " + allGreaterThan5)

//Array some
let someGreaterThan40 = arr2.some(x => x > 40)              //some (check if some elements match condition)
console.log("Are some elements in arr2 greater than 40? " + someGreaterThan40) //some

//Array fill with single argument
let fillArr = [1, 2, 3, 4, 5]
console.log("Original fillArr: " + fillArr)
fillArr.fill(9)                                             //fill entire array with 9
console.log("fillArr after fill(9): " + fillArr)

//Array from with mapping function
let arrFromMap = Array.from([1, 2, 3], x => x * 3)          //Array from with mapping function (elements * 3)
console.log("Array from with mapping function (elements * 3): " + arrFromMap)

//Array length modification
let lengthArr = [1, 2, 3, 4, 5]
console.log("Original lengthArr: " + lengthArr)
lengthArr.length = 3                                        //modify length to 3
console.log("lengthArr after setting length to 3: " + lengthArr)

//Array concat with multiple arrays
let concatArr1 = [1, 2]
let concatArr2 = [3, 4]
let concatArr3 = [5, 6]
let combinedConcatArr = concatArr1.concat(concatArr2, concatArr3) //concat multiple arrays
console.log("Combined Array using concat: " + combinedConcatArr)

//Array of objects
let objArr = [{ name: "Alice" }, { name: "Bob" }, { name: "Charlie" }]
console.log("Array of Objects: " + JSON.stringify(objArr))      //array of objects
objArr.forEach(obj => console.log("Name: " + obj.name))         //iterating array of objects

//Array buffer slicing
let bufferSlice = new ArrayBuffer(8)
let uint8View = new Uint8Array(bufferSlice)
for (let i = 0; i < uint8View.length; i++) {
    uint8View[i] = i * 10
}
console.log("Original Uint8Array: " + uint8View)
let slicedBuffer = bufferSlice.slice(2, 6)
let slicedUint8View = new Uint8Array(slicedBuffer)
console.log("Sliced Uint8Array (from byte 2 to 6): " + slicedUint8View) //sliced typed array

//Array grouping (using reduce)
let groupArr = ['apple', 'banana', 'apricot', 'blueberry', 'cherry']
let grouped = groupArr.reduce((acc, fruit) => {
    let firstLetter = fruit.charAt(0)
    if (!acc[firstLetter]) {
        acc[firstLetter] = []
    }
    acc[firstLetter].push(fruit)
    return acc
}, {})
console.log("Grouped Array: " + JSON.stringify(grouped))        //grouped array

//Array flat with depth 1
let depthArr = [1, [2, 3], [4, [5, 6]]]
let flatDepthArr = depthArr.flat(1)
console.log("Array flattened to depth 1: " + flatDepthArr)     //flattened array

//Array copy using spread operator
let originalArr = [1, 2, 3, 4, 5]
let copiedArr = [...originalArr]
console.log("Original Array: " + originalArr)
console.log("Copied Array using spread operator: " + copiedArr) //copied array

//Array modification using splice to remove and add elements
let modArr = [10, 20, 30, 40, 50]
console.log("Original modArr: " + modArr)
let removedElements = modArr.splice(1, 2, 25, 35)
console.log("modArr after splice (removed 2 from index 1, added 25,35): " + modArr) //modified array
console.log("Removed elements: " + removedElements)            //removed elements from splice