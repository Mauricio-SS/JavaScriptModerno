const producto = 'Monitor 20 pulgadas'; 


//reemplazar elementos de una cadena de texto 
console.log(producto);
console.log(producto.replace('pulgadas', '"'));
console.log(producto.replace('monitor', 'monitor curvo'));

//slice, cortar cadenas 
// console.log(producto.slice(0 , 7));
// console.log(producto.slice(11));

//alternativa a slice 
//La diferencia con slice es que substring si puede cortar de adelante hacia atrás 
console.log(producto.substring(0 , 7));
console.log(producto.substring(11));
console.log(producto.substring(7 , 0));







