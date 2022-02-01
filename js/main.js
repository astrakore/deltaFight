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

// ---------------------------------------- SELECCIÓN DE PERSONAJES JUGADOR 1 ---------------------------------------- 

// const player1luchador1 = (numLuch) => {
//     let luchadorDeseado = "luchador" + numLuch;
    
//     let arrayLuchadores = ["luchador1","luchador2","luchador3","luchador4","luchador5","luchador6","luchador7","luchador8"];

//     arrayLuchadores = arrayLuchadores.filter(numLuch => !luchadorDeseado.includes(numLuch));

//     document.getElementById("queen").style.backgroundImage = "url('img/seleccionQueenBYN.png')";
// }

// const player1luchador2 = (numLuch) => {
//     let luchadorDeseado = "luchador" + numLuch;
    
//     let arrayLuchadores = ["luchador1","luchador2","luchador3","luchador4","luchador5","luchador6","luchador7","luchador8"];

//     arrayLuchadores = arrayLuchadores.filter(numLuch => !luchadorDeseado.includes(numLuch));

//     document.getElementById("susie").style.backgroundImage = "url('img/seleccionSusieBYN.png')";
// }

// const player1luchador3 = (numLuch) => {
//     let luchadorDeseado = "luchador" + numLuch;
    
//     let arrayLuchadores = ["luchador1","luchador2","luchador3","luchador4","luchador5","luchador6","luchador7","luchador8"];

//     arrayLuchadores = arrayLuchadores.filter(numLuch => !luchadorDeseado.includes(numLuch));

//     document.getElementById("annoyingDog").style.backgroundImage = "url('img/seleccionAnnoyingDogBYN.png')";
// }

// const player1luchador4 = (numLuch) => {
//     let luchadorDeseado = "luchador" + numLuch;
    
//     let arrayLuchadores = ["luchador1","luchador2","luchador3","luchador4","luchador5","luchador6","luchador7","luchador8"];

//     arrayLuchadores = arrayLuchadores.filter(numLuch => !luchadorDeseado.includes(numLuch));

//     document.getElementById("ralsei").style.backgroundImage = "url('img/seleccionRalseiBYN.png')";
// }

// const player1luchador5 = (numLuch) => {
//     let luchadorDeseado = "luchador" + numLuch;
    
//     let arrayLuchadores = ["luchador1","luchador2","luchador3","luchador4","luchador5","luchador6","luchador7","luchador8"];

//     arrayLuchadores = arrayLuchadores.filter(numLuch => !luchadorDeseado.includes(numLuch));

//     document.getElementById("temmie").style.backgroundImage = "url('img/seleccionTemmieBYN.png')";
// }

// const player1luchador6 = (numLuch) => {
//     let luchadorDeseado = "luchador" + numLuch;
    
//     let arrayLuchadores = ["luchador1","luchador2","luchador3","luchador4","luchador5","luchador6","luchador7","luchador8"];

//     arrayLuchadores = arrayLuchadores.filter(numLuch => !luchadorDeseado.includes(numLuch));

//     document.getElementById("sans").style.backgroundImage = "url('img/seleccionSansBYN.png')";
// }

// const player1luchador7 = (numLuch) => {
//     let luchadorDeseado = "luchador" + numLuch;
    
//     let arrayLuchadores = ["luchador1","luchador2","luchador3","luchador4","luchador5","luchador6","luchador7","luchador8"];

//     arrayLuchadores = arrayLuchadores.filter(numLuch => !luchadorDeseado.includes(numLuch));

//     document.getElementById("noelle").style.backgroundImage = "url('img/seleccionNoelleBYN.png')";
// }

// const player1luchador8 = (numLuch) => {
//     let luchadorDeseado = "luchador" + numLuch;
    
//     let arrayLuchadores = ["luchador1","luchador2","luchador3","luchador4","luchador5","luchador6","luchador7","luchador8"];

//     arrayLuchadores = arrayLuchadores.filter(numLuch => !luchadorDeseado.includes(numLuch));

//     document.getElementById("berdly").style.backgroundImage = "url('img/seleccionBerdlyBYN.png')";
// }

// // ---------------------------------------- SELECCIÓN DE PERSONAJES JUGADOR 2 ---------------------------------------- 

// const player2luchador1 = (numLuch) => {
//     let luchadorDeseado = "luchador" + numLuch;
    
//     let arrayLuchadores = ["luchador1","luchador2","luchador3","luchador4","luchador5","luchador6","luchador7","luchador8"];

//     arrayLuchadores = arrayLuchadores.filter(numLuch => !luchadorDeseado.includes(numLuch));

//     document.getElementById("queen2").style.backgroundImage = "url('img/seleccionQueenBYN.png')";
// }

// const player2luchador2 = (numLuch) => {
//     let luchadorDeseado = "luchador" + numLuch;
    
//     let arrayLuchadores = ["luchador1","luchador2","luchador3","luchador4","luchador5","luchador6","luchador7","luchador8"];

//     arrayLuchadores = arrayLuchadores.filter(numLuch => !luchadorDeseado.includes(numLuch));

//     document.getElementById("susie2").style.backgroundImage = "url('img/seleccionSusieBYN.png')";
// }

// const player2luchador3 = (numLuch) => {
//     let luchadorDeseado = "luchador" + numLuch;
    
//     let arrayLuchadores = ["luchador1","luchador2","luchador3","luchador4","luchador5","luchador6","luchador7","luchador8"];

//     arrayLuchadores = arrayLuchadores.filter(numLuch => !luchadorDeseado.includes(numLuch));

//     document.getElementById("annoyingDog2").style.backgroundImage = "url('img/seleccionAnnoyingDogBYN.png')";
// }

// const player2luchador4 = (numLuch) => {
//     let luchadorDeseado = "luchador" + numLuch;
    
//     let arrayLuchadores = ["luchador1","luchador2","luchador3","luchador4","luchador5","luchador6","luchador7","luchador8"];

//     arrayLuchadores = arrayLuchadores.filter(numLuch => !luchadorDeseado.includes(numLuch));

//     document.getElementById("ralsei2").style.backgroundImage = "url('img/seleccionRalseiBYN.png')";
// }

// const player2luchador5 = (numLuch) => {
//     let luchadorDeseado = "luchador" + numLuch;
    
//     let arrayLuchadores = ["luchador1","luchador2","luchador3","luchador4","luchador5","luchador6","luchador7","luchador8"];

//     arrayLuchadores = arrayLuchadores.filter(numLuch => !luchadorDeseado.includes(numLuch));

//     document.getElementById("temmie2").style.backgroundImage = "url('img/seleccionTemmieBYN.png')";
// }

// const player2luchador6 = (numLuch) => {
//     let luchadorDeseado = "luchador" + numLuch;
    
//     let arrayLuchadores = ["luchador1","luchador2","luchador3","luchador4","luchador5","luchador6","luchador7","luchador8"];

//     arrayLuchadores = arrayLuchadores.filter(numLuch => !luchadorDeseado.includes(numLuch));

//     document.getElementById("sans2").style.backgroundImage = "url('img/seleccionSansBYN.png')";
// }

// const player2luchador7 = (numLuch) => {
//     let luchadorDeseado = "luchador" + numLuch;
    
//     let arrayLuchadores = ["luchador1","luchador2","luchador3","luchador4","luchador5","luchador6","luchador7","luchador8"];

//     arrayLuchadores = arrayLuchadores.filter(numLuch => !luchadorDeseado.includes(numLuch));

//     document.getElementById("noelle2").style.backgroundImage = "url('img/seleccionNoelleBYN.png')";
// }

// const player2luchador8Selec = (numLuch) => {
//     let luchadorDeseado = "luchador" + numLuch;
    
//     let arrayLuchadores = ["luchador1","luchador2","luchador3","luchador4","luchador5","luchador6","luchador7","luchador8"];

//     arrayLuchadores = arrayLuchadores.filter(numLuch => !luchadorDeseado.includes(numLuch));

//     document.getElementById("berdly2").style.backgroundImage = "url('img/seleccionBerdlyBYN.png')";
// }

const selectFighter = (nLuchador) => {

    if (jugador1 == "") {
        jugador1 = allFighters[nLuchador];

        let luchador1 = document.getElementById(nLuchador);
        let datosLuchador1 = document.getElementById("data"+ 1);

        luchador1.disabled = true;

        luchador1.classList.add("luchador"[nLuchador] + "Seleccion");
        datosLuchador1.innerHTML = `${jugador1.nombre}`;
    } else if (jugador2 == "") {
        jugador2 = allFighters[nLuchador];

        let luchador2 = document.getElementById(nLuchador);
        let datosLuchador2 = document.getElementById("data"+ 2);

        luchador2.disabled = true;

        luchador2.classList.add("luchador"[nLuchador] + "Seleccion");
        datosLuchador2.innerHTML = `${jugador2.nombre}`;
    }

    setTimeout(()=>{
        cambiaPantalla(3);
    },2500);
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