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

const displayGame = () => {

    displayJugador1.innerHTML = `<img class="foto" src="img/plyr1${jugador1.nombre}.png" alt="primer_luchador"/>`;
    
    displayJugador2.innerHTML = `<img class="foto" src="img/plyr2${jugador2.nombre}.png" alt="segundo_luchador"/>`;
                                           
}

let displayJugador1 = document.getElementById("pictureFighter1");
let displayJugador2 = document.getElementById("pictureFighter2");
let winner = document.getElementById("winner");

let screen4 = document.getElementById("screen4");

document.body.addEventListener("keydown", (ev) => {
            
    if(screen4.style.display == "block"){
        console.log("ataque");
    }

});

// Algoritmo