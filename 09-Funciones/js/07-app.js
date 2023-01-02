cargaApp();

function cargaApp(){
    console.log('Cargando app...'); 
    inciaApp();
}

function inciaApp(){
    console.log('app iniciada...');
    console.log('Autenticando usuario...');
    autenticaUsuario('Mau');
}

function autenticaUsuario(usuario){
    console.log(`Usuario autenticado!. Bienvenido ${usuario}`);
}
