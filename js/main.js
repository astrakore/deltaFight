// Funciones

const cleanGame = () => {
    jugador1 = [];
    jugador2 = [];
    ganador = "";
}

const cambiaPantalla = (cambio) => {
    let pantallaDeseada ="screen" + cambio;

    let arrayPantallas = ["screen1","screen2","screen3","screen4"];

    arrayPantallas = arrayPantallas.filter(valor => !pantallaDeseada.includes(valor));

    document.getElementById(pantallaDeseada).style.display = "block";

    for (let pantalla of arrayPantallas) {
        document.getElementById(pantalla).style.display = "none";
    }
}

// let luchador1 = "queen";
// const luchador1Selec = luchador1.replaceAll(queen, queenSeleccionado);

const luchador1Selec = (numLuch) => {
    let luchadorDeseado = "luchador" + numLuch;
    
    let arrayLuchadores = ["luchador1","luchador2","luchador3","luchador4","luchador5","luchador6","luchador7","luchador8"];

    arrayLuchadores = arrayLuchadores.filter(numLuch => !luchadorDeseado.includes(numLuch));

    document.getElementById("queen").style.backgroundImage = "url('img/seleccionQueenBYN.png')";
}

const luchador2Selec = (numLuch) => {
    let luchadorDeseado = "luchador" + numLuch;
    
    let arrayLuchadores = ["luchador1","luchador2","luchador3","luchador4","luchador5","luchador6","luchador7","luchador8"];

    arrayLuchadores = arrayLuchadores.filter(numLuch => !luchadorDeseado.includes(numLuch));

    document.getElementById("susie").style.backgroundImage = "url('img/seleccionSusieBYN.png')";
}

const luchador3Selec = (numLuch) => {
    let luchadorDeseado = "luchador" + numLuch;
    
    let arrayLuchadores = ["luchador1","luchador2","luchador3","luchador4","luchador5","luchador6","luchador7","luchador8"];

    arrayLuchadores = arrayLuchadores.filter(numLuch => !luchadorDeseado.includes(numLuch));

    document.getElementById("annoyingDog").style.backgroundImage = "url('img/seleccionAnnoyingDogBYN.png')";
}

const luchador4Selec = (numLuch) => {
    let luchadorDeseado = "luchador" + numLuch;
    
    let arrayLuchadores = ["luchador1","luchador2","luchador3","luchador4","luchador5","luchador6","luchador7","luchador8"];

    arrayLuchadores = arrayLuchadores.filter(numLuch => !luchadorDeseado.includes(numLuch));

    document.getElementById("ralsei").style.backgroundImage = "url('img/seleccionRalseiBYN.png')";
}

const luchador5Selec = (numLuch) => {
    let luchadorDeseado = "luchador" + numLuch;
    
    let arrayLuchadores = ["luchador1","luchador2","luchador3","luchador4","luchador5","luchador6","luchador7","luchador8"];

    arrayLuchadores = arrayLuchadores.filter(numLuch => !luchadorDeseado.includes(numLuch));

    document.getElementById("temmie").style.backgroundImage = "url('img/seleccionTemmieBYN.png')";
}

const luchador6Selec = (numLuch) => {
    let luchadorDeseado = "luchador" + numLuch;
    
    let arrayLuchadores = ["luchador1","luchador2","luchador3","luchador4","luchador5","luchador6","luchador7","luchador8"];

    arrayLuchadores = arrayLuchadores.filter(numLuch => !luchadorDeseado.includes(numLuch));

    document.getElementById("sans").style.backgroundImage = "url('img/seleccionSansBYN.png')";
}

const luchador7Selec = (numLuch) => {
    let luchadorDeseado = "luchador" + numLuch;
    
    let arrayLuchadores = ["luchador1","luchador2","luchador3","luchador4","luchador5","luchador6","luchador7","luchador8"];

    arrayLuchadores = arrayLuchadores.filter(numLuch => !luchadorDeseado.includes(numLuch));

    document.getElementById("noelle").style.backgroundImage = "url('img/seleccionNoelleBYN.png')";
}

const luchador8Selec = (numLuch) => {
    let luchadorDeseado = "luchador" + numLuch;
    
    let arrayLuchadores = ["luchador1","luchador2","luchador3","luchador4","luchador5","luchador6","luchador7","luchador8"];

    arrayLuchadores = arrayLuchadores.filter(numLuch => !luchadorDeseado.includes(numLuch));

    document.getElementById("berdly").style.backgroundImage = "url('img/seleccionBerdlyBYN.png')";
}

// Algoritmo

