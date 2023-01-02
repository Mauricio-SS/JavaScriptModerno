const nombre = 'Mau';
const precio = 20;

const producto = {
    //llave  : valor 
    nombre : 'monitor',
    precio : 300, 
    disponible : true,
    mostrarInfo : function(){

        //la palabra this busca los valores que están dentro del mismo 
        //hace referencia al objeto en si mismo 
        console.log(`El producto ${this.nombre} tiene un precio de ${this.precio}`)
    }
}

const producto2 = {
    //llave  : valor 
    nombre : 'Xiaomi 12',
    precio : 13000, 
    disponible : true,
    mostrarInfo : function(){

        //la palabra this busca los valores que están dentro del mismo 
        //hace referencia al objeto en si mismo 
        console.log(`El producto ${this.nombre} tiene un precio de ${this.precio}`)
    }
}

producto.mostrarInfo();
producto2.mostrarInfo();

