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

// Algoritmo

