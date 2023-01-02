const producto = '            Monitor 20 pulgadas         '; 

//eliminar espacios en blanco al inicio 
console.log(producto.trimStart());
console.log(producto.length);

//eliminar espacios al final 
console.log(producto.trimEnd());
console.log(producto.length);

//quitar espacios al principio y al final, chaining 
console.log(producto.trimStart());
console.log(producto.length);