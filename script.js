// iife 
// let fullName = 'Son Do';

// (function() {
    
// })()

// iife'private'

// let i = 0;

// (function myFunc() {
//     i++
//     console.log('NOW')

//     if (i < 10)
//         myFunc()
// }) ()

// tao iife
// !(function() {
//     let fullName = 'Son Do'
//     console.log(fullName)
// })()

// VD
// const app = (function() {
//     // Private
//     const cars = []
    
//     return {
//         get(index) {
//             return cars[index]
//         },
//         add(car) {
//             cars.push(car)
//         },
//         edit(index, car) {
//             cars[index] = car
//         },
//         denete(index) {
//             cars.splice(index, 1)
//         }
//     }
// }) ()