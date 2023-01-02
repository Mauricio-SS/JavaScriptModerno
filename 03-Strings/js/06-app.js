const producto = 'Monitor 20 pulgadas'; 

//repetir una cadena mpúltiples veces 
//En caso de asignar un valor decimal siempre lo va a redondear
const texto = ' en promocion'.repeat(3); 

console.log(texto);

console.log(`${producto} ${texto} !!!!`)


//split para dividir un string 
const actividad = 'Estoy aprendiendo Javascript';
actividad.split(' ');
console.log(actividad);

const usurario = 'Mau Sandoval'
console.log(usurario);

const arr = usurario.split(' ')
console.log(`${arr[0].charAt(0).concat(arr[1].charAt(0))}`)