"use strict"

const producto = {
    //llave  : valor 
    nombre : 'monitor',
    precio : 300, 
    disponible : true,
}

//meotodos para objetos 
//freeze sirve para eliminar las propiedades de adición, delete y sobrescritura en objetos 
Object.freeze(producto);

// producto.imagen = 'img.jpg'; 
// producto.disponible = false; 

//Saber si un objeto está congelado 
console.log(producto);
console.log(Object.isFrozen(producto));

