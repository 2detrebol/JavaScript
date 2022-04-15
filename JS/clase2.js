let nombre = prompt("Ingrese su Nombre");
let apellido = prompt("Ingrese su Apellido");
const espacio = " ";

if (((nombre == "Mauro") || (nombre == "MAURO") && (apellido == "Brandi") || (apellido == "BRANDI"))) {
    alert("Bienvenido Admin!")
} else if ((nombre != "") && (apellido != "")) {
    alert("Bienvenido/a" + espacio + nombre + espacio + apellido)
} else {
    alert("Error! No ha ingresado todos los datos. Por favor intente nuevamente.")
}

/*FOR CON WHILE*/
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
