// variables
const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#listaCarrito tbody')
const vaciarCarritoBtn = document.querySelector('#vaciarCarrito');
const listadoGeneral = document.querySelector('#listadoGeneral');
const numeroCarrito = document.getElementById("cart_menu_num");
let contador = 0;
let total = document.querySelector('#total');
let articulosCarrito = [];

//FUNCION CONSTRUCTORA DE PRODUCTOS//
function Producto(id, imagen, titulo, descripcion, precio, stock) {
    this.id = id;
    this.imagen = imagen;
    this.titulo = titulo;
    this.descripcion = descripcion;
    this.precio = precio;
    this.stock = stock;
    this.cantidad = 1;
    this.subtotal = 0;

    this.vendido = function (cantidadStock) {
        if (cantidadStock <= this.stock) {
            return this.stock -= cantidadStock;
        }
    };
}

//CREACION DE PRODUCTOS//
const listaProductos = [
    new Producto(1, "./IMAGENES/Items/micros/i7.png", "Intel i7", "Intel Core i7-9700K 8 núcleos y 4.9 GHz de frecuencia gráfica int.", 60000, 5),
    new Producto(2, "./IMAGENES/Items/micros/i9.png", "Intel i9", "Intel Core i9-10900F 10 núcleos y 5.2 GHz de frecuencia, gráfica int.", 80000, 20),
    new Producto(3, "./IMAGENES/Items/micros/R7.png", "AMD Ryzen 7", "AMD Ryzen 7 5700G 8 núcleos y 4.6 GHz con gráfica integrada", 55000, 15),
    new Producto(4, "./IMAGENES/Items/micros/R9.png", "AMD Ryzen 9", "AMD Ryzen 9 5900X 12 núcleos 4.8 GHz y 24 hilos con gráfica integrada", 75000, 30),
    new Producto(5, "./IMAGENES/Items/placasv/RTX3080.png", "RTX 3080 MSI", "MSI NVIDIA GeForce RTX3080 Gaming X Trio 10Gb GDDR6X", 300000, 10),
    new Producto(6, "./IMAGENES/Items/placasv/RTX3090.png", "RTX 3090 TUF", "ASUS NVIDIA GeForce RTX3090 TUF GAMING 24GB GDDR6X", 600000, 20),
    new Producto(7, "./IMAGENES/Items/placasv/RX6800.png", "RX 6800", "Sapphire Radeon RX 6800 NITRO+ 16Gb GDDR6", 260000, 5),
    new Producto(8, "./IMAGENES/Items/placasv/RX6900.png", "RX 6900", "MSI Radeon RX 6900 XT GAMING Z TRIO 16Gb GDDR6", 320000, 15),
    new Producto(9, "./IMAGENES/Items/mothers/Z690.png", "ASUS ROG MAXIMUS Z690 HERO", "Intel® Z690 ATX motherboard with 20+1 power stages, DDR5, Five M.2, USB 3.2 Gen 2x2 front-panel connector, Dual Thunderbolt™, PCIe® 5.0, Onboard WiFi 6E & Aura Sync RGB", 100000, 10),
    new Producto(10, "./IMAGENES/Items/mothers/X570S.png", "AORUS X570S ELITE", "GIGABYTE X570S AORUS ELITE - AMD Ryzen™, Twin 12+2 Phases Digital VRM Solution with 60A DrMOS, DDR4, SuperSpeed USB 3.2 Gen 2x2 TYPE-C® delivers up to 20Gb/s transfer speeds", 65000, 20),
    new Producto(11, "./IMAGENES/Items/mothers/Z690PLUS.png", "ASUS Z690PLUS TUF GAMING", "Intel® Z690 (LGA 1700) ATX gaming motherboard, PCIe® 5.0, DDR4, four M.2 slots, WiFi 6 and Intel 2.5 Gb Ethernet, Thunderbolt™ 4 support and Aura Sync RGB", 50000, 10),
    new Producto(12, "./IMAGENES/Items/mothers/B550.png", "GIGABYTE B550 AORUS PRO AC 5 PCIE", "Supports AMD Ryzen™, DDR4, Ultra Durable™ PCIe 4.0, AMP-UP Audio, USB 3.2 Gen2 Type-C™ & HDMI Support, RGB FUSION 2.0 Supports Addressable LED & RGB LED Strips", 35000, 20),
    new Producto(13, "./IMAGENES/Items/ram/ballistix16gb.png", "DDR4 - 16Gb BALLISTIX", "Memoria Ram DDR4 - 16Gb 3200 Mhz Ballistix Rgb Negro", 13500, 25),
    new Producto(14, "./IMAGENES/Items/ram/renegade16gb.png", "DDR4 - 16Gb KINGSTON RENEGADE", "Memoria Ram DDR4 - 16Gb 3600 Mhz Renegade Kingston Fury Rgb", 15000, 15),
    new Producto(15, "./IMAGENES/Items/ram/fury8gb.png", "DDR5 - 8Gb KINGSTON FURY", "Memoria Ram DDR5 - 8Gb 5600 Mhz Beast Kingston Fury", 16500, 25),
    new Producto(16, "./IMAGENES/Items/ram/fury16gb.png", "DDR5 - 16Gb KINGSTON FURY", "Memoria Ram DDR5 - 16Gb 5600 Mhz Beast Kingston Fury", 29000, 15),
]

//ARRAYS PARA HTML//
const microprocesador = [];
microprocesador.push(listaProductos[0], listaProductos[1], listaProductos[2], listaProductos[3]);

const placaVideo = [];
placaVideo.push(listaProductos[4], listaProductos[5], listaProductos[6], listaProductos[7]);

const motherboards = [];
motherboards.push(listaProductos[8], listaProductos[9], listaProductos[10], listaProductos[11]);

const memoriasRam = [];
memoriasRam.push(listaProductos[12], listaProductos[13], listaProductos[14], listaProductos[15]);

//MOSTRAR EN EL HTML//
function agregarHtml(listaProductos) {
    let contenedorCards = document.createElement("div");
    contenedorCards.className = "accordion-body d-flex row justify-content-center"
    listaProductos.forEach((element) => {
        contenedorCards.innerHTML += `<div class="card mb-3" style="width: 18rem; background-color: #000;">
      <img src=${element.imagen} class="card-img-top fotoItem" alt="${element.titulo}">
      <div class="card-body product" id="${element.id}">
          <h5 class="card-title productTittle text-center">${element.titulo}</h5>
          <p class="card-text">${element.descripcion}</p>
          <span class="productPrice">$ ${element.precio}</span>
          <a class="btn btn-primary botonAgregar" data-id="${element.id}">Agregar al carrito</a>
      </div>                            
  </div>`;
    });
    return contenedorCards;
}

//USO FUNCION agregarHTML Y MUESTROS LOS PRODUCTOS SEGÚN CADA RUBRO - VER LINEAS "ARRAYS PARA HTML"//
let micros = agregarHtml(microprocesador);
document.querySelector("#contenedorMicros").appendChild(micros);

let placasVideo = agregarHtml(placaVideo);
document.querySelector("#contenedorPlacasV").appendChild(placasVideo);

let mothers = agregarHtml(motherboards);
document.querySelector("#contenedorMothers").appendChild(mothers);

let rams = agregarHtml(memoriasRam);
document.querySelector("#contenedorRam").appendChild(rams);


//EVENTOS SEGUN CLICKS EN BOTONES//
cargarEventListeners();

function cargarEventListeners() {
    // Agregamos un producto presionando "Agregar al Carrito"
    listadoGeneral.addEventListener('click', agregarProducto);

    // Elimina productos del carrito
    carrito.addEventListener('click', eliminarProducto);

    // Muestra los productos de Local Storage
    document.addEventListener('DOMContentLoaded', () => {
        articulosCarrito = JSON.parse(localStorage.getItem('carrito')) || [];

        carritoHTML();
    })

    // Vaciar el carrito
    vaciarCarritoBtn.addEventListener('click', () => {

        articulosCarrito = []; // reseteamos el arreglo
        localStorage.removeItem('carrito');
        limpiarHTML(); // Eliminamos todo el  HTML
        console.clear();
        console.log(articulosCarrito);
        numeroCarrito.innerHTML = totalCantidad();
    });
}

// FUNCIONES //
function agregarProducto(e) {
    if (e.target.classList.contains("botonAgregar")) {
        const productoSelecionado = e.target.parentElement.parentElement;
        leerDatosProducto(productoSelecionado);
        document.documentElement.scrollTop = 0;
        document.querySelector(".dropdown-menu").classList.add("show");
        document.querySelector(".dropdown").setAttribute("aria-expanded", "true");
    }
}


// Elimina un producto del carrito
function eliminarProducto(e) {
    if (e.target.classList.contains('borrarProducto')) {
        // console.log(e.target.getAttribute('data-id'));
        const productoId = e.target.getAttribute('data-id');


        // Elimina del arreglo de articulosCarrito por el data-id
        articulosCarrito = articulosCarrito.filter(producto => producto.id !== productoId);
        console.clear();
        console.log(articulosCarrito); // Muestra el arreglo actualizado. Sin el producto que fue eliminado
        carritoHTML(); // Iterar sobre el carrito y mostrar su HTML        
    }
}


// Lee el contenido del HTML al que le dimos click y extrae la información del producto//
function leerDatosProducto(producto) {

    const id = producto.querySelector('.botonAgregar').getAttribute('data-id');
    const imagen = producto.querySelector('img').src;
    const titulo = producto.querySelector('.product h5').textContent;
    const descripcion = producto.querySelector('.product p').textContent;
    const precio = producto.querySelector('.product span').textContent;

    // Creo el nuevo producto
    const infoProducto = new Producto(id, imagen, titulo, descripcion, precio);
    //console.log(infoProducto);

    infoProducto.subtotal = Number(infoProducto.precio.replace('$', "")) * infoProducto.cantidad;


    // Revisa si un elemento ya existe en el carrito
    const existe = articulosCarrito.some(producto => producto.id === infoProducto.id);
    if (existe) {
        // Actualizamos la cantidad
        const productos = articulosCarrito.map(producto => {
            if (producto.id === infoProducto.id) {
                producto.cantidad++;
                producto.subtotal = Number(infoProducto.precio.replace('$', "")) * producto.cantidad;
                return producto; // retorna el objeto actualizado
            } else {
                return producto; // retorna los objetos que no son los duplicados
            }
        });


        // spread operator
        articulosCarrito = [...productos];

    } else {
        // Agrega elementos al arreglo de carrito
        articulosCarrito = [...articulosCarrito, infoProducto];
        // articulosCarrito.push(infoProducto);
    }

    // console.clear();
    console.log(articulosCarrito);
    carritoHTML();
}

function carritoHTML() {

    // Limpiar el HTML
    limpiarHTML();

    // Recorre el carrito y genera el HTML
    articulosCarrito.forEach(producto => {
        const {
            imagen,
            titulo,
            precio,
            cantidad,
            subtotal,
            id
        } = producto;
        const row = document.createElement('tr');
        row.className = "text-center align-middle";
        row.innerHTML = `
            <th>
                <img src="${imagen}" width="100">
            </th>
            <th>${titulo}</th>            
            <th><i type="button" class="bi bi-dash-circle-fill menos" data-id="${id}"></i>${cantidad}<i type="button" class="bi bi-plus-circle-fill mas" data-id="${id}"></i></th>
            <th>${precio}</th>
            <th>$${subtotal}</th>
            <th>
            <a class="bi bi-x-circle-fill borrarProducto" data-id="${id}" style="display: table-cell; vertical-align: inherit; color: #000; cursor:pointer; font-size: 1.05rem"></a>
            </th>
        `;
        // Agregamos el HTML del carrito en el tbody
        contenedorCarrito.appendChild(row);
    });

    numeroCarrito.innerHTML = totalCantidad();

    // Agregar el carrito de compras al storage
    sincronizarStorage();

}


function sincronizarStorage() {
    localStorage.setItem('carrito', JSON.stringify(articulosCarrito));
}


function totalCantidad() {
    let cantidadFinal = 0;
    cantidadFinal = articulosCarrito.reduce((total, producto) => total + producto.cantidad, 0);
    return cantidadFinal;
}


// Elimina los productos del tbody
function limpiarHTML() {
    // forma lenta de limpiar el HTML
    // contenedorCarrito.innerHTML = '';

    // mejor performance para limpiar nuestro HTML
    while (contenedorCarrito.firstChild) {
        contenedorCarrito.removeChild(contenedorCarrito.firstChild);
    }

    total.innerHTML = `$${totalGeneral()}`;
}

function totalGeneral() {
    let productoTotal = articulosCarrito.reduce((total, producto) => total + producto.subtotal, 0);
    return productoTotal;
}


function eliminarUnidad(e) {
    let productoMenos;
    if (e.target.matches(".menos")) {
        productoMenos = articulosCarrito.find(
            (el) => Number(el.id) === Number(e.target.dataset.id)
        );
        if (productoMenos.cantidad <= 1) {
            articulosCarrito.splice(productoMenos, 1);
            carritoHTML();
        } else {
            productoMenos.cantidad--;
            sincronizarStorage();
        }
    }
}

function sumarUnidad(e) {
    let productoMas;
    if (e.target.matches(".mas")) {
        productoMas = articulosCarrito.find(
            (el) => Number(el.id) === Number(e.target.dataset.id)
        );
        productoMas.cantidad++;
    }

    sincronizarStorage();
    carritoHTML();
}

document.addEventListener("click", (e) => {
    eliminarUnidad(e);
    sumarUnidad(e);
});