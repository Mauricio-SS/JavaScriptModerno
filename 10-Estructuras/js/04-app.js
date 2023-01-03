//operador mayor que , menor que 

const dinero = 100; 
const totalPagar = 200; 
const tarjeta = true;

if(dinero >= totalPagar){
    
    console.log('puedes pagar');
}else if(tarjeta){

    console.log('puedes pagar con tarjeta');

}
else{
    console.log('fondos insuficientes');
}