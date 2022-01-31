class Luchador {

    caracteristicas(nombre, vida, fuerza, defensa, velocidad, tipoGolpe) {
        this.nombre = nombre;
        this.vida = vida;
        this.fuerza = fuerza;
        this.defensa = defensa;
        this.velocidad = velocidad;
        this.tipoGolpe = tipoGolpe;
    }

    pegar() {
        return this.fuerza;
    }

    cancelarGolpe() {
        return this.fuerza = 0;
    }
}

// Instanciando luchadores

let luchador1 = new Luchador("Queen",1000,250,250,250,"Puño");
let luchador2 = new Luchador("Susie",1150,300,150,150,"Hacha");
let luchador3 = new Luchador("Annoying Dog",Math.random(1000,5001),Math.random(100, 601),Math.random(200,601),Math.random(99, 401),"Amor");
let luchador4 = new Luchador("Ralsei",1100,200,150,300,"Magia");
let luchador5 = new Luchador("Sans",1666,400,300,100,"Magia");
let luchador6 = new Luchador("Temmie",Math.random(1000,1701),Math.random(100,601),200,300,"Amor");
let luchador7 = new Luchador("Noelle",1100,250,250,350,"Magia");
let luchador8 = new Luchador("Berdly",1250,200,200,350,"Puño");

// Generando variables básicas del entorno

let allFighters = [luchador1,luchador2,luchador3,luchador4,luchador5,luchador6,luchador7,luchador8];

let jugador1 = [];

let jugador2 = [];

let ganador = "";