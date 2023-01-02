const producto = {
    //llave  : valor 
    nombre : 'monitor',
    precio : 300, 
    disponible : true
}

console.log(producto);

//notación de punto 
console.log(producto.nombre);

//notacion de corchete 
console.log(producto['nombre']);

if(producto.disponible)
    console.log(`${producto.nombre} cuesta $${producto.precio}`);
    