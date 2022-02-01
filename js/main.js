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

// ---------------------------------------- SELECCIÓN DE PERSONAJES JUGADOR 1 ---------------------------------------- 

const luchador1player1Selec = (numLuch) => {
    let luchadorDeseado = "luchador" + numLuch;
    
    let arrayLuchadores = ["luchador1","luchador2","luchador3","luchador4","luchador5","luchador6","luchador7","luchador8"];

    arrayLuchadores = arrayLuchadores.filter(numLuch => !luchadorDeseado.includes(numLuch));

    document.getElementById("queen").style.backgroundImage = "url('img/seleccionQueenBYN.png')";
}

const luchador2player1Selec = (numLuch) => {
    let luchadorDeseado = "luchador" + numLuch;
    
    let arrayLuchadores = ["luchador1","luchador2","luchador3","luchador4","luchador5","luchador6","luchador7","luchador8"];

    arrayLuchadores = arrayLuchadores.filter(numLuch => !luchadorDeseado.includes(numLuch));

    document.getElementById("susie").style.backgroundImage = "url('img/seleccionSusieBYN.png')";
}

const luchador3player1Selec = (numLuch) => {
    let luchadorDeseado = "luchador" + numLuch;
    
    let arrayLuchadores = ["luchador1","luchador2","luchador3","luchador4","luchador5","luchador6","luchador7","luchador8"];

    arrayLuchadores = arrayLuchadores.filter(numLuch => !luchadorDeseado.includes(numLuch));

    document.getElementById("annoyingDog").style.backgroundImage = "url('img/seleccionAnnoyingDogBYN.png')";
}

const luchador4player1Selec = (numLuch) => {
    let luchadorDeseado = "luchador" + numLuch;
    
    let arrayLuchadores = ["luchador1","luchador2","luchador3","luchador4","luchador5","luchador6","luchador7","luchador8"];

    arrayLuchadores = arrayLuchadores.filter(numLuch => !luchadorDeseado.includes(numLuch));

    document.getElementById("ralsei").style.backgroundImage = "url('img/seleccionRalseiBYN.png')";
}

const luchador5player1Selec = (numLuch) => {
    let luchadorDeseado = "luchador" + numLuch;
    
    let arrayLuchadores = ["luchador1","luchador2","luchador3","luchador4","luchador5","luchador6","luchador7","luchador8"];

    arrayLuchadores = arrayLuchadores.filter(numLuch => !luchadorDeseado.includes(numLuch));

    document.getElementById("temmie").style.backgroundImage = "url('img/seleccionTemmieBYN.png')";
}

const luchador6player1Selec = (numLuch) => {
    let luchadorDeseado = "luchador" + numLuch;
    
    let arrayLuchadores = ["luchador1","luchador2","luchador3","luchador4","luchador5","luchador6","luchador7","luchador8"];

    arrayLuchadores = arrayLuchadores.filter(numLuch => !luchadorDeseado.includes(numLuch));

    document.getElementById("sans").style.backgroundImage = "url('img/seleccionSansBYN.png')";
}

const luchador7player1Selec = (numLuch) => {
    let luchadorDeseado = "luchador" + numLuch;
    
    let arrayLuchadores = ["luchador1","luchador2","luchador3","luchador4","luchador5","luchador6","luchador7","luchador8"];

    arrayLuchadores = arrayLuchadores.filter(numLuch => !luchadorDeseado.includes(numLuch));

    document.getElementById("noelle").style.backgroundImage = "url('img/seleccionNoelleBYN.png')";
}

const luchador8player1Selec = (numLuch) => {
    let luchadorDeseado = "luchador" + numLuch;
    
    let arrayLuchadores = ["luchador1","luchador2","luchador3","luchador4","luchador5","luchador6","luchador7","luchador8"];

    arrayLuchadores = arrayLuchadores.filter(numLuch => !luchadorDeseado.includes(numLuch));

    document.getElementById("berdly").style.backgroundImage = "url('img/seleccionBerdlyBYN.png')";
}

// ---------------------------------------- SELECCIÓN DE PERSONAJES JUGADOR 2 ---------------------------------------- 

const luchador1player2Selec = (numLuch) => {
    let luchadorDeseado = "luchador" + numLuch;
    
    let arrayLuchadores = ["luchador1","luchador2","luchador3","luchador4","luchador5","luchador6","luchador7","luchador8"];

    arrayLuchadores = arrayLuchadores.filter(numLuch => !luchadorDeseado.includes(numLuch));

    document.getElementById("queen2").style.backgroundImage = "url('img/seleccionQueenBYN.png')";
}

const luchador2player2Selec = (numLuch) => {
    let luchadorDeseado = "luchador" + numLuch;
    
    let arrayLuchadores = ["luchador1","luchador2","luchador3","luchador4","luchador5","luchador6","luchador7","luchador8"];

    arrayLuchadores = arrayLuchadores.filter(numLuch => !luchadorDeseado.includes(numLuch));

    document.getElementById("susie2").style.backgroundImage = "url('img/seleccionSusieBYN.png')";
}

const luchador3player2Selec = (numLuch) => {
    let luchadorDeseado = "luchador" + numLuch;
    
    let arrayLuchadores = ["luchador1","luchador2","luchador3","luchador4","luchador5","luchador6","luchador7","luchador8"];

    arrayLuchadores = arrayLuchadores.filter(numLuch => !luchadorDeseado.includes(numLuch));

    document.getElementById("annoyingDog2").style.backgroundImage = "url('img/seleccionAnnoyingDogBYN.png')";
}

const luchador4player2Selec = (numLuch) => {
    let luchadorDeseado = "luchador" + numLuch;
    
    let arrayLuchadores = ["luchador1","luchador2","luchador3","luchador4","luchador5","luchador6","luchador7","luchador8"];

    arrayLuchadores = arrayLuchadores.filter(numLuch => !luchadorDeseado.includes(numLuch));

    document.getElementById("ralsei2").style.backgroundImage = "url('img/seleccionRalseiBYN.png')";
}

const luchador5player2Selec = (numLuch) => {
    let luchadorDeseado = "luchador" + numLuch;
    
    let arrayLuchadores = ["luchador1","luchador2","luchador3","luchador4","luchador5","luchador6","luchador7","luchador8"];

    arrayLuchadores = arrayLuchadores.filter(numLuch => !luchadorDeseado.includes(numLuch));

    document.getElementById("temmie2").style.backgroundImage = "url('img/seleccionTemmieBYN.png')";
}

const luchador6player2Selec = (numLuch) => {
    let luchadorDeseado = "luchador" + numLuch;
    
    let arrayLuchadores = ["luchador1","luchador2","luchador3","luchador4","luchador5","luchador6","luchador7","luchador8"];

    arrayLuchadores = arrayLuchadores.filter(numLuch => !luchadorDeseado.includes(numLuch));

    document.getElementById("sans2").style.backgroundImage = "url('img/seleccionSansBYN.png')";
}

const luchador7player2Selec = (numLuch) => {
    let luchadorDeseado = "luchador" + numLuch;
    
    let arrayLuchadores = ["luchador1","luchador2","luchador3","luchador4","luchador5","luchador6","luchador7","luchador8"];

    arrayLuchadores = arrayLuchadores.filter(numLuch => !luchadorDeseado.includes(numLuch));

    document.getElementById("noelle2").style.backgroundImage = "url('img/seleccionNoelleBYN.png')";
}

const luchador8player2Selec = (numLuch) => {
    let luchadorDeseado = "luchador" + numLuch;
    
    let arrayLuchadores = ["luchador1","luchador2","luchador3","luchador4","luchador5","luchador6","luchador7","luchador8"];

    arrayLuchadores = arrayLuchadores.filter(numLuch => !luchadorDeseado.includes(numLuch));

    document.getElementById("berdly2").style.backgroundImage = "url('img/seleccionBerdlyBYN.png')";
}

// Algoritmo

