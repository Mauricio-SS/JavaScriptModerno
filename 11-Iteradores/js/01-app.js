
// for( let i = 0; i <= 200; i++){

//     console.log(`Numero: ${i}`)

// }

// for( let i = 1; i <= 10; i++){
//     if( i % 2 === 0){
//         console.log(`Numero: ${i} es par`);
//     }else{
//         console.log(`Numero: ${i} es impar`);

//     }
// }

const carrito = [
    {nombre : 'monitor' , precio: 200},
    {nombre : 'celular' , precio: 500},
    {nombre : 'tablet' , precio: 300},
    {nombre : 'teclado' , precio: 100},
    {nombre : 'audifonos' , precio: 150},
    {nombre : 'tv' , precio: 200},
];

for (let i = 0; i < carrito.length; i++){
    console.log(`agregaste al carrito ${carrito[i].nombre} con un precio de $${carrito[i].precio}`);
}