//object literal 
const producto1 = {
    //llave  : valor 
    nombre : 'monitor',
    precio : 300, 
    disponible : true,
}

//keys: retorna un arreglo con los keys del objeto 
console.log(Object.keys(producto1));
//values: retorna los valores del objeto 
console.log(Object.values(producto1));
//entries: retorna el objeto completo en pares, llave: valor
console.log(Object.entries(producto1));
