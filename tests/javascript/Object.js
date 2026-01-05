const { stat } = require("fs")

let obj1 = {}
let obj2 = new Object()
console.log("obj1 type: " + typeof obj1)
console.log("obj2 instanceof Object: " + (obj2 instanceof Object))
console.log("obj2 constructor: " + obj2.constructor)
console.log("obj2 toString: " + obj2.toString())

let obj3 = { name: "SK", id: 1348, status: true }
console.log("obj3 name: " + obj3.name)
console.log("obj3 id: " + obj3["id"])

obj3.status = false
console.log("obj3 status after update: " + obj3.status)
obj3["role"] = "TL"
console.log("obj3 role after add: " + obj3.role)

delete obj3.id
console.log("obj3 after delete id: " + JSON.stringify(obj3))