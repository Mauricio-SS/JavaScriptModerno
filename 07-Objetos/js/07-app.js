const producto = {
    //llave  : valor 
    nombre : 'monitor',
    precio : 300, 
    disponible : true,
}

//Los objetos aunque sean declarados como constantes pueden modificarse
//los valores de un objeto se pueden reescribir
producto.disponible = false

delete producto.precio;

console.log(producto.disponible);