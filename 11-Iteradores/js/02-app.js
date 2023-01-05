
// for( let i = 0; i <= 10; i++){

//     if( i == 5){
//         console.log(`CINCO`);
//         continue;
      
//     }
//     console.log(`Numero: ${i}`)

// }

const carrito = [
    {nombre : 'monitor' , precio: 200},
    {nombre : 'celular' , precio: 500},
    {nombre : 'tablet' , precio: 300 , descuento : true},
    {nombre : 'teclado' , precio: 100},
    {nombre : 'audifonos' , precio: 150},
    {nombre : 'tv' , precio: 200},
];

for (let i = 0; i < carrito.length; i++){

    if(carrito[i].descuento){
        console.log(`${carrito[i].nombre} - $${carrito[i].precio} - TIENE DESCUENTO`);
        continue;

    }
    console.log(`${carrito[i].nombre} - $${carrito[i].precio}`);
}