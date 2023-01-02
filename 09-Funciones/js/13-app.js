
const ListadoPlaylist = [];

const reproductor = {
    reproducir: cancion => console.log(`Reproduciendo canción ${cancion}... `),

    pausar: () => console.log('Canción pausada...'),

    borrar: (cancion) => console.log(`Canción ${cancion} borrada...`),

    creaPlaylist: (playlist) => {
        console.log(`Creando playlist ${playlist}...`);
        ListadoPlaylist.push(playlist);
    }, 

    reproducirPlaylist: (noPlaylist) => 
        console.log(`Estás escuchando la playlist ${ListadoPlaylist[noPlaylist]}...`)
}

reproductor.reproducir('25');
reproductor.pausar();
reproductor.borrar('25');
reproductor.creaPlaylist('Rock');
reproductor.creaPlaylist('pop');
reproductor.reproducirPlaylist(0);
reproductor.reproducirPlaylist(1);