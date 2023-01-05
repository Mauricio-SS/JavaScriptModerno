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

//es como un foreach en .net 
//itera sobre un arreglo 
for( let pendinete of pendinetes){
    console.log(pendinete);
}

for(let articulo of carrito){
    console.log(` ${articulo.nombre} - ${articulo.precio}`)
}

