// !**Iteración #7: Buscador de nombres**

// Crea una función que reciba por parámetro un array y el valor que desea comprobar que existe dentro de dicho array - comprueba si existe el elemento, en caso que existan nos devuelve la posición de dicho elemento y por la contra un false. Puedes usar
//  este array para probar tu función:

const nameFinder = [
    'Peter',
    'Steve',
    'Tony',
    'Natasha',
    'Clint',
    'Logan',
    'Xabier',
    'Bruce',
    'Peggy',
    'Jessica',
    'Marc'
  ];
  function finderName(array,name) {
   let exist=false ;
    for (let i = 0; i < array.length; i++) {
        if (array[i]===name) {
            console.log(i);
            exist=true;
           
        } 
       
    }
    if (exist===false){
console.log(false);
    }
  }

  finderName(nameFinder, "Pet");