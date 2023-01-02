const producto = {
    //llave  : valor 
    nombre : 'monitor',
    precio : 300, 
    disponible : true,
    info : {
        peso : '800 gr',
        medida : '1800 mm * 800 mm'
    },
    fabricacion : {
        pais : 'china'
    }
}

//acceder a un objeto dentro de otro objeto 
console.log(producto.info.peso);

console.log(producto.fabricacion.pais);