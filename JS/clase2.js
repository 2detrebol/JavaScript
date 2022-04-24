let nombre = prompt("Ingrese su Nombre");
let apellido = prompt("Ingrese su Apellido");
const ESPACIO = " ";

/*IF*/
if (((nombre === "Mauro") || (nombre === "MAURO") || (nombre === "mauro")) && ((apellido === "Brandi") || (apellido === "BRANDI") || (apellido === "brandi"))) {
    alert("Bienvenido Admin!")
} else if ((nombre !== "") && (apellido !== "")) {
    alert("Bienvenido/a" + ESPACIO + nombre + ESPACIO + apellido)
} else {
    alert("Error! No ha ingresado todos los datos.")
}

/*FOR*/
for (let i = 1; i <= 5; i++) {
    let ingresaNombre = prompt("Ingresa tu Nombre para obtener un turno");
    if (isNaN(ingresaNombre)) {
        alert("Turno Nº " + i + " - Nombre: " + ingresaNombre);
    } else {
        alert("Usted no ingresó un Nombre válido. \nComo este turno no pudo ser asignado, se continuará con la asignación del siguiente turno.")
    }
}


/*WHILE*/
let entrada = parseInt(prompt("Ahora ingresa un número"));
while (entrada !== 9999) {
    /*DECLARACIÓN NEGATIVA - IF NO ES UN NAN/STRING ES UN NUM, SIN EL ! ANTES DEL isNaN funcionaria al reves*/
    if (!isNaN(entrada)) {
        alert("Usted ingreso el Número " + entrada);
    } else {
        alert("Usted no ingresó un número válido");
    }
    entrada = parseInt(prompt("Ingresa otro número"));
}

/*
EJERCICIO DE NOTAS

let nota = 7;

if (nota <= 6) {
    console.log("No aprobado");
} else if 
    (nota >= 7 && nota <= 9) {
        console.log("Bien ahí");        
    }
    else {
        console.log("Felicidades 10");
    }
*/