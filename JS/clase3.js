/*FUNCION GLOBAL*/
function sumar (precio1, precio2) {
        return precio1 + precio2;    
}
let resultado = sumar (8,3);
console.log (resultado)

/*FUNCIONES LOCALES*/
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

/*FUNCIONES FLECHA*/

const suma = (a, b) => {return a + b};
const resta = function (a, b) {return a - b};
//Se puede escribir tanto con flecha como con function si son simples, atajo//
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


/*OBJETO*/
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

/*CONSTRUCTORES DE OBJETOS - ES UNA FUNCIÓN PARA CREAR NUEVO OBJETO CUANDO HAGA FALTA (SUERTE DE PLANTILLA DE OBJETO)*/

function producto (id, tittle, precio) {
    this.id = id;
    this.tittle = tittle;
    this.precio = precio;
}

const productoB = new producto(1, "R7", "$ 55000")
const productoC = new producto(2, "R9", "$ 75000")

console.log (productoB, productoC)

/*CLASES  Y MÉTODOS (SON FUNCIONES QUE SOLO SE USAN DENTRO DEL OBJETO QUE LOS CONTIENE)*/

class ProductoD {
    constructor (id, tittle, precio) {
        this.id = id;
        this.tittle = tittle;
        this.precio = parseFloat (precio);
        this.vendido = false;
    }
    sumaIVA () {
        this.precio = this.precio * 1.21;
    }
    vender () {
        this.vendido = true;
    }
}

const producto1 = new ProductoD (10,"i7","60000");
const producto2 = new ProductoD (11,"i9","80000");
producto1.sumaIVA();
producto2.sumaIVA();
producto1.vender ();

console.log (producto1)
console.log (producto2)