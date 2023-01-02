//object literal 
const producto1 = {
    //llave  : valor 
    nombre : 'monitor',
    precio : 300, 
    disponible : true,
}

//object constuctor 
function producto (nombre, precio){
    this.nombre = nombre; 
    this.precio = precio; 
    this.disponible = true;
}

const producto2 = new producto('Xiaomi 12' , 13000);

console.log(producto2);

const producto3 = new producto('Xiaomi watch S1 active' , 3000);

console.log(producto3);

