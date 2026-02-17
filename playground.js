console.log('javascript program ready')
//traditional function in java
function add(a,b)
{
    return a+b
}
console.log(add(39,38))
//arrow function(modern function definition in js)
const addArrow=(a,b)=>a+b
//variable_name(params)=>definition
console.log('addArrows():',addArrow(5,3))
console.log('addArrows():',addArrow)
//create an arrow function to get the square of given parameter
function square(a)
{
    return a*a
}
console.log(square(4))
const squareArrow=(a)=>a*a
console.log('squareArrows():',squareArrow(3))
console.log('squareArrows():',squareArrow)
//function with formatted string
const greeting=(name)=>{
    return`Hello, ${name}`
}
console.log(greeting('Taru'))
//Arrow function with array
const numbers=[1,2,3,4]
const doubled = numbers.map(n=>n*2)
//in map function,we pass arrow function
//here n will take each element one by one in each iteration
console.log(doubled)//react heavily uses map()
//Array function+condition
const checking=age=>age>=18?'adult':'minor'
console.log(checking (19))
//destructing