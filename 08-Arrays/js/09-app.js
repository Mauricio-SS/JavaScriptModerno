//arreglo de objetos 
const carrito = [
    {nombre : 'monitor' , precio: 200},
    {nombre : 'celular' , precio: 500},
    {nombre : 'tablet' , precio: 300},
    {nombre : 'teclado' , precio: 100},
    {nombre : 'audifonos' , precio: 150},
    {nombre : 'tv' , precio: 200},
];


//recorrer con For loop 
for( let i = 0; i < carrito.length; i++){
    console.log(`El producto: ${carrito[i].nombre} tiene un predcio de ${carrito[i].precio}`);
}

console.log('espacio');

//recorrer arreglos con for each 
carrito.forEach(function(producto){
    console.log(`El producto: ${producto.nombre} tiene un predcio de ${producto.precio}`);

})