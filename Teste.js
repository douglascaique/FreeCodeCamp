
// a = false
// b = true
// c = false
// d = true
// g = false
// h = true
// k = false
// l = true
// m = false



// if (a || b & c || d){
//     console.log('1')
// } else {
//         if (g || h) {
//        console.log('2')
//         }
// }

// if (k && !l){
//  console.log('3')
// } else {
//     if(!m) {
//     console.log('4')
// } else {
//     console.log('5')
// }
//     console.log('6')
// }

// a = 5
// b = 7
// c = 3
// d = 9

// let result1 = (a != 3 || b < 10 || c == 5);
// let result2 = (d < 8 && c == 3 || a >= 10);
// let result3 = (a == 3 || b > 10 || d == 8);
// let result4 = (c == 5 || d <= 7) && (b >= 5 && b != 9) || (!(a < 5));



// console.log(result1)
// console.log(result2)
// console.log(result3)
// console.log(result4)



// let x = 0
// let y = 0
// let z = 0

// x = 3
// y = 4

// z = x + y * (x - y)

// console.log(z)


// let pq = (2**3) + 5
// console.log(pq)

function tipoDeTriangulo(lado1, lado2, lado3) {
    if (lado1 === lado2 && lado1 === lado3) {
        return "Equilátero";
    } else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
        return "Isósceles";
    } else {
        return "Escaleno";
    }
}

// Testando o algoritmo
console.log(tipoDeTriangulo(3, 3, 3));
console.log(tipoDeTriangulo(3, 3, 2));
console.log(tipoDeTriangulo(3, 4, 5));