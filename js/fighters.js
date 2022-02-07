class Luchador {

    constructor(nombre,vida,fuerza) {
        this.nombre = nombre;
        this.vida = vida;
        this.fuerza = fuerza;
        this.golpe = 0;
    }

    pegar() {
        return this.golpe + this.fuerza;
    }

    cancelarGolpe() {
        return this.fuerza = 0;
    }
}

// Instanciando luchadores

let fighter1 = new Luchador("Queen",1000,250);
let fighter2 = new Luchador("Susie",1150,300);
let fighter3 = new Luchador("AnnoyingDog",Math.floor((Math.random() * (5001 - 1000) + 1000)),Math.floor((Math.random() * (601 - 100) + 100)));
let fighter4 = new Luchador("Ralsei",1100,200);
let fighter5 = new Luchador("Temmie",Math.floor((Math.random() * (1701 - 1000) + 1000)),Math.floor((Math.random() * (601 - 100) + 100)));
let fighter6 = new Luchador("Sans",1666,400);
let fighter7 = new Luchador("Noelle",1100,250);
let fighter8 = new Luchador("Berdly",1250,200);

// Traductor

let allFighters = {
    1 : fighter1,
    2 : fighter2,
    3 : fighter3,
    4 : fighter4,
    5 : fighter5,
    6 : fighter6,
    7 : fighter7,
    8 : fighter8
}

// Generando variables básicas del entorno

let jugador1 = "";

let jugador2 = "";

let ganador = "";