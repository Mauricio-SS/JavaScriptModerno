const producto = {
    //llave  : valor 
    nombre : 'monitor',
    precio : 300, 
    disponible : true,
}

console.log(producto.nombre);

//asignar el valor de un objeto a una variabla 
// const nombre = producto.nombre

//asignar el valor de un objeto a una variable mediante destructiring 
const {nombre} = producto 
const {precio , disponible} = producto 

console.log(nombre);
console.log(precio);
