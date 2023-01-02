const producto = {
    //llave  : valor 
    nombre : 'monitor',
    precio : 300, 
    disponible : true,
}

const medidas =  {
    peso : '800 gr',
    medida : '1800 mm * 800 mm',
}

console.log(producto);
console.log(medidas);

//unir dos objetos en un objeto nuevo
const resultado = Object.assign( producto , medidas );

//unir dos objetos con spread operator o rest operator en uno nuevo
const resultado2 = {...producto , ...medidas};

console.log(resultado);
console.log(resultado2);
