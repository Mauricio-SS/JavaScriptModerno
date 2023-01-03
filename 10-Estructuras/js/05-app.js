//switch case 
const metodoPago = 'tarjeta';

let pagar = metodo => console.log(`pagaste con ${metodo}`)


switch(metodoPago){
    case 'efectivo': 

        pagar(metodoPago);
        break;
    case 'tarjeta':

        pagar(metodoPago);
        break;

    default: 
        console.log('Método de pago no soportado');
}
