// !Iteración #2: Buscar la palabra más larga

// Completa la función que tomando un array de strings como argumento devuelva el más largo, en caso de que dos strings tenga la misma longitud deberá devolver el primero.
// Puedes usar este array para probar tu función:

const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];
const avenger_length=[];
function findLongestWord(param) {
    for (const para of param) {
        console.log(para.length);
        avenger_length.push(para.length);
    }
    if (condition) {
        
    }
    console.log(Math.max.apply(null,avenger_length));
}

findLongestWord(avengers);
console.log(avenger_length);

// const numbers =['Hulk', 'Thor', 'IronMan', 'Captain A.'];
// const numbers_length=[];



// for (const number of numbers) {
    
//     numbers_length.push(number.length);
// }
// console.log(numbers_length);
// console.log(Math.max.apply(null,numbers_length));