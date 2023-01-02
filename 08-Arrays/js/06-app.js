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

//forma declarativa , no modifica la variable 
let resultado = [...carrito, producto];

resultado = [...resultado , producto2];

//agregar valores en el primer índice 
resultado = [producto3 , ...resultado];

console.table(resultado)