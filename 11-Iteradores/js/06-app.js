
const pendinetes = ['comer', 'trabajar', 'dormir'];

//arreglo de objetos 
const carrito = [
    {nombre : 'monitor' , precio: 200},
    {nombre : 'celular' , precio: 500},
    {nombre : 'tablet' , precio: 300},
    {nombre : 'teclado' , precio: 100},
    {nombre : 'audifonos' , precio: 150},
    {nombre : 'tv' , precio: 200},
];

pendinetes.forEach( pendinete =>  console.log(pendinete));

carrito.forEach( articulo => console.log(` ${articulo.nombre} - ${articulo.precio}`) );

//map crea un nuevo arreglo 
const nuevoArreglo = carrito.map( articulo => ` ${articulo.nombre} - ${articulo.precio}` );

console.log(nuevoArreglo)
