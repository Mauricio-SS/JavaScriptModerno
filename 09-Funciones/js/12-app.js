//arreglo de objetos 
const carrito = [
    {nombre : 'monitor' , precio: 200},
    {nombre : 'celular' , precio: 500},
    {nombre : 'tablet' , precio: 300},
    {nombre : 'teclado' , precio: 100},
    {nombre : 'audifonos' , precio: 150},
    {nombre : 'tv' , precio: 200},
];

//recorrer arreglos con for each 
const arreglo = carrito.map( producto => `El producto: ${producto.nombre} tiene un predcio de ${producto.precio}`);


console.log(arreglo);


console.log('espacio');

// //map crea un nuevo arreglo
const arreglo2 = carrito.forEach( producto => console.log(`El producto: ${producto.nombre} tiene un predcio de ${producto.precio}`));

