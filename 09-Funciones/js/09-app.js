
const ListadoPlaylist = [];

const reproductor = {
    reproducir: function(cancion){
        console.log(`Reproduciendo canción ${cancion}... `);
    },
    pausar: function(){
        console.log(('Canción pausada...'));
    },
    borrar: function(cancion){
        console.log(`Canción ${cancion} borrada...`);
    },
    creaPlaylist: function(playlist){
        console.log(`Creando playlist ${playlist}...`);
        ListadoPlaylist.push(playlist);
    }, 
    reproducirPlaylist: function(noPlaylist){
        console.log(`Estás escuchando la playlist ${ListadoPlaylist[noPlaylist]}...`);
    }
}

reproductor.reproducir('25');
reproductor.pausar();
reproductor.borrar('25');
reproductor.creaPlaylist('Rock');
reproductor.creaPlaylist('pop');
reproductor.reproducirPlaylist(0);
reproductor.reproducirPlaylist(1);