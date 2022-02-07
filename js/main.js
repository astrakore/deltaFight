// Funciones

// ---------------------------------------- NUEVO JUEGO ---------------------------------------- 

const cleanGame = () => {
    jugador1 = "";
    jugador2 = "";
    ganador = "";
}

// ---------------------------------------- CAMBIO DE PANTALLA ---------------------------------------- 

const cambiaPantalla = (cambio) => {
    let pantallaDeseada ="screen" + cambio;

    let arrayPantallas = ["screen1","screen2","screen3","screen4"];

    arrayPantallas = arrayPantallas.filter(valor => !pantallaDeseada.includes(valor));

    document.getElementById(pantallaDeseada).style.display = "block";

    for (let pantalla of arrayPantallas) {
        document.getElementById(pantalla).style.display = "none";
    }
}

// ---------------------------------------- SELECCIONAR LUCHADOR ---------------------------------------- 

const selectFighter = (nLuchador) => {
    
    if(jugador1 == ""){
        jugador1 = allFighters[nLuchador];
        let luchadorPrimero = document.getElementById(nLuchador);
        luchadorPrimero.onclick = "";
        luchadorPrimero.classList.add("fighterSelected" + (nLuchador));
    
        
    } else if (jugador2 == ""){
        jugador2 = allFighters[nLuchador];
        let luchadorSegundo = document.getElementById(nLuchador);
        luchadorSegundo.onclick = "";
        luchadorSegundo.classList.add("fighterSelected" + (nLuchador));

        setTimeout(()=>{
            cambiaPantalla(3);
        },2500);
    }
}

// ---------------------------------------- MOSTRAR PANTALLA DE JUEGO ---------------------------------------- 

const displayGame = () => {

    displayJugador1.innerHTML = `<img class="foto" src="img/plyr1${jugador1.nombre}.png" alt="primer_luchador"/>`;
    statsJugador1.innerHTML = `<div>${jugador1.nombre} ${jugador1.vida}</div>`;
    
    displayJugador2.innerHTML = `<img class="foto" src="img/plyr2${jugador2.nombre}.png" alt="segundo_luchador"/>`;
    statsJugador2.innerHTML = `<div>${jugador2.nombre} ${jugador2.vida}</div>`;
                                           
}

const pegar = () => {

    if ((jugador1.vida <= 0) || (jugador2.vida > 0)) {
        ganador = jugador2;

    } else  {
        ganador = jugador1;
    }

    displayJugador1.innerHTML = `<img class="foto" src="img/plyr1${jugador1.nombre}Hit.gif" alt="primer_luchador_pegando"/>`;
    displayJugador1.onclick = "";
    displayJugador1.classList.add("plyr1Hit");
    setTimeout(() => {
        displayJugador1.classList.remove("plyr1Hit");
    }, 1000);
    

    displayJugador2.innerHTML = `<img class="foto" src="img/plyr2${jugador2.nombre}Hit.gif" alt="segundo_luchador_pegando"/>`;
    

    jugador1.pegar();

    jugador1.cancelarGolpe();

    jugador2.pegar();

    jugador2.cancelarGolpe();


}

let displayJugador1 = document.getElementById("pictureFighter1");
let displayJugador2 = document.getElementById("pictureFighter2");
let statsJugador1 = document.getElementById("stats1");
let statsJugador2 = document.getElementById("stats2");
let winner = document.getElementById("winner");

// let screen4 = document.getElementById("screen4");

// document.body.addEventListener("keydown", (ev) => {
            
//     if(screen4.style.display == "block"){
//         console.log("ataque");
//     }

// });

// Algoritmo