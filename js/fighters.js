class Luchador {

    constructor(nombre,vida,fuerza,defensa,velocidad) {
        this.nombre = nombre;
        this.vida = vida;
        this.fuerza = fuerza;
        this.defensa = defensa;
        this.velocidad = velocidad;
    }

    pegar() {
        return this.fuerza;
    }

    cancelarGolpe() {
        return this.fuerza = 0;
    }
}

// Instanciando luchadores

let fighter1 = new Luchador("Queen",1000,250,250,250);
let fighter2 = new Luchador("Susie",1150,300,150,150);
let fighter3 = new Luchador("AnnoyingDog",Math.random(1000,5001),Math.random(100, 601),Math.random(200,601),Math.random(99, 401));
let fighter4 = new Luchador("Ralsei",1100,200,150,300);
let fighter5 = new Luchador("Temmie",Math.random(1000,1701),Math.random(100,601),200,300);
let fighter6 = new Luchador("Sans",1666,400,300,100);
let fighter7 = new Luchador("Noelle",1100,250,250,350);
let fighter8 = new Luchador("Berdly",1250,200,200,350);

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