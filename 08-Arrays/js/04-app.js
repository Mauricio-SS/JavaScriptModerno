const meses = new Array('enero' , 'febrero', 'marzo', 'abril', 'mayo', 'junio');

//se pueden editar los valores 
meses[0] = 'priemer mes';

meses[7] = 'ultimo mes';

//puedes crear indices no consecutivos 
meses[10] = 'ultimo mes';

console.table(meses);