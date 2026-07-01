// function scope
var secondNumber = 2
// block scope {}
// let y
// constant and the value does not change
const pi = 3.14

// function with no param
function logFunc() {
    console.log('Hello World!!!')
}

function sum(a, b) {
    return a + b
}

var y = sum(2, 5)

// arrow function
const logFuncArrow = () => {
    console.log('Hello World!!!')
}

// call the function to run it
logFunc()

// names should be camelCase - func with 1 param
function displayName(studentName) {
    console.log('your name is ', studentName)
}

displayName('John Doe')
displayName('Sarah Smith')

/*

number
string - array of char
boolean - true false
object {} - array []
null => value = NOTHING 
x = null
undefined - not defined



*/
// undefined
var test 
test = 56
console.log(test + 23)


// string
var strrr = '' // default
var y = 'hi'
// we do not wanna use this
var x = "hi"
// combination of strings and vars
// hello Sarah
var student = 'Sarah Smith'
console.log(student.replace('Smith', 'Doe'))
var stu = new String('Sarah Smith')
console.log('The string length is ', student.length)
console.log(student.concat(' , ', stu))
var z = `hi ${student}`
let str = '    Hellloooo          !    '
console.log(str.trim())

// if there is a student , then hasStudent is strue
var hasStudent = !!student 

// Arrays
var arr = [] // default
arr = [2, 'SARAH', false, [], {}]
arr.length
// 1. updating the whole array
arr = [2, 'SARAH', false, [2, 3], {}, 789]
// 2. updating the elements
arr[3] = [2, 3]
arr[5] = 789

arr.push('John')
console.log(arr)
arr.pop()
console.log(arr)

//forEach
arr.forEach(element => {
    console.log(element)
})

// object
var obj = {

} // default

obj = {
    // pairs of     keys    and    values
                    name:          'Sarah',
                    age:            20,
                    courses:        [],
}

// read
console.log(obj.age)

// add city = Toronto to the obj
// create a new pair
obj.city = 'Toronto'

// update the value
obj.name = 'Sarah Smith'

//delete
// 1. removig a value 
obj.courses = null

// 2. delete a whole row = pair
delete obj.courses

// Create a student object including your info with the following keys
// fName, lName, age, program, courses, college, hasGraduated
// add a display method that shows the following result
// [fName] [lName] is [age] years old and in [college] college.
// call the display function
// 1) add a new pair country and then log
// 2) Updating the value of age - double the age and then log
// delete
// 1) Clear the courses and then log

var student = {
    fName: 'Sarah',
    lName: 'Smith',
    age: 20,
    program: 'CPP',
    courses: ['OOP', 'WEB', 'DB'],
    college: 'Seneca',
    hasGraduated: false,
    display: function() {
        console.log(`${this.fName} ${this.lName} is ${this.age} years old and in ${this.college} college`)
    }
}

student.display()

// Update

// 1) add a new pair country
student.country = 'Canada'

// 2) Updating the value of age - double the age
student.age = 40
// console.log the whole obj
console.log(student)

// delete
// 1) Clear the courses
student.courses = null
// 2) Delete the whole pair of hasGraduated
delete student.hasGraduated
// console.log obj and see the result
console.log(student)

//destructure obj
// student.fName, student.lName, student.age
const { fName, lName, age, country, college } = student

console.log(fName)

