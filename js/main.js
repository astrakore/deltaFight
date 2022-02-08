// Funciones

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

// ---------------------------------------- EL LUCHADOR 1 PEGA ASÍ ---------------------------------------- 

const pegar1 = () => {

    if (jugador1) {
        
        let resultado1Golpe0 = jugador2.vida;

        while (jugador2.vida == resultado1Golpe0) {
            let resultado1Golpe1 = (jugador2.vida - jugador1.fuerza);
            jugador2.vida = resultado1Golpe1;
            statsJugador2.innerHTML = `<div>${jugador2.nombre} ${jugador2.vida}</div>`;
        }
        
        if (jugador2.vida <= 0) {
            ganador = jugador1;
            cambiaPantalla(5);
            displayWinner();
        }
    }
}

// ---------------------------------------- EL LUCHADOR 2 PEGA ASÍ ---------------------------------------- 

const pegar2 = () => {

    if (jugador2) {

        let resultado2Golpe0 = jugador1.vida;

        while (jugador1.vida == resultado2Golpe0) {
            let resultado2Golpe1 = (jugador1.vida - jugador2.fuerza);
            jugador1.vida = resultado2Golpe1;
            statsJugador1.innerHTML = `<div>${jugador1.nombre} ${jugador1.vida}</div>`;
        }
        
        if (jugador1.vida <= 0) {
            ganador = jugador2;
            cambiaPantalla(5);
            displayWinner();
        }

    }
}

// ---------------------------------------- MOSTRAR AL GANADOR ---------------------------------------- 

const displayWinner = () => {

    if (jugador1 == ganador) {
        let malditoGanador = document.getElementById("ganadorHeehee");
        malditoGanador.classList.remove("ganadorHeehee");
        malditoGanador.classList.add("ganadorLuch" + (jugador1.nombre));
        let url = "/assets/" + jugador1.nombre + "WinnerSong.mp3";
        let audiojugador1 = new Audio(url);
        audiojugador1.play();

    } else if (jugador2 == ganador) {
        let malditoGanador = document.getElementById("ganadorHeehee");
        malditoGanador.classList.remove("ganadorHeehee");
        malditoGanador.classList.add("ganadorLuch" + (jugador2.nombre));
        let url = "/assets/" + jugador2.nombre + "WinnerSong.mp3";
        let audioJugador2 = new Audio(url);
        audioJugador2.play();
    }
}

// ---------------------------------------- COSITAS DEL DISPLAY ---------------------------------------- 

let displayJugador1 = document.getElementById("pictureFighter1");
let displayJugador2 = document.getElementById("pictureFighter2");
let statsJugador1 = document.getElementById("stats1");
let statsJugador2 = document.getElementById("stats2");
let winner = document.getElementById("winner");