let comprarProducto = prompt("Ingresa el nombre del producto que quieres comprar. \nSi deseas salir ingresa EXIT. \n(Opciones: \n 1 = i7, \n 2 = i9, \n 3 = R7, \n 4 = R9, \n 5 = 3080, \n 6 = 3090, \n 7 = 6800, \n 8 = 6900, \n 9 = Z690, \n 10 = X570S, \n 11 = Z690PLUS, \n 12 = B550, \n EXIT = Salir)");


function Producto(id, tittle, precio, stock) {
    this.id = id;
    this.tittle = tittle;
    this.precio = parseFloat(precio);
    this.stock = stock;

    //vender
    this.vendido = function (cantidad) {
        if (cantidad > this.stock) {
            alert("No hay suficiente stock. Actualmente disponemos de " + this.stock + " unidad/es de este producto.");
        } else {
            this.stock -= cantidad;
            this.precio * cantidad;
        }
    }

    //Calcular Stock
    /*    this.calcularStock = function () {
            if (this.stock <= 0) {
                return this.disponible = false;
            } else {
                return this.stock;
            }
        };*/
}
let producto1 = new Producto(1, "i7", "60000", 5);
let producto2 = new Producto(2, "i9", "80000", 20);
let producto3 = new Producto(3, "R7", "55000", 15);
let producto4 = new Producto(4, "R9", "75000", 30);
let producto5 = new Producto(5, "3080", "300000", 10);
let producto6 = new Producto(6, "3090", "600000", 20);
let producto7 = new Producto(7, "6800", "260000", 5);
let producto8 = new Producto(8, "6900", "320000", 15);
let producto9 = new Producto(9, "Z690", "100000", 10);
let producto10 = new Producto(10, "X570S", "65000", 20);
let producto11 = new Producto(11, "Z690PLUS", "50000", 10);
let producto12 = new Producto(12, "B550", "35000", 20);

const microprocesador = [];
microprocesador.push(producto1, producto2, producto3, producto4);

const placaVideo = [];
placaVideo.push(producto5, producto6, producto7, producto8);

const motherboards = [];
motherboards.push(producto9, producto10, producto11, producto12);

console.log(microprocesador);
console.log(placaVideo);
console.log(motherboards);


for (const micros of microprocesador)
    console.log(micros.tittle + " = $ " + micros.precio);

for (const video of placaVideo)
    console.log(video.tittle + " = $ " + video.precio);

for (const mothers of motherboards)
    console.log(mothers.tittle + " = $ " + mothers.precio);


const listaProductos = []
listaProductos.push(microprocesador, placaVideo, motherboards);

const carrito = []
let totalCompra = 0;
let totalCantidad = 0;

while (comprarProducto != "EXIT") {
    let cantidadProducto = parseFloat(prompt("Ahora ingresa la cantidad de unidades que quieres agregar a tu compra"));
    switch (comprarProducto) {
        case "1":
            producto1.vendido(cantidadProducto);
            carrito.push(producto1);
            alert("Usted seleccionó " + cantidadProducto + " Microprocesador/es Intel i7 \nDeberá abonar un total de $ " + producto1.precio * cantidadProducto);
            console.log("Se vendió un total de " + cantidadProducto + " Microprocesador/es " + producto1.tittle + " por un valor total de $ " + producto1.precio * cantidadProducto);
            totalCompra += producto1.precio * cantidadProducto;
            totalCantidad += parseFloat(cantidadProducto);
            break;

        case "2":
            carrito.push(producto2);
            alert("Usted seleccionó " + cantidadProducto + " Microprocesador/es Intel i9 \nDeberá abonar un total de $ " + producto2.precio * cantidadProducto);
            console.log("Se vendió un total de " + cantidadProducto + " Microprocesador/es " + producto2.tittle + " por un valor total de $ " + producto2.precio * cantidadProducto);
            producto2.vendido(cantidadProducto);
            totalCompra += producto2.precio * cantidadProducto;
            totalCantidad += parseFloat(cantidadProducto);
            break;
            /*carrito.push(Producto);
            let seguir = confirm("Deseas agregar otro producto ?");
            if (seguir === true) {
                comprarProducto();
                agregarAlCarrito = (Producto);
            } else {
                // entra por el else cuando le das a Cancelar
                alert("Gracias por su visita! ");
                console.log(carrito);
            }*/
        default:
            alert("Usted no ingresó un producto válido.\nPor favor intente nuevamente");
            break;
    }
    comprarProducto = prompt("Ingresa el nombre del producto que quieras agregar. \nO ingresa EXIT para salir. \n(Opciones: \n 1 = i7, \n 2 = i9, \n 3 = R7, \n 4 = R9, \n 5 = 3080, \n 6 = 3090, \n 7 = 6800, \n 8 = 6900, \n 9 = Z690, \n 10 = X570S, \n 11 = Z690PLUS, \n 12 = B550, \n EXIT = Salir)");
}


for (const {} of carrito) {
    console.log("En el carrito hay un total de " + totalCantidad + " productos y suman un total de $ " + totalCompra);
}
console.log("La compra realizada suma un total de $ " + totalCompra)



/*
    let totalCompra = 0;
    while (comprarProducto != "EXIT") {
        switch (comprarProducto) {
            case "1":
                producto1.precio;
                alert("Usted seleccionó un Microprocesador Intel i7 \nTiene un valor de $ " + producto1.precio);
                console.log(producto1.tittle + " fue vendido por un valor de $ " + producto1.precio);
                producto1.vendido(5);
                console.log(producto1.stock);
                totalCompra += producto1.precio;
                break;

            case "2":
                producto2.precio;
                alert("Usted seleccionó un Microprocesador Intel i9 \nTiene un valor de $" + producto2.precio);
                producto2.vendido(5);
                console.log(producto2.tittle + " fue vendido por un valor de $ " + producto2.precio + " (IVA incl.)")
                console.log(producto2.vendido)
                totalCompra += producto2.precio;
                break;

            case "R7":
                producto3.sumaIVA();
                alert("Usted seleccionó un Microprocesador AMD Ryzen 7 \nTiene un valor de $" + producto3.precio + " con IVA incluído");
                producto3.vender();
                console.log(producto3.tittle + " fue vendido por un valor de $ " + producto3.precio + " (IVA incl.)")
                console.log(producto3.vendido)
                totalCompra += producto3.precio;
                break;

            case "R9":
                producto4.sumaIVA();
                alert("Usted seleccionó un Microprocesador AMD Ryzen 9 \nTiene un valor de $" + producto4.precio + " con IVA incluído");
                producto4.vender();
                console.log(producto4.tittle + " fue vendido por un valor de $ " + producto4.precio + " (IVA incl.)")
                console.log(producto4.vendido)
                totalCompra += producto4.precio;
                break;

            case "3080":
                producto5.sumaIVA();
                alert("Usted seleccionó una Placa de Video RTX3080 \nTiene un valor de $" + producto5.precio + " con IVA incluído");
                producto5.vender();
                console.log(producto5.tittle + " fue vendido por un valor de $ " + producto5.precio + " (IVA incl.)")
                console.log(producto5.vendido)
                totalCompra += producto5.precio;
                break;

            case "3090":
                producto6.sumaIVA();
                alert("Usted seleccionó una Placa de Video RTX3090 \nTiene un valor de $" + producto6.precio + " con IVA incluído");
                producto6.vender();
                console.log(producto6.tittle + " fue vendido por un valor de $ " + producto6.precio + " (IVA incl.)")
                console.log(producto6.vendido)
                totalCompra += producto6.precio;
                break;

            case "6800":
                producto7.sumaIVA();
                alert("Usted seleccionó una Placa de Video RX6800 \nTiene un valor de $" + producto7.precio + " con IVA incluído");
                producto7.vender();
                console.log(producto7.tittle + " fue vendido por un valor de $ " + producto7.precio + " (IVA incl.)")
                console.log(producto7.vendido)
                totalCompra += producto7.precio;
                break;

            case "6900":
                producto8.sumaIVA();
                alert("Usted seleccionó una Placa de Video RX6900 \nTiene un valor de $" + producto8.precio + " con IVA incluído");
                producto8.vender();
                console.log(producto8.tittle + " fue vendido por un valor de $ " + producto8.precio + " (IVA incl.)")
                console.log(producto8.vendido)
                totalCompra += producto8.precio;
                break;

            default:
                alert("Usted no ingresó un producto válido.\nPor favor intente nuevamente");
                break;
        }
        comprarProducto = prompt("Ingresa el nombre del producto que quieras agregar. \nO ingresa EXIT para salir. \n(Info para tutor... Opciones: i7, i9, R7, R9, 3080, 3090, 6800, 6900 o EXIT)");
    }

    console.log("La compra realizada suma un total de $ " + totalCompra)

    // objeto planes
    /*
    const arrayPlanes = [
        new planes(1, "Basico", 5, 5, 0, 10, 35000),
        new planes(2, "Intermedio", 10, 5, 5, 15, 55000),
        new planes(3, "Premium", 20, 10, 10, 30, 85000),
    ];
    let tamanio;
    const arraySesiones = [
        new sesiones(1, "Mesoterapia", 0, 3500),
        new sesiones(2, "Piling", 0, 2000),
        new sesiones(3, "Botox", 0, 4000),
        new sesiones(4, "Depilación", 0, 1500),
    ];
    let seccion;
    let total = 0;
    let contador = 0;
    const planesElegidos = []; // array para el carrito
    let consultaPlan = [];

    let nombre = datosPersona(); // pido el nombre del usuario

    let elegir = elegirSeccion(); //pregunto que quiere consultar

    while (elegir != "") {
        if (elegir.toUpperCase() === "PLANES") {
            mostrarPlanes(arrayPlanes); // muestro los planes por consola
            tamanio = arrayPlanes.length;
            consultaPlan = arrayPlanes.slice();
            seccion = 1;
        } else {
            mostrarPlanes(arraySesiones); // muestro las sesiones por consola
            tamanio = arraySesiones.length;
            consultaPlan = arraySesiones.slice();
            seccion = 2;
        }
        let plan = selectPlan(tamanio); // pido que el usuario elija el plan
        if (plan != 0) {
            let agregar = planSeleccionado(consultaPlan, plan);
            if (seccion === 2) {
                agregar = sesionesAgregadas(agregar); //agrego cantidad de sesiones al plan elegido
            }
            let confirmar = prompt("Desea agregarlo al carrito? SI - NO");
            if (confirmar.toUpperCase() === "SI") {
                carrito(agregar);
                contador += 1;
                alert("Se ha agregado correctamente el plan al carrito");
            }
        }
        let agregarOtro = prompt("Desea agregar un nuevo plan? SI -NO");
        if (agregarOtro.toUpperCase() === "SI") {
            elegir = elegirSeccion();
        } else {
            elegir = "";
        }
    }
    alert(
        "Ud tiene" + contador + "productos en su carrito, por un valor de: $" + total
    );
    let quitar = prompt("Desea quitar algun elemento del carrito? SI - NO");

    if (quitar.toUpperCase() === "SI") {
        mostrarAgregados(planesElegidos);
    }

    console.log(planesElegidos);

    // Pido el dato de la persona
    function datosPersona() {
        dato = prompt("Ingrese su nombre");
        alert("Bienvenido " + dato);
        return dato;
    }

    // Objeto Planes
    function planes(id, tipo, mesoterapia, pilling, botox, depilacion, precio) {
        this.id = id;
        this.tipo = tipo;
        this.mesoterapia = mesoterapia;
        this.pilling = pilling;
        this.botox = botox;
        this.depilacion = depilacion;
        this.precio = precio;
    }

    // objeto sesiones
    function sesiones(id, tipo, cantidad, precio) {
        this.id = id;
        this.tipo = tipo;
        this.cantidad = cantidad;
        this.precio = precio;
    }

    // Muestro los planes almacenados en el array
    function mostrarPlanes(array) {
        array.forEach((array) => console.log(array.id + ". " + array.tipo));
        console.log("0. Salir");
    }

    // seleccionar plan
    function selectPlan(tamanio) {
        let tipoPlan = parseFloat(
            prompt("Ingrese el n° del plan que desea consultar (mostrado por consola)")
        );
        while (tipoPlan < 0 || tipoPlan > tamanio) {
            tipoPlan = parseFloat(
                prompt(
                    "Ingrese el n° del plan que desea consultar (mostrado por consola)"
                )
            );
        }
        return tipoPlan;
    }

    // elegir entre plan o sesiones

    function elegirSeccion() {
        let elegir = prompt(
            "Desea ver planes o sesiones individuales\nElegir PLANES o SESIONES"
        );
        while (elegir != "") {
            if (elegir.toUpperCase() === "PLANES") {
                return elegir;
            } else if (elegir.toUpperCase() === "SESIONES") {
                return elegir;
            }
            elegir = prompt(
                "Desea ver planes o sesiones individuales\nElegir PLANES o SESIONES"
            );
        }
    }*/

// muestro las caracteristas del plan seleccionado por consola
/*function planSeleccionado(array, dato) {
    let result = array.find((el) => el.id === dato);
    console.log(result);
    return result;
}

// agrego sesiones al plan elegido

function sesionesAgregadas(array) {
    array.cantidad = parseFloat(prompt("Ingrese la cantidad de sesiones"));
    return array;
}

// Carrito de compras
function carrito(tipoPlan) {
    planesElegidos.push(tipoPlan);
}

// quitar elementos del carrito
function quitarCarrito(num) {
    planesElegidos.splice(num, 1);
}

// muestro los planes agregados al carrito

function mostrarAgregados(planesElegidos) {
    for (const element of array) {
        console.log(element);
    }
}*/