const producto = {
    //llave  : valor 
    nombre : 'monitor',
    precio : 300, 
    disponible : true,
    info : {
        peso : '800 gr',
        medida : '1800 mm * 800 mm',
        fabricacion : {
            pais : 'china'
        }
    }

}

//Destructuring de objetos anidados
const {nombre} = producto;

const { info : { fabricacion : { pais } }} = producto;

console.log(pais);