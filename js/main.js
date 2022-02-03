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

// const selectFighter = (nLuchador) => {

//     if (jugador1 == "") {
//         jugador1 = allFighters[nLuchador];

//         let luchador1 = document.getElementById(nLuchador);

//         document.getElementById(nLuchador).style.display = "none";

//         luchador1.classList.add("fighterSelected");
//         console.log(luchador1);
//     } else if (jugador2 == "") {
//         jugador2 = allFighters[nLuchador];

//         let luchador2 = document.getElementById(nLuchador);

//         document.getElementById(nLuchador).style.display = "none";

//         luchador2.classList.add("fighterSelected");
//         console.log(luchador2);

//         setTimeout(()=>{
//             cambiaPantalla(3);
//         },2500);
//     }

// }

// const selectFighter = (nLuchador) => {
//     let luchadorDeseado = "luchador" + nLuchador;

//     let allPersonajes = ["luchador0","luchador1","luchador2","luchador3","luchador4","luchador5","luchador6","luchador7"];
    
//     allPersonajes = allPersonajes.filter(valor => !luchadorDeseado.includes(valor));
    
//     document.getElementById("luchador" + nLuchador).style.display = "none";

//     setTimeout(()=>{
//         cambiaPantalla(3);
//         },2500);
    
// }

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

const transformFighter = (nLuchador) => {
    let conversion = allPersonajes[nLuchador];
    conversion.toString();
    conversion.slice(7);
    parseInt(conversion);

    console.log(conversion);
}

// if (jugador1 == "fighter" + (nLuchador)) {

//     let allLuchadores = ["fighter1","fighter2","fighter3","fighter4","fighter5","fighter6","fighter7","fighter8"];

//     allLuchadores = allLuchadores.filter(valor => !luchadorDeseado.includes(valor));

    
    
//     let luchadorDer = document.getElementById("personaje1");

//     luchadorDer.classList.add("personajeSeleccionado1luchador" + (nLuchador));
// }

// Algoritmo

