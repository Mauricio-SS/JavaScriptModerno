const producto = {
    //llave  : valor 
    nombre : 'monitor',
    precio : 300, 
    disponible : true,
}

//agregar valores al objeto
producto.imagen =  'img.jpg'

//eliminar valores de un objeto 
delete producto.disponible;


console.log(producto);
