// DECLARO VARIABLES //
const carrito = document.querySelector('#carrito');
const microprocesadores = document.querySelector("#contenedorMicros");
const placasDeVideo = document.querySelector("#contenedorPlacasV");
const motherboard = document.querySelector("#contenedorMothers");
const memosRam = document.querySelector("#contenedorRam");
const contenedorCarrito = document.querySelector('#listaCarrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciarCarrito');
const listadoGeneral = document.querySelector('#listadoGeneral');
const numeroCarrito = document.getElementById("cart_menu_num");
const procesarCompraBtn = document.querySelector('#procesar-pedido');
let total = document.querySelector('#total');
let articulosCarrito = [];

//FUNCION CONSTRUCTORA DE PRODUCTOS//
function Producto(id, imagen, titulo, descripcion, precio) {
    this.id = id;
    this.imagen = imagen;
    this.titulo = titulo;
    this.descripcion = descripcion;
    this.precio = precio;
    this.cantidad = 1;
    this.subtotal = 0;
}

//CREACION DE PRODUCTOS//
const listaProductos = [
    new Producto(1, "./IMAGENES/Items/micros/i7.png", "Intel i7", "Intel Core i7-9700K 8 núcleos y 4.9 GHz de frecuencia gráfica int.", 60000),
    new Producto(2, "./IMAGENES/Items/micros/i9.png", "Intel i9", "Intel Core i9-10900F 10 núcleos y 5.2 GHz de frecuencia, gráfica int.", 80000),
    new Producto(3, "./IMAGENES/Items/micros/R7.png", "AMD Ryzen 7", "AMD Ryzen 7 5700G 8 núcleos y 4.6 GHz con gráfica integrada", 55000),
    new Producto(4, "./IMAGENES/Items/micros/R9.png", "AMD Ryzen 9", "AMD Ryzen 9 5900X 12 núcleos 4.8 GHz y 24 hilos con gráfica integrada", 75000),
    new Producto(5, "./IMAGENES/Items/placasv/RTX3080.png", "RTX 3080 MSI", "MSI NVIDIA GeForce RTX3080 Gaming X Trio 10Gb GDDR6X", 300000),
    new Producto(6, "./IMAGENES/Items/placasv/RTX3090.png", "RTX 3090 TUF", "ASUS NVIDIA GeForce RTX3090 TUF GAMING 24GB GDDR6X", 600000),
    new Producto(7, "./IMAGENES/Items/placasv/RX6800.png", "RX 6800", "Sapphire Radeon RX 6800 NITRO+ 16Gb GDDR6", 260000),
    new Producto(8, "./IMAGENES/Items/placasv/RX6900.png", "RX 6900", "MSI Radeon RX 6900 XT GAMING Z TRIO 16Gb GDDR6", 320000),
    new Producto(9, "./IMAGENES/Items/mothers/Z690.png", "Asus Z690", "Asus Rog Maximus Z690 Hero - Intel® Z690 ATX motherboard with 20+1 power stages, DDR5, Five M.2, USB 3.2 Gen 2x2 front-panel connector, Dual Thunderbolt™, PCIe® 5.0, Onboard WiFi 6E & Aura Sync RGB", 100000),
    new Producto(10, "./IMAGENES/Items/mothers/X570S.png", "Aorus X570S", "GIGABYTE X570S AORUS ELITE - AMD Ryzen™, Twin 12+2 Phases Digital VRM Solution with 60A DrMOS, DDR4, SuperSpeed USB 3.2 Gen 2x2 TYPE-C® delivers up to 20Gb/s transfer speeds", 65000),
    new Producto(11, "./IMAGENES/Items/mothers/Z690PLUS.png", "Z690Plus TUF", "Asus Z690Plus TUF Gaming - Intel® Z690 (LGA 1700) ATX gaming motherboard, PCIe® 5.0, DDR4, four M.2 slots, WiFi 6 and Intel 2.5 Gb Ethernet, Thunderbolt™ 4 support and Aura Sync RGB", 50000),
    new Producto(12, "./IMAGENES/Items/mothers/B550.png", "Gigabyte B550", "Gigabyte B550 Aorus Pro - Supports AMD Ryzen™, DDR4, Ultra Durable™ PCIe 4.0, AMP-UP Audio, USB 3.2 Gen2 Type-C™ & HDMI Support, RGB FUSION 2.0 Supports Addressable LED & RGB LED Strips", 35000),
    new Producto(13, "./IMAGENES/Items/ram/ballistix16gb.png", "16Gb-3200Mhz", "Memoria Ram DDR4 - Ballistix - 16Gb 3200 Mhz Ballistix Rgb Negro", 13500),
    new Producto(14, "./IMAGENES/Items/ram/renegade16gb.png", "16Gb-3600Mhz", "Memoria Ram DDR4 - Kingston Renegade - 16Gb 3600 Mhz Renegade Kingston Fury Rgb", 15000),
    new Producto(15, "./IMAGENES/Items/ram/fury8gb.png", "8Gb-5600Mhz", "Memoria Ram DDR5 - Kingston Fury - 8Gb 5600 Mhz Beast Kingston Fury", 16500),
    new Producto(16, "./IMAGENES/Items/ram/fury16gb.png", "16Gb-5600Mhz", "Memoria Ram DDR5 - Kingston Fury - 16Gb 5600 Mhz Beast Kingston Fury", 29000),
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

//EVENTOS SEGUN CLICKS EN BOTONES//
cargarEventListeners();

function cargarEventListeners() {
    // AGREGAR PRODUCTO A CARRITO CON BOTON //
    listadoGeneral.addEventListener('click', agregarProducto);

    // BORRAR PRODUCTO ENTERO DEL CARRITO //
    carrito.addEventListener('click', eliminarProducto);

    // BOTONES + Y - //
    document.addEventListener("click", (e) => {
        eliminarUnidad(e);
        sumarUnidad(e);
    });

    // MUESTRA PRODUCTOS LOCALSTORAGE //
    document.addEventListener('DOMContentLoaded', () => {
        articulosCarrito = JSON.parse(localStorage.getItem('carrito')) || [];
        carritoHTML();
    })

    // VACIAR EL CARRITO //
    vaciarCarritoBtn.addEventListener('click', () => {

        articulosCarrito = []; // RESETEA //
        localStorage.removeItem('carrito');
        limpiarHTML(); // ELIMINA TODO EL HTML //        
        changeColor()
        numeroCarrito.innerHTML = totalCantidad();
    });
}

// FUNCIONES //

//MOSTRAR EN EL HTML//
function agregarHtml(listaProductos) {
    let contenedorCards = document.createElement("div");
    contenedorCards.className = "accordion-body d-flex row justify-content-center"
    listaProductos.forEach(element => {
        //DESTRUCTURING//        
        const {
            id,
            imagen,
            titulo,
            descripcion,
            precio
        } = element;
        contenedorCards.innerHTML += `<div class="card mb-3" style="width: 18rem; background-color: #000;">
      <img src=${imagen} class="card-img-top fotoItem" alt="${titulo}">
      <div class="card-body product" id="${id}">
          <h5 class="card-title productTittle text-center">${titulo}</h5>
          <p class="card-text">${descripcion}</p>
          <span class="productPrice">${formatoMoneda(precio)}</span>
          <a class="btn btn-primary botonAgregar" data-id="${id}">Agregar al carrito</a>
      </div>                            
  </div>`;
    });
    return contenedorCards;
}

// SIN USAR DESTRUCTURING ERA ASÍ...//
/*function agregarHtml(listaProductos) {
    let contenedorCards = document.createElement("div");
    contenedorCards.className = "accordion-body d-flex row justify-content-center"
    listaProductos.forEach((element) => {
        contenedorCards.innerHTML += `<div class="card mb-3" style="width: 18rem; background-color: #000;">
      <img src=${element.imagen} class="card-img-top fotoItem" alt="${element.titulo}">
      <div class="card-body product" id="${element.id}">
          <h5 class="card-title productTittle text-center">${element.titulo}</h5>
          <p class="card-text">${element.descripcion}</p>
          <span class="productPrice">${formatoMoneda(element.precio)}</span>
          <a class="btn btn-primary botonAgregar" data-id="${element.id}">Agregar al carrito</a>
      </div>                            
  </div>`;
    });
    return contenedorCards;
}*/

//USO FUNCION agregarHTML Y MUESTROS LOS PRODUCTOS SEGÚN CADA RUBRO - VER LINEAS "ARRAYS PARA HTML"//
let micros = agregarHtml(microprocesador);
microprocesadores.appendChild(micros);

let placasVideo = agregarHtml(placaVideo);
placasDeVideo.appendChild(placasVideo);

let mothers = agregarHtml(motherboards);
motherboard.appendChild(mothers);

let rams = agregarHtml(memoriasRam);
memosRam.appendChild(rams);

function agregarProducto(e) {
    if (e.target.classList.contains("botonAgregar")) {
        const productoSelecionado = e.target.parentElement.parentElement;
        leerDatosProducto(productoSelecionado);
        Toastify({
            text: "Producto agregado",
            duration: 2700,
            newWindow: true,
            gravity: "bottom", // `top` or `bottom`
            position: "right", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
                background: "#000",
                color: "greenyellow",
            },
        }).showToast();
    }
}

// ELIMINAR PRODUCTO ENTERO DEL CARRITO (NO POR UNIDAD) //
function eliminarProducto(e) {
    if (e.target.classList.contains('borrarProducto')) {
        const productoId = e.target.getAttribute('data-id');

        // BORRA DE "articulosCarrito" SEGUN EL DATA ID //
        articulosCarrito = articulosCarrito.filter(producto => producto.id !== productoId);
        carritoHTML(); // ITERA SOBRE carrito Y MUESTRA HTML //
    }
}

// LEE EL HTML QUE TIENE UN CLICK Y SACA LA INFO DEL PRODCUTO //
function leerDatosProducto(producto) {
    const id = producto.querySelector('.botonAgregar').getAttribute('data-id');
    const imagen = producto.querySelector('img').src;
    const titulo = producto.querySelector('.product h5').textContent;
    const descripcion = producto.querySelector('.product p').textContent;
    const precio = producto.querySelector('.product span').textContent;

    // CREA NUEVO PRODUCTO CON LOS DATOS QUE SACAMOS //
    const infoProducto = new Producto(id, imagen, titulo, descripcion, precio);

    infoProducto.subtotal = Number((infoProducto.precio.replace('$', "")) * 1000) * infoProducto.cantidad;

    // VERIFICA SI YA EXISTE EL PRODUCTO EN EL CARRITO //
    const existe = articulosCarrito.some(producto => producto.id === infoProducto.id);
    if (existe) {
        // ACTUALIZAR SOLO LA CANTIDAD Y NO DUPLICAR//
        const productos = articulosCarrito.map(producto => {
            if (producto.id === infoProducto.id) {
                producto.cantidad++;
                producto.subtotal = Number(((producto.precio.replace('$', "")) * 1000) * producto.cantidad);
                return producto; // DEVUELVE OBJETO ACTUALIZADO SUMANDO CANTIDAD Y SUBTOTAL//
            } else {
                return producto; // DEVUELVE LOS OBJETOS QUE NO SE DUPLICAN, HACE UNA LINEA MÁS //
            }
        });

        // SPREAD OPERATOR - COPIA TODO O PARTE DE ARRAY U OBJETO EXISTENTE EN OTRO ARRAY U OBJETO - ENVÍA LOS PRODUCTOS DEL ARRAY COMO PARAMETROS INDIVIDUALES //
        articulosCarrito = [...productos];

    } else {
        // SE AGREGAN AL ARRAY //
        articulosCarrito = [...articulosCarrito, infoProducto];
    }
    carritoHTML();
}

function carritoHTML() {
    // LIMPIA HTML //
    limpiarHTML();

    // RECORRE EL ARRAY CARRITO Y MUESTRA EN HTML //
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
        row.className = "text-center align-middle contenidoCarro";
        row.innerHTML = `
            <th class="imgProducto">
                <img src="${imagen}" width="50">
            </th>
            <th>${titulo}</th>            
            <th><i type="button" class="bi bi-dash-circle-fill menos" data-id="${id}"></i>${cantidad}<i type="button" class="bi bi-plus-circle-fill mas" data-id="${id}"></i></th>
            <th>${precio}</th>
            <th>${formatoMoneda(subtotal)}</th>
            
            <a class="bi bi-x-circle-fill borrarProducto" data-id="${id}" style="display: table-cell; vertical-align: inherit; color: #000; cursor:pointer; font-size: 1.05rem"></a>
            
        `;
        // HTML DEL carrito EN EL tbody //
        contenedorCarrito.appendChild(row);
    });
    numeroCarrito.innerHTML = totalCantidad();
    changeColor();

    // PASA EL carrito AL LOCALSTORAGE //
    sincronizarStorage();
}

function sincronizarStorage() {
    localStorage.setItem('carrito', JSON.stringify(articulosCarrito));
}

// BORRA UNA UNIDAD DEL PRODUCTO CON EL - //
function eliminarUnidad(e) {
    let productoMenos;
    if (e.target.matches(".menos")) {
        productoMenos = articulosCarrito.find(
            (el) => Number(el.id) === Number(e.target.dataset.id)
        );
        if (productoMenos.cantidad == 1) {
            articulosCarrito = articulosCarrito.filter(producto => producto.id !== productoMenos.id);
            carritoHTML();
        } else {
            productoMenos.cantidad--;
            productoMenos.subtotal = Number((productoMenos.precio.replace('$', "")) * 1000) * productoMenos.cantidad;
            carritoHTML();
        }
        sincronizarStorage();
    }
}

// SUMA UNA UNIDAD DEL PRODUCTO CON EL + //
function sumarUnidad(e) {
    if (e.target.matches(".mas")) {
        const productoMas = articulosCarrito.find(
            (el) => Number(el.id) === Number(e.target.dataset.id)
        );
        productoMas.cantidad++;
        productoMas.subtotal = Number((productoMas.precio.replace('$', "")) * 1000) * productoMas.cantidad;
        sincronizarStorage();
        carritoHTML();
    }
}

function totalCantidad() {
    let cantidadFinal = 0;
    cantidadFinal = articulosCarrito.reduce((total, producto) => total + producto.cantidad, 0);
    return cantidadFinal;
}

//CAMBIA LOS COLORES DE CIRCULO Y NUMERO DEL CONTADOR DE CANTIDADES SI HAY AL MENOS 1 PRODUCTO EN EL CARRITO //
function changeColor() {
    if (totalCantidad() > 0) {
        numeroCarrito.style.color = "white";
        numeroCarrito.style.background = "red";
    } else {
        numeroCarrito.style.color = "greenyellow";
        numeroCarrito.style.background = "#000";
    }
}

// BORRA LOS PRODUCTOS DEL tbody //
function limpiarHTML() {
    // LIMPIA EL HTML - FUNCIONARÍA IGUAL CON = contenedorCarrito.innerHTML = '';
    while (contenedorCarrito.firstChild) {
        contenedorCarrito.removeChild(contenedorCarrito.firstChild);
    }
    total.innerHTML = formatoMoneda(totalGeneral());
}

function formatoMoneda(e) {
    return new Intl.NumberFormat('es-ar', {
        style: 'currency',
        currency: 'ARS',
        minimumFractionDigits: 0,
    }).format(e);
}

function totalGeneral() {
    let productoTotal = articulosCarrito.reduce((total, producto) => total + producto.subtotal, 0);
    return productoTotal;
}

// PROCESAR COMPRA - CONFIRMAR //
procesarCompraBtn.addEventListener('click', () => {
    if (totalCantidad() === 0) {
        swal({
            title: "¡El carrito esta vacio!",
            text: "Agrega algunos productos al carrito",
            icon: "error",
        });
    } else {
        swal({
                title: "¿Estás seguro de que deseas realizar la compra?",
                text: "Una vez confirmada no podrás modificarla",
                icon: "warning",
                buttons: true,
                dangerMode: true,
            })
            .then((confirma) => {
                if (confirma) {
                    swal({
                        title: "¡Gracias por tu compra!",
                        text: "Próximamente nos contactaremos para acordar el envío",
                        icon: "success",
                    })
                    articulosCarrito = [];
                    localStorage.removeItem('carrito');
                    limpiarHTML();
                    changeColor()
                    numeroCarrito.innerHTML = totalCantidad();;
                } else {
                    swal({
                        title: "Compra cancelada",
                        text: "Guardamos tus productos en el carrito.\nPodrás completar tu compra más tarde.",
                    });
                }
            });
    }
})