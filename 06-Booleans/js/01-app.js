const boolean1 = true; 
const boolean2 = false; 
const boolean3 = 'true'; 

//no son iguales por el tipo de dato 
console.log(boolean1 == boolean3);

//no son iguales por el tipo de dato, ni con el comparador estricto
console.log(boolean1 === boolean3);

//otra forma de crear booleanos 
//Este lo crea como un objeto 
const boolean4 = new Boolean(true);
console.log(typeof boolean4);
