// !Iteración #6: Valores únicos

// Crea una función que reciba por parámetro un array y compruebe si existen elementos duplicados, en caso que existan 
// los elimina para retornar un array sin los elementos duplicados. Puedes usar este array para probar tu función:

const duplicates = [
    'sushi',
    'pizza',
    'burger',
    'potatoe',
    'pasta',
    'ice-cream',
    'pizza',
    'chicken',
    'onion rings',
    'pasta',
    'soda'
  ];

  const without_duplicate=[];
  function removeDuplicates(param) {
    for (let index = 0; index < param.length; index++) {
        
        if (without_duplicate.includes(param[index])) {
    console.log(`Se repite ${param[index]}`);
    
  } else {
    without_duplicate.push(param[index]);
    
    
  }
  
    }
  
  }

  removeDuplicates(duplicates);
  console.log(without_duplicate);
  console.log(duplicates);