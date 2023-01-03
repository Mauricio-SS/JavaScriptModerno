
const usuario = false; 
const puedePagar = true; 

if(usuario && puedePagar){
    console.log('puedes comprar');
}else if (!usuario && !puedePagar){
    console.log('no puedes comprar');

}
else if(!usuario){
    console.log('Inicia sesion o crea una cuenta');

}else if(!puedePagar){
    console.log('Fondos insuficientes');

}