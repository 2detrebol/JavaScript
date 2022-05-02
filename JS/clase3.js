/*FUNCION GLOBAL*/
/*
function sumar (precio1, precio2) {
        return precio1 + precio2;    
}
let resultado = sumar (8,3);
console.log (resultado)
*/

/*FUNCIONES LOCALES*/
/*
function sumar1 (precio1, precio2) {
    let resultado = precio1 + precio2;
    console.log (resultado);
}
sumar1 (10,3);
sumar1 (40,30);
sumar1 (0,6)

function restar (precio1, precio2) {
    let resultado = precio1 - precio2;
    console.log (resultado); 
}
restar (10,3);
restar (15,4);
restar (20,30)
*/

/*FUNCIONES FLECHA*/
/*
const suma = (a, b) => {return a + b};
const resta = function (a, b) {return a - b};
//Se puede escribir tanto con flecha como con function si son simples (una solo línea de código), atajo//
const iva = x => x * 0.21;
//También se pueden omitir los () para las variables y el return entre {}, si es function de 1 sola línea con retorno//
let valor = 110;
let descuento = valor * 10 / 100;
let valorFinalSinIva = resta (valor, descuento);
console.log (valorFinalSinIva)

let valorConIva = suma (valorFinalSinIva,iva (valorFinalSinIva));
console.log (valorConIva);
//También se podría hacer todo junto en una línea como aquí abajo//
let valorFinal = suma (resta (valor, descuento), iva(valor - descuento)) //y en () del iva podría ir valorFinalSinIva//
console.log(valorFinal)
*/

/*OBJETO*/
/*
const productoA = {
id: 1,
tittle: "i7",
precio: "$ 60000"
}

console.log (productoA.id);
console.log (productoA.tittle);
console.log (productoA["precio"]); //Otra forma de llamar al valor de una propiedad del objeto//
console.log (productoA);

//Para reasignar los valores del Objeto ya declarado se puede hacer de estas 2 formas://
productoA.tittle = "i9";
productoA["precio"]= "$ 80000";
productoA["id"]= 2;

console.log (productoA)
*/

/*CONSTRUCTORES DE OBJETOS - ES UNA FUNCIÓN PARA CREAR NUEVO OBJETO CUANDO HAGA FALTA (SUERTE DE PLANTILLA DE OBJETO)*/
/*
function producto (id, tittle, precio) {
    this.id = id;
    this.tittle = tittle;
    this.precio = precio;
}

const productoB = new producto(1, "R7", "$ 55000")
const productoC = new producto(2, "R9", "$ 75000")

console.log (productoB, productoC)
*/

/*CLASES  Y MÉTODOS (SON FUNCIONES QUE SOLO SE USAN DENTRO DEL OBJETO QUE LOS CONTIENE)*/

class ProductoD {
    constructor (id, tittle, precio) {
        this.id = id;
        this.tittle = tittle;
        this.precio = parseFloat (precio);
        this.vendido = false + " - producto en stock";
    }
    sumaIVA () {
        this.precio = this.precio * 1.21;
    }
    vender () {
        this.vendido = true + " - producto vendido - sin stock";
    }
}
const producto1 = new ProductoD (1,"i7","60000");
const producto2 = new ProductoD (2,"i9","80000");
const producto3 = new ProductoD (3,"R7","55000");
const producto4 = new ProductoD (4,"R9","75000");
const producto5 = new ProductoD (5,"3080","300000");
const producto6 = new ProductoD (6,"3090","600000");
const producto7 = new ProductoD (7,"6800","260000");
const producto8 = new ProductoD (8,"6900","320000");

console.log (producto1)
console.log (producto2)
console.log (producto3)
console.log (producto4)
console.log (producto5)
console.log (producto6)
console.log (producto7)
console.log (producto8)

let comprarProducto = prompt ("Ingresa el nombre del producto que quieres comprar. \nSi deseas salir ingresa EXIT. \n(Info para tutor... Opciones: i7, i9, R7, R9, 3080, 3090, 6800, 6900 o EXIT)");
let totalCompra = 0;
while (comprarProducto != "EXIT") {    
    switch (comprarProducto){
        case "i7":
        producto1.sumaIVA();
        alert("Usted seleccionó un Microprocesador Intel i7 \nTiene un valor de $ "+ producto1.precio+ " con IVA incluído");
        producto1.vender();
        console.log (producto1.tittle+" fue vendido por un valor de $ "+ producto1.precio+" (IVA incl.)")
        console.log (producto1.vendido)
        totalCompra+=producto1.precio;
        break;

        case "i9":
        producto2.sumaIVA();
        alert("Usted seleccionó un Microprocesador Intel i9 \nTiene un valor de $"+ producto2.precio+ " con IVA incluído");
        producto2.vender();
        console.log (producto2.tittle+" fue vendido por un valor de $ "+ producto2.precio+" (IVA incl.)")
        console.log (producto2.vendido)
        totalCompra+=producto2.precio;
        break;

        case "R7":
        producto3.sumaIVA();
        alert("Usted seleccionó un Microprocesador AMD Ryzen 7 \nTiene un valor de $"+ producto3.precio+ " con IVA incluído");
        producto3.vender();
        console.log (producto3.tittle+" fue vendido por un valor de $ "+ producto3.precio+" (IVA incl.)")
        console.log (producto3.vendido)
        totalCompra+=producto3.precio;
        break;

        case "R9":
        producto4.sumaIVA();
        alert("Usted seleccionó un Microprocesador AMD Ryzen 9 \nTiene un valor de $"+ producto4.precio+ " con IVA incluído");
        producto4.vender();
        console.log (producto4.tittle+" fue vendido por un valor de $ "+ producto4.precio+" (IVA incl.)")
        console.log (producto4.vendido)
        totalCompra+=producto4.precio;
        break;

        case "3080":
        producto5.sumaIVA();
        alert("Usted seleccionó una Placa de Video RTX3080 \nTiene un valor de $"+ producto5.precio+ " con IVA incluído");
        producto5.vender();
        console.log (producto5.tittle+" fue vendido por un valor de $ "+ producto5.precio+" (IVA incl.)")
        console.log (producto5.vendido)
        totalCompra+=producto5.precio;
        break;

        case "3090":
        producto6.sumaIVA();
        alert("Usted seleccionó una Placa de Video RTX3090 \nTiene un valor de $"+ producto6.precio+ " con IVA incluído");
        producto6.vender();
        console.log (producto6.tittle+" fue vendido por un valor de $ "+ producto6.precio+" (IVA incl.)")
        console.log (producto6.vendido)
        totalCompra+=producto6.precio;
        break;

        case "6800":
        producto7.sumaIVA();
        alert("Usted seleccionó una Placa de Video RX6800 \nTiene un valor de $"+ producto7.precio+ " con IVA incluído");
        producto7.vender();
        console.log (producto7.tittle+" fue vendido por un valor de $ "+ producto7.precio+" (IVA incl.)")
        console.log (producto7.vendido)
        totalCompra+=producto7.precio;
        break;

        case "6900":
        producto8.sumaIVA();
        alert("Usted seleccionó una Placa de Video RX6900 \nTiene un valor de $"+ producto8.precio+ " con IVA incluído");
        producto8.vender();
        console.log (producto8.tittle+" fue vendido por un valor de $ "+ producto8.precio+" (IVA incl.)")
        console.log (producto8.vendido)
        totalCompra+=producto8.precio;
        break;

        default:
            alert("Usted no ingresó un producto válido.\nPor favor intente nuevamente");
            break;
    }   
    comprarProducto = prompt ("Ingresa el nombre del producto que quieras agregar. \nO ingresa EXIT para salir. \n(Info para tutor... Opciones: i7, i9, R7, R9, 3080, 3090, 6800, 6900 o EXIT)"); 
}    

console.log ("La compra realizada suma un total de $ " + totalCompra + " con IVA incluído")
