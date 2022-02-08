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
    console.log(statsJugador1);
    
    displayJugador2.innerHTML = `<img class="foto" src="img/plyr2${jugador2.nombre}.png" alt="segundo_luchador"/>`;
    statsJugador2.innerHTML = `<div>${jugador2.nombre} ${jugador2.vida}</div>`;
    console.log(statsJugador2);
                                           
}

// ---------------------------------------- EL LUCHADOR PEGA ASÍ ---------------------------------------- 

const pegar = () => {

    if (jugador2) {

        let resultado2Golpe0 = jugador1.vida;

        while (jugador1.vida == resultado2Golpe0) {
            let resultado2Golpe1 = (jugador1.vida - jugador2.fuerza);
            jugador1.vida = resultado2Golpe1;
            console.log(jugador1.vida);
        }
        
        if (jugador1.vida <= 0) {
            ganador = jugador2;
            console.log((jugador2.nombre) + " HA GANADO!!!!!!!!!!!");
        }

    } else if (jugador1) {
        
        let resultado1Golpe0 = jugador1.vida;

        while (jugador2.vida == resultado1Golpe0) {
            let resultado1Golpe1 = (jugador2.vida - jugador1.fuerza);
            jugador2.vida = resultado1Golpe1;
            console.log(jugador2.vida);
        }
        
        if (jugador2.vida <= 0) {
            ganador = jugador1;
            console.log((jugador1.nombre) + " HA GANADO!!!!!!!!!!!");
        }

    }

    // if (jugador1) {
    //     while (jugador1.vida) {
            
    //     }
    //     let jugador1VidaNueva = (jugador1.vida - jugador2.fuerza);
    //     console.log(jugador1VidaNueva);
    // } else if (jugador2) {
    //     let jugador2VidaNueva = (jugador2.vida - jugador1.fuerza);
    //     console.log(jugador2VidaNueva);
    // }

}

// ---------------------------------------- COSITAS DEL DISPLAY ---------------------------------------- 

let displayJugador1 = document.getElementById("pictureFighter1");
let displayJugador2 = document.getElementById("pictureFighter2");
let statsJugador1 = document.getElementById("stats1");
let statsJugador2 = document.getElementById("stats2");
let winner = document.getElementById("winner");