// !Iteración #4: Calcular el promedio
// Calcular un promedio es una tarea extremadamente común. Puedes usar este array para probar tu función:

const numbers = [12, 21, 38, 5, 45, 37, 6];
let counter=0;
function average(param) {
  for (const para of param) {
    counter+=para;
  }
  
   console.log(counter/numbers.length);;
}

average(numbers);
