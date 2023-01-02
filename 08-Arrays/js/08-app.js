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

console.log(nombre);

//Destructuring con arreglos 
const numeros = [10,20,30,40,50];
//Destructuring con arreglos 
const [primero] = numeros;
const [ , , tercero] = numeros;

//Destructuring con spread operator 
const [ primer,segundo ,tercer , ...resto] = numeros;

console.log(primero);
console.log(tercero);
console.log(primer);
console.log(segundo);
console.log(tercer);
console.log(resto);

