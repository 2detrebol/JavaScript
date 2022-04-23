let nombre = prompt("Ingrese su Nombre");
let apellido = prompt("Ingrese su Apellido");
const ESPACIO = " ";

/*IF*/
if (((nombre == "Mauro") || (nombre == "MAURO") && (apellido == "Brandi") || (apellido == "BRANDI"))) {
    alert("Bienvenido Admin!")
} else if ((nombre != "") && (apellido != "")) {
    alert("Bienvenido/a" + ESPACIO + nombre + ESPACIO + apellido)
} else {
    alert("Error! No ha ingresado todos los datos. Por favor intente nuevamente.")
}

/*FOR*/
for (let a = 1; a <= 5; a++) {    
    let ingresaNombre = prompt ("Ingresa tu Nombre");    
    alert ("Turno Nº "+a+" - Nombre: "+ingresaNombre);       
}

/*WHILE*/
let entrada = prompt ("Ahora ingresa un número");
while (entrada != "EXIT") {
    alert("Usted ingreso el Número "+entrada);
    entrada = prompt ("Ingresa otro número");
}

/*
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