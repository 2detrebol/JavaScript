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