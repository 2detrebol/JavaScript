function Producto(id, tittle, precio, stock, disponible) {
    this.id = id;
    this.tittle = tittle;
    this.precio = parseFloat(precio);
    this.stock = stock;
    this.disponible = disponible;

    //vender
    this.vendido = (cantidad) => {
        this.stock = this.stock - cantidad;
        if (this.stock <= 0) {
            return "No hay stock suficiente";
        } else {
            return this.precio * cantidad;
        }
    };

    //Calcular Stock
    this.calcularStock = function () {
        if (this.stock <= 0) {
            return (this.disponible = false), (this.stock = 0);
        } else {
            return this.stock;
        }
    };
}

let producto1 = new Producto(1, "i7", "60000", 10, true);
let producto2 = new Producto(2, "i9", "80000", 20, true);
let producto3 = new Producto(3, "R7", "55000", 15, true);
let producto4 = new Producto(4, "R9", "75000", 30, true);
let producto5 = new Producto(5, "3080", "300000", 10, true);
let producto6 = new Producto(6, "3090", "600000", 20, true);
let producto7 = new Producto(7, "6800", "260000", 5, true);
let producto8 = new Producto(8, "6900", "320000", 15, true);
let producto9 = new Producto(9, "Z690", "100000", 10, true);
let producto10 = new Producto(10, "X570S", "65000", 20, true);
let producto11 = new Producto(11, "Z690PLUS", "50000", 10, true);
let producto12 = new Producto(12, "B550", "35000", 20, true);

const microprocesador = [];
microprocesador.push(producto1, producto2, producto3, producto4);

const placaVideo = [];
placaVideo.push(producto5, producto6, producto7, producto8);

const motherboards = [];
motherboards.push(producto9, producto10, producto11, producto12);

console.log(motherboards);
console.log(microprocesador);
console.log(placaVideo);


for (const micros of microprocesador)
    console.log(micros.tittle + " = $ " + micros.precio);

for (const video of placaVideo)
    console.log(video.tittle + " = $ " + video.precio);

for (const mothers of motherboards)
    console.log(mothers.tittle + " = $ " + mothers.precio);


/*
let comprarProducto = prompt("Ingresa el nombre del producto que quieres comprar. \nSi deseas salir ingresa EXIT. \n(Opciones: \n 1 = i7, \n 2 = i9, \n 3 = R7, \n 4 = R9, \n 5 = 3080, \n 6 = 3090, \n 7 = 6800, \n 8 = 6900, \n 9 = Z690, \n 10 = X570S, \n 11 = Z690PLUS, \n 12 = B550, \n EXIT = Salir)");

let totalCompra = 0;
while (comprarProducto != "EXIT") {
    switch (comprarProducto) {
        case "1":
            producto1.precio;
            alert("Usted seleccionó un Microprocesador Intel i7 \nTiene un valor de $ " + producto1.precio);
            console.log(producto1.tittle + " fue vendido por un valor de $ " + producto1.precio)
            totalCompra += producto1.precio;
            break;

        case "i9":
            producto2.sumaIVA();
            alert("Usted seleccionó un Microprocesador Intel i9 \nTiene un valor de $" + producto2.precio + " con IVA incluído");
            producto2.vender();
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

console.log("La compra realizada suma un total de $ " + totalCompra + " con IVA incluído")
*/