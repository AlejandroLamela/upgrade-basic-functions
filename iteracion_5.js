// !Iteración #5: Calcular promedio de strings

// Crea una función que reciba por parámetro un array y cuando es un valor number lo sume y de lo contrario cuente la longitud del string y lo sume. Puedes usar este array para probar tu función:
const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];


function averageWord(param) {
  let counter =0;
  for (const para of param) {
   if (typeof para== "string" ) {
    let converse= para.length;
    counter+=converse;
   } else{
    counter+=para;
   }
  }
  console.log(mixedElements.length);
  const result= counter/mixedElements.length;
  return console.log(result);
}

averageWord(mixedElements);



