const carrito = [];

//definir un producto 
const producto = {
    nombre : 'monitor', 
    precio : 500
}

const producto2 = {
    nombre : 'Xiaomi 12', 
    precio : 13000
}

const producto3 = {
    nombre : 'Xiaomi watch S1 Active', 
    precio : 13000
}

//forma imperativa 
carrito.push(producto); 
carrito.push(producto2); 

//agregar un elemento al principio de un arreglo 
//forma imperativa
carrito.unshift(producto3);

console.table(carrito)