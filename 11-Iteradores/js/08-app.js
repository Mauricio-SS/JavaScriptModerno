const auto = {
    marca: 'Camaro',
    modelo: 1985,
    motor: 6.0
}
//itera sobre un objeto 
for( let prop in auto){
    console.log(` ${auto[prop]}`);
}

console.log('');
console.log('');
console.log('');

for(let [llave , valor] of  Object.entries(auto)){

    console.log(` ${llave} - ${valor}`);
}