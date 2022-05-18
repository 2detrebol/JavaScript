function Producto(id, imagen, tittle, descripcion, precio, stock) {
    this.id = id;
    this.imagen = imagen;
    this.tittle = tittle;
    this.descripcion = descripcion;
    this.precio = precio;
    this.stock = stock;

    this.vendido = function (cantidad) {
        if (cantidad <= this.stock) {
            return this.stock -= cantidad;
        }
    };
}

const microprocesador = [
    new Producto(1, "./IMAGENES/Items/micros/i7.png", "Intel i7", "Intel Core i7-9700K 8 núcleos y 4.9 GHz de frecuencia gráfica int.", 60000, 5),
    new Producto(2, "./IMAGENES/Items/micros/i9.png", "Intel i9", "Intel Core i9-10900F 10 núcleos y 5.2 GHz de frecuencia, gráfica int.", 80000, 20),
    new Producto(3, "./IMAGENES/Items/micros/R7.png", "AMD Ryzen 7", "AMD Ryzen 7 5700G 8 núcleos y 4.6 GHz con gráfica integrada", 55000, 15),
    new Producto(4, "./IMAGENES/Items/micros/R9.png", "AMD Ryzen 9", "AMD Ryzen 9 5900X 12 núcleos 4.8 GHz y 24 hilos con gráfica integrada", 75000, 30),
]

const placaVideo = [
    new Producto(5, "./IMAGENES/Items/placasv/RTX3080.png", "RTX 3080 MSI", "MSI NVIDIA GeForce RTX3080 Gaming X Trio 10Gb GDDR6X", 300000, 10),
    new Producto(6, "./IMAGENES/Items/placasv/RTX3090.png", "RTX 3090 TUF", "ASUS NVIDIA GeForce RTX3090 TUF GAMING 24GB GDDR6X", 600000, 20),
    new Producto(7, "./IMAGENES/Items/placasv/RX6800.png", "RX 6800", "Sapphire Radeon RX 6800 NITRO+ 16Gb GDDR6", 260000, 5),
    new Producto(8, "./IMAGENES/Items/placasv/RX6900.png", "RX 6900", "MSI Radeon RX 6900 XT GAMING Z TRIO 16Gb GDDR6", 320000, 15),
]

const motherboards = [
    new Producto(9, "./IMAGENES/Items/mothers/Z690.png", "ASUS ROG MAXIMUS Z690 HERO", "Intel® Z690 ATX motherboard with 20+1 power stages, DDR5, Five M.2, USB 3.2 Gen 2x2 front-panel connector, Dual Thunderbolt™, PCIe® 5.0, Onboard WiFi 6E & Aura Sync RGB", 100000, 10),
    new Producto(10, "./IMAGENES/Items/mothers/X570S.png", "AORUS X570S ELITE", "GIGABYTE X570S AORUS ELITE - AMD Ryzen™, Twin 12+2 Phases Digital VRM Solution with 60A DrMOS, DDR4, SuperSpeed USB 3.2 Gen 2x2 TYPE-C® delivers up to 20Gb/s transfer speeds", 65000, 20),
    new Producto(11, "./IMAGENES/Items/mothers/Z690PLUS.png", "ASUS Z690PLUS TUF GAMING", "Intel® Z690 (LGA 1700) ATX gaming motherboard, PCIe® 5.0, DDR4, four M.2 slots, WiFi 6 and Intel 2.5 Gb Ethernet, Thunderbolt™ 4 support and Aura Sync RGB", 50000, 10),
    new Producto(12, "./IMAGENES/Items/mothers/B550.png", "GIGABYTE B550 AORUS PRO AC 5 PCIE", "Supports AMD Ryzen™, DDR4, Ultra Durable™ PCIe 4.0, AMP-UP Audio, USB 3.2 Gen2 Type-C™ & HDMI Support, RGB FUSION 2.0 Supports Addressable LED & RGB LED Strips", 35000, 20),
]
const memoriasRam = [
    new Producto(13, "./IMAGENES/Items/ram/ballistix16gb.png", "DDR4 - 16Gb BALLISTIX", "Memoria Ram DDR4 - 16Gb 3200 Mhz Ballistix Rgb Negro", 13500, 25),
    new Producto(14, "./IMAGENES/Items/ram/renegade16gb.png", "DDR4 - 16Gb KINGSTON RENEGADE", "Memoria Ram DDR4 - 16Gb 3600 Mhz Renegade Kingston Fury Rgb", 15000, 15),
    new Producto(15, "./IMAGENES/Items/ram/fury8gb.png", "DDR5 - 8Gb KINGSTON FURY", "Memoria Ram DDR5 - 8Gb 5600 Mhz Beast Kingston Fury", 16500, 25),
    new Producto(16, "./IMAGENES/Items/ram/fury16gb.png", "DDR5 - 16Gb KINGSTON FURY", "Memoria Ram DDR5 - 16Gb 5600 Mhz Beast Kingston Fury", 29000, 15),
]

const listaProductos = [];
listaProductos.push(microprocesador, placaVideo, motherboards, memoriasRam);

//PARA MOSTRAR EN EL HTML//

let contenedorCards1 = document.createElement("div");
contenedorCards1.className = "accordion-body d-flex row justify-content-center"
microprocesador.forEach((element) => {
    contenedorCards1.innerHTML += `<div class="card mb-3" style="width: 18rem; background-color: #000;">
      <img src=${element.imagen} class="card-img-top fotoItem" alt="${element.tittle}">
      <div class="card-body product" id=${element.id}>
          <h5 class="card-title productTittle text-center">${element.tittle}
          </h5>
          <p class="card-text">${element.descripcion}</p>
          <span class="productPrice"> $ ${element.precio}</span>
          <a class="btn btn-primary botonAgregar${element.id}" href="#">Agregar al carrito</a>
      </div>                            
  </div>`;
});

document.querySelector("#contenedorMicros").appendChild(contenedorCards1);


let contenedorCards2 = document.createElement("div");
contenedorCards2.className = "accordion-body d-flex row justify-content-center"
placaVideo.forEach((element) => {
    contenedorCards2.innerHTML += `<div class="card mb-3" style="width: 18rem; background-color: #000;">
      <img src=${element.imagen} class="card-img-top fotoItem" alt="${element.tittle}">
      <div class="card-body product" id=${element.id}>
          <h5 class="card-title productTittle text-center">${element.tittle}
          </h5>
          <p class="card-text">${element.descripcion}</p>
          <span class="productPrice"> $ ${element.precio}</span>
          <a class="btn btn-primary botonAgregar${element.id}" href="#">Agregar al carrito</a>
      </div>                            
  </div>`;
});

document.querySelector("#contenedorPlacasV").appendChild(contenedorCards2);

let contenedorCards3 = document.createElement("div");
contenedorCards3.className = "accordion-body d-flex row justify-content-center"
motherboards.forEach((element) => {
    contenedorCards3.innerHTML += `<div class="card mb-3" style="width: 18rem; background-color: #000;">
      <img src=${element.imagen} class="card-img-top fotoItem" alt="${element.tittle}">
      <div class="card-body product" id=${element.id}>
          <h5 class="card-title productTittle text-center">${element.tittle}
          </h5>
          <p class="card-text">${element.descripcion}</p>
          <span class="productPrice"> $ ${element.precio}</span>
          <a class="btn btn-primary botonAgregar${element.id}" href="#">Agregar al carrito</a>
      </div>                            
  </div>`;
});

document.querySelector("#contenedorMothers").appendChild(contenedorCards3);


let contenedorCards4 = document.createElement("div");
contenedorCards4.className = "accordion-body d-flex row justify-content-center"
memoriasRam.forEach((element) => {
    contenedorCards4.innerHTML += `<div class="card mb-3" style="width: 18rem; background-color: #000;">
      <img src=${element.imagen} class="card-img-top fotoItem" alt="${element.tittle}">
      <div class="card-body product" id=${element.id}>
          <h5 class="card-title productTittle text-center">${element.tittle}
          </h5>
          <p class="card-text">${element.descripcion}</p>
          <span class="productPrice"> $ ${element.precio}</span>
          <a class="btn btn-primary botonAgregar${element.id}" href="#">Agregar al carrito</a>
      </div>                            
  </div>`;
});

document.querySelector("#contenedorRam").appendChild(contenedorCards4);


const carrito = []
let contador = 0;
let totalCompra = 0;
let numeroCarrito = document.getElementById("cart_menu_num");


microprocesador.forEach((producto, index) => {
    document
        .querySelector(`.botonAgregar${index + 1}`)
        .addEventListener("click", () => {
            if (producto.stock == 0) {
                alert("Actualmente no tenemos disponibilidad de este producto.");
            } else {
                carrito.push(producto);
                producto.vendido(1);
                contador++;
                numeroCarrito.innerHTML = contador;
                alert("Este producto fue agregado al carrito");
                let totalCarrito = carrito.reduce(
                    (acc, iterador) => acc + iterador.precio,
                    0
                );
                console.log(`El importe total a pagar es de $ ${totalCarrito}`);
            }
        });
});


console.log(carrito);