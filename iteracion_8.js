//! **Iteration #8: Contador de repeticiones**

// Crea una función que nos devuelva el número de veces que se 
// repite cada una de las palabras que lo conforma.  Puedes usar este array para probar tu función:

const counterWords = [
    'code',
    'repeat',
    'eat',
    'sleep',
    'code',
    'enjoy',
    'sleep',
    'code',
    'enjoy',
    'upgrade',
    'code'
  ];


  function repeatCounter(array) {
    let counter = {};
    for (let i = 0; i < array.length; i++) {
        if (array[i] in counter) {
            counter[array[i]]++;
        } else{
            counter[array[i]]=1;
        }
      
    }
     return console.log(counter); 
  }

  repeatCounter(counterWords);
