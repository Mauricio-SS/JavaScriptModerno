const producto = 'Monitor 20 pulgadas'; 
const precio = '20 USD'; 

//concatenar cadenas 

console.log(producto.concat( precio));
console.log(producto.concat( 'En descuento'));

console.log(producto + ' En descuento' + precio);

//template strings 
console.log(`El producto ${producto} tiene un precio de ${precio}`)