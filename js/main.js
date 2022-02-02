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

const selectFighter = (nLuchador) => {

    if (jugador1 == "") {
        jugador1 = allFighters[nLuchador];

        let luchador1 = document.getElementById(nLuchador);

        document.getElementById(nLuchador).style.display = "none";

        luchador1.classList.add("fighterSelected");
        console.log(luchador1);
    } else if (jugador2 == "") {
        jugador2 = allFighters[nLuchador];

        let luchador2 = document.getElementById(nLuchador);

        document.getElementById(nLuchador).style.display = "none";

        luchador2.classList.add("fighterSelected");
        console.log(luchador2);

        setTimeout(()=>{
            cambiaPantalla(3);
        },2500);
    }

}

// Algoritmo

switch (jugador1) {
    case fighter1:
        
    break;

    case fighter2:
    
    break;

    case fighter3:
    
    break;

    case fighter4:
    
    break;
    
    case fighter5:
    
    break;

    case fighter6:
    
    break;

    case fighter7:
    
    break;

    case fighter8:
    
    break;

    default:
        break;
}

switch (jugador1) {
    case fighter1:
        
    break;

    case fighter2:
    
    break;

    case fighter3:
    
    break;

    case fighter4:
    
    break;
    
    case fighter5:
    
    break;

    case fighter6:
    
    break;

    case fighter7:
    
    break;

    case fighter8:
    
    break;

    default:
        break;
}