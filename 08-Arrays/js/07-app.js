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

const producto4 = {
    nombre : 'teclado', 
    precio : 1500
}


//forma imperativa 
carrito.push(producto); 
carrito.push(producto2); 

//agregar un elemento al principio de un arreglo 
//forma imperativa
carrito.unshift(producto3);

console.table(carrito);


//eliminar último elemento del arreglo 
// carrito.pop();

console.table(carrito)

//eliminar último elemento del arreglo 
// carrito.pop();

console.table(carrito)

//eliminar el primer valor del arreglo 
carrito.shift();
console.table(carrito)

const carrito1 = [];
carrito1.push(producto); 
carrito1.push(producto2); 
carrito1.push(producto3); 
carrito1.push(producto4); 

//eliminar N valor de un arreglo 
carrito1.splice(1,1);
console.table(carrito1);
