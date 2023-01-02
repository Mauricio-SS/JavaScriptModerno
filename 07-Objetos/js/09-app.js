"use strict"

const producto = {
    //llave  : valor 
    nombre : 'monitor',
    precio : 300, 
    disponible : true,
}

//meotodos para objetos 

//seal sirve para quitar las propiedades de insertar y eliminar
//deja las propiedades de edición de los valores
Object.seal(producto);

// producto.imagen = 'img.jpg'; 

//Se conservan las propiedades de sobre escritura
producto.disponible = false; 

//Saber si un objeto está sellado
console.log(producto);
console.log(Object.isSealed(producto));

