
let total = 0; 

function agregarCarrito(precio){
    
    return total += precio;
}

function impuestoCarrito(precioTotal){
    
    return precioTotal * 1.16;
}

total = agregarCarrito(400);
total = agregarCarrito(100);
total = agregarCarrito(500);
let totalCarrtio = impuestoCarrito(total);

console.log(total);
console.log(`El costo de tu carrito es $${totalCarrtio}`);