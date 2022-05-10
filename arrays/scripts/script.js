// console.log('Hello World');
// let number = 9
// let string = 'string'

// // arrays 

// console.log(number)

// let array = [3, 5, 67, 8, 90, 43, 12, 3, 4]

// // console.log(array.length)
// //     // console.log(array[8])

// // for (let i = 0; i < array.length; i += 2) {
// //     console.log('showing array in position: ' + i);
// //     console.log(array[i]);
// // }

// // how to fill an array with random values

// let empty_array = []
// let number_of_items = 50
// for (let i = 0; i < number_of_items; i++) {
//     let random_value = Math.random() * 1000
//     empty_array.push(random_value)
// }

// console.log(empty_array)


// // let's see what are objects

// let object = {
//     x: 100,
//     y: 200,
//     width: 100,
//     height: 300
// }

// let div = document.createElement('div')
// div.style.position = 'fixed'
// div.style.width = object.width + 'px'
// div.style.top = object.height + 'px'
// div.style.top = object.y + 'px'
// div.style.left = object.x + 'px'
// div.style.backgroundColor = '#f33'

// document.body.appendChild(div)

// console.log(object)


console.log('have a nice day')

let number = 9
let string = 'string'

// console.log(number)      //wert der variable ausgeben
// console.log(string)

//arrays        gute referenz: https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Array
let array = [3, 13, 14, 26, 38, 66, 79, 113] //eckige Klammer: option 6

array.push(0) //zahlen einem array hinzufügen
array.push(1)
array.push(7)

console.log(array) //show complete array
console.log(array[1]) //zweites Element aus array ausgeben
console.log(array.length) //zählt wie viele elemente im array sind

//for loop
for (let i = 0; i < 5; i += 1) //fünf mal wiederholen

{
    console.log('for loop in position: ')
    console.log(i)
    console.log('show array in position')
    console.log(array[i])
} //dieser block wird 5 mal wiederholt

//for (let i = 0; i < array.length; i += 1)
// {console.log('showing array in position: ' + i)
//console.log(array[i] )}

//how to fill an array with random values
let emtpy_array = []
let number_of_items = 50

for (let i = 0; i < number_of_items; i++) { //i++: plus 1
    let random_value = Math.random() * 1000 // default: Zufallszahl zwischen 0 und 1; sonst multiplizieren
    emtpy_array.push(random_value)
}

console.log(emtpy_array)

//objects; JSON
let object = { x: 100, y: 200, widht: 100, height: 300 } //object braucht geschweifte Klammern

let div = document.createElement('div')
div.style.position = 'fixed'
div.style.width = object.widht + 'px'
div.style.height = object.height + 'px'
div.style.top = object.y + 'px'
div.style.left = object.x + 'px'
div.style.backgroundColor = '#f33'

document.body.appendChild(div)

console.log(object)