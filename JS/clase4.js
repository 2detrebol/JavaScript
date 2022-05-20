function Producto(id, tittle, precio, stock) {
    this.id = id;
    this.tittle = tittle;
    this.precio = parseFloat(precio);
    this.stock = stock;

    //vender
    this.vendido = function (cantidad) {
        if (cantidad <= this.stock) {
            return this.stock -= cantidad;
        }
    };
}

const carrito = []
let totalCompra = 0;
let totalCantidad = 0;

const productosGenerales = [
    new Producto(1, "i7", 60000, 5),
    new Producto(2, "i9", 80000, 20),
    new Producto(3, "R7", 55000, 15),
    new Producto(4, "R9", 75000, 30),
    new Producto(5, "3080", 300000, 10),
    new Producto(6, "3090", 600000, 20),
    new Producto(7, "6800", 260000, 5),
    new Producto(8, "6900", 320000, 15),
    new Producto(9, "Z690", 100000, 10),
    new Producto(10, "X570S", 65000, 20),
    new Producto(11, "Z690PLUS", 50000, 10),
    new Producto(12, "B550", 35000, 20),
];

function mostrarProductos(array) {
    let productos = "";
    array.forEach((element) => {
        productos += `${element.id} - ${element.tittle} - $ ${element.precio} \n`;
    });
    productos += "0 - para salir";
    return productos;
}

function elegirProducto(variable) {
    let producto = productosGenerales.find((el) => el.id === variable);
    return producto;
}

let comprarProducto = parseFloat(prompt("Ingresa el número del producto que quieres comprar.\nOpciones:\n" + mostrarProductos(productosGenerales)));

while (comprarProducto != 0) {
    let p = elegirProducto(comprarProducto);
    if (p.stock === 0) {
        alert("No hay stock");
    }
    let cantidadProducto = parseFloat(
        prompt(
            "Ingresa la cantidad de unidades del producto seleccionado que quieres agregar a tu compra"
        ));
    if (cantidadProducto > p.stock) {
        alert("No hay suficiente stock, solo quedan " + p.stock)
    } else {
        p.vendido(cantidadProducto);
        p.stock = cantidadProducto;
        carrito.push(p);
        totalCantidad += parseFloat(cantidadProducto);
    }
    totalCompra += p.precio * cantidadProducto;
    let mensaje = verCarrito(carrito);
    alert(mensaje);
    comprarProducto = parseFloat(prompt("Ahora ingresa el número del producto que quieres agregar a la seleccion anterior.\nOpciones:\n" + mostrarProductos(productosGenerales)));
}

function verCarrito(array) {
    let mensaje = "";
    array.forEach((el) => {
        mensaje = `Usted seleccionó ${totalCantidad} unidad/es del producto ${el.tittle}`
    })
    return mensaje
}

for (const {} of carrito) {
    console.log("En el carrito hay un total de " + totalCantidad + " productos y suman un total de $ " + totalCompra);
}

console.log(carrito);