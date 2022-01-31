class Luchador {
    
    caracteristicas(nombre, fuerza, velocidad, tipoGolpe) {
        this.nombre = nombre;
        this.fuerza = fuerza;
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

let luchador1 = new Luchador("Queen",250,250,"Puño");
let luchador2 = new Luchador("Susie",300,150,"Hacha");
let luchador3 = new Luchador("Annoying Dog",random,random,"Amor");
let luchador4 = new Luchador("Ralsei",200,300,"Magia");
let luchador5 = new Luchador("Sans",400,100,"Magia");
let luchador6 = new Luchador("Temmie",random,300,"Amor");
let luchador7 = new Luchador("Noelle",250,350,"Magia");
let luchador8 = new Luchador("Berdly",200,350,"Puño");

// Generando variables básicas del entorno

let allFIghters = [luchador1,luchador2,luchador3,luchador4,luchador5,luchador6,luchador7,luchador8];

let jugador1 = [];

let jugador2 = [];

let ganador = "";