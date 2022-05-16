function Producto(id, imagen, tittle, descripcion, precio, stock) {
    this.id = id;
    this.imagen = imagen;
    this.tittle = tittle;
    this.descripcion = descripcion;
    this.precio = parseFloat(precio);
    this.stock = stock;

    //vender
    this.vendido = function (cantidad) {
        if (cantidad <= this.stock) {
            return this.stock -= cantidad;
        }
    };
}

let producto1 = new Producto(1, "./IMAGENES/Items/micros/i7.png", "Intel i7", "Intel Core i7-9700K 8 núcleos y 4.9 GHz de frecuencia gráfica int.", "60000", 5);
let producto2 = new Producto(2, "./IMAGENES/Items/micros/i9.png", "Intel i9", "Intel Core i9-10900F 10 núcleos y 5.2 GHz de frecuencia, gráfica int.", "80000", 20);
let producto3 = new Producto(3, "./IMAGENES/Items/micros/R7.png", "AMD Ryzen 7", "AMD Ryzen 7 5700G 8 núcleos y 4.6 GHz con gráfica integrada", "55000", 15);
let producto4 = new Producto(4, "./IMAGENES/Items/micros/R9.png", "AMD Ryzen 9", "AMD Ryzen 9 5900X 12 núcleos 4.8 GHz y 24 hilos con gráfica integrada", "75000", 30);
let producto5 = new Producto(5, "./IMAGENES/Items/placasv/RTX3080.png", "RTX 3080 MSI", "MSI NVIDIA GeForce RTX3080 Gaming X Trio 10Gb GDDR6X", "300000", 10);
let producto6 = new Producto(6, "./IMAGENES/Items/placasv/RTX3090.png", "RTX 3090 TUF", "ASUS NVIDIA GeForce RTX3090 TUF GAMING 24GB GDDR6X", "600000", 20);
let producto7 = new Producto(7, "./IMAGENES/Items/placasv/RX6800.png", "RX 6800", "Sapphire Radeon RX 6800 NITRO+ 16Gb GDDR6", "260000", 5);
let producto8 = new Producto(8, "./IMAGENES/Items/placasv/RX6900.png", "RX 6900", "MSI Radeon RX 6900 XT GAMING Z TRIO 16Gb GDDR6", "320000", 15);
let producto9 = new Producto(9, "./IMAGENES/Items/mothers/Z690.png", "ASUS ROG MAXIMUS Z690 HERO", "Intel® Z690 ATX motherboard with 20+1 power stages, DDR5, Five M.2, USB 3.2 Gen 2x2 front-panel connector, Dual Thunderbolt™, PCIe® 5.0, Onboard WiFi 6E & Aura Sync RGB", "100000", 10);
let producto10 = new Producto(10, "./IMAGENES/Items/mothers/X570S.png", "AORUS X570S ELITE", "GIGABYTE X570S AORUS ELITE - AMD Ryzen™, Twin 12+2 Phases Digital VRM Solution with 60A DrMOS, DDR4, SuperSpeed USB 3.2 Gen 2x2 TYPE-C® delivers up to 20Gb/s transfer speeds", "65000", 20);
let producto11 = new Producto(11, "./IMAGENES/Items/mothers/Z690PLUS.png", "ASUS Z690PLUS TUF GAMING", "Intel® Z690 (LGA 1700) ATX gaming motherboard, PCIe® 5.0, DDR4, four M.2 slots, WiFi 6 and Intel 2.5 Gb Ethernet, Thunderbolt™ 4 support and Aura Sync RGB", "50000", 10);
let producto12 = new Producto(12, "./IMAGENES/Items/mothers/B550.png", "GIGABYTE B550 AORUS PRO AC 5 PCIE", "Supports AMD Ryzen™, DDR4, Ultra Durable™ PCIe 4.0, AMP-UP Audio, USB 3.2 Gen2 Type-C™ & HDMI Support, RGB FUSION 2.0 Supports Addressable LED & RGB LED Strips", "35000", 20);
let producto13 = new Producto(13, "./IMAGENES/Items/ram/ballistix16gb.png", "DDR4 - 16Gb BALLISTIX", "Memoria Ram DDR4 - 16Gb 3200 Mhz Ballistix Rgb Negro", "13500", 25);
let producto14 = new Producto(14, "./IMAGENES/Items/ram/renegade16gb.png", "DDR4 - 16Gb KINGSTON RENEGADE", "Memoria Ram DDR4 - 16Gb 3600 Mhz Renegade Kingston Fury Rgb", "15000", 15);
let producto15 = new Producto(15, "./IMAGENES/Items/ram/fury8gb.png", "DDR5 - 8Gb KINGSTON FURY", "Memoria Ram DDR5 - 8Gb 5600 Mhz Beast Kingston Fury", "16500", 25);
let producto16 = new Producto(16, "./IMAGENES/Items/ram/fury16gb.png", "DDR5 - 16Gb KINGSTON FURY", "Memoria Ram DDR5 - 16Gb 5600 Mhz Beast Kingston Fury", "29000", 15);


const microprocesador = [];
microprocesador.push(producto1, producto2, producto3, producto4);

const placaVideo = [];
placaVideo.push(producto5, producto6, producto7, producto8);

const motherboards = [];
motherboards.push(producto9, producto10, producto11, producto12);

const listaProductos = []
listaProductos.push(microprocesador, placaVideo, motherboards);

//PARA MOSTRAR EN EL HTML//

let contenedorCards1 = document.createElement("div");
contenedorCards1.className = "accordion-body d-flex row justify-content-center"
contenedorCards1.innerHTML =
    `<div class="card mb-3" style="width: 18rem; background-color: #000;">
    <img src=${producto1.imagen} class="card-img-top fotoItem" alt="Intel i7">
    <div class="card-body product" id=${producto1.id}>
        <h5 class="card-title productTittle text-center">${producto1.tittle}
        </h5>
        <p class="card-text">${producto1.descripcion}</p>
        <span class="productPrice"> $ ${producto1.precio}</span>
        <a class="btn btn-primary botonAgregar1" href="#">Agregar al carrito</a>
    </div>                            
</div>
<div class="card mb-3" style="width: 18rem; background-color: #000;">
<img src=${producto2.imagen} class="card-img-top fotoItem" alt="Intel i9">
    <div class="card-body product" id=${producto2.id}>
        <h5 class="card-title productTittle text-center">${producto2.tittle}
        </h5>
        <p class="card-text">${producto2.descripcion}</p>
        <span class="productPrice"> $ ${producto2.precio}</span>
        <a class="btn btn-primary botonAgregar2" href="#">Agregar al carrito</a>
    </div>                            
</div>
<div class="card mb-3" style="width: 18rem; background-color: #000;">
<img src=${producto3.imagen} class="card-img-top fotoItem" alt="AMD R7">
    <div class="card-body product" id=${producto3.id}>
        <h5 class="card-title productTittle text-center">${producto3.tittle}
        </h5>
        <p class="card-text">${producto3.descripcion}</p>
        <span class="productPrice"> $ ${producto3.precio}</span>
        <a class="btn btn-primary botonAgregar3" href="#">Agregar al carrito</a>
    </div>                            
</div>
<div class="card mb-3" style="width: 18rem; background-color: #000;">
<img src=${producto4.imagen} class="card-img-top fotoItem" alt="AMD R9">
    <div class="card-body product" id=${producto4.id}>
        <h5 class="card-title productTittle text-center">${producto4.tittle}
        </h5>
        <p class="card-text">${producto4.descripcion}</p>
        <span class="productPrice"> $ ${producto4.precio}</span>
        <a class="btn btn-primary botonAgregar4" href="#" data-id="4">Agregar al carrito</a>
    </div>                            
</div>`;

document.querySelector("#contenedorMicros").appendChild(contenedorCards1);

let contenedorCards2 = document.createElement("div");
contenedorCards2.className = "accordion-body d-flex row justify-content-center"
contenedorCards2.innerHTML =
    `<div class="card mb-3" style="width: 18rem; background-color: #000;">
    <img src=${producto5.imagen} class="card-img-top fotoItem" alt="Intel i7">
    <div class="card-body product" id=${producto5.id}>
        <h5 class="card-title productTittle text-center">${producto5.tittle}
        </h5>
        <p class="card-text">${producto5.descripcion}</p>
        <span class="productPrice"> $ ${producto5.precio}</span>
        <a class="btn btn-primary botonAgregar" href="#">Agregar al carrito</a>
    </div>                            
</div>
<div class="card mb-3" style="width: 18rem; background-color: #000;">
<img src=${producto6.imagen} class="card-img-top fotoItem" alt="Intel i9">
    <div class="card-body product" id=${producto6.id}>
        <h5 class="card-title productTittle text-center">${producto6.tittle}
        </h5>
        <p class="card-text">${producto6.descripcion}</p>
        <span class="productPrice"> $ ${producto6.precio}</span>
        <a class="btn btn-primary botonAgregar" href="#">Agregar al carrito</a>
    </div>                            
</div>
<div class="card mb-3" style="width: 18rem; background-color: #000;">
<img src=${producto7.imagen} class="card-img-top fotoItem" alt="AMD R7">
    <div class="card-body product" id=${producto7.id}>
        <h5 class="card-title productTittle text-center">${producto7.tittle}
        </h5>
        <p class="card-text">${producto7.descripcion}</p>
        <span class="productPrice"> $ ${producto7.precio}</span>
        <a class="btn btn-primary botonAgregar" href="#">Agregar al carrito</a>
    </div>                            
</div>
<div class="card mb-3" style="width: 18rem; background-color: #000;">
<img src=${producto8.imagen} class="card-img-top fotoItem" alt="AMD R9">
    <div class="card-body product" id=${producto8.id}>
        <h5 class="card-title productTittle text-center">${producto8.tittle}
        </h5>
        <p class="card-text">${producto8.descripcion}</p>
        <span class="productPrice"> $ ${producto8.precio}</span>
        <a class="btn btn-primary botonAgregar" href="#">Agregar al carrito</a>
    </div>                            
</div>`;

document.querySelector("#contenedorPlacasV").appendChild(contenedorCards2);

let contenedorCards3 = document.createElement("div");
contenedorCards3.className = "accordion-body d-flex row justify-content-center"
contenedorCards3.innerHTML =
    `<div class="card mb-3" style="width: 18rem; background-color: #000;">
    <img src=${producto9.imagen} class="card-img-top fotoItem" alt="Intel i7">
    <div class="card-body product" id=${producto9.id}>
        <h5 class="card-title productTittle text-center">${producto9.tittle}
        </h5>
        <p class="card-text">${producto9.descripcion}</p>
        <span class="productPrice"> $ ${producto9.precio}</span>
        <a class="btn btn-primary botonAgregar" href="#">Agregar al carrito</a>
    </div>                            
</div>
<div class="card mb-3" style="width: 18rem; background-color: #000;">
<img src=${producto10.imagen} class="card-img-top fotoItem" alt="Intel i9">
    <div class="card-body product" id=${producto10.id}>
        <h5 class="card-title productTittle text-center">${producto10.tittle}
        </h5>
        <p class="card-text">${producto10.descripcion}</p>
        <span class="productPrice"> $ ${producto10.precio}</span>
        <a class="btn btn-primary botonAgregar" href="#">Agregar al carrito</a>
    </div>                            
</div>
<div class="card mb-3" style="width: 18rem; background-color: #000;">
<img src=${producto11.imagen} class="card-img-top fotoItem" alt="AMD R7">
    <div class="card-body product" id=${producto11.id}>
        <h5 class="card-title productTittle text-center">${producto11.tittle}
        </h5>
        <p class="card-text">${producto11.descripcion}</p>
        <span class="productPrice"> $ ${producto11.precio}</span>
        <a class="btn btn-primary botonAgregar" href="#">Agregar al carrito</a>
    </div>                            
</div>
<div class="card mb-3" style="width: 18rem; background-color: #000;">
<img src=${producto12.imagen} class="card-img-top fotoItem" alt="AMD R9">
    <div class="card-body product" id=${producto12.id}>
        <h5 class="card-title productTittle text-center">${producto12.tittle}
        </h5>
        <p class="card-text">${producto12.descripcion}</p>
        <span class="productPrice"> $ ${producto12.precio}</span>
        <a class="btn btn-primary botonAgregar" href="#">Agregar al carrito</a>
    </div>                            
</div>`;

document.querySelector("#contenedorMothers").appendChild(contenedorCards3);


let contenedorCards4 = document.createElement("div");
contenedorCards4.className = "accordion-body d-flex row justify-content-center"
contenedorCards4.innerHTML = `<div class="card mb-3" style="width: 18rem; background-color: #000;">
<img src=${producto13.imagen} class="card-img-top fotoItem" alt="Intel i7">
<div class="card-body product" id=${producto13.id}>
    <h5 class="card-title productTittle text-center">${producto13.tittle}
    </h5>
    <p class="card-text">${producto13.descripcion}</p>
    <span class="productPrice"> $ ${producto13.precio}</span>
    <a class="btn btn-primary botonAgregar" href="#">Agregar al carrito</a>
</div>                            
</div>
<div class="card mb-3" style="width: 18rem; background-color: #000;">
<img src=${producto14.imagen} class="card-img-top fotoItem" alt="Intel i9">
<div class="card-body product" id=${producto14.id}>
    <h5 class="card-title productTittle text-center">${producto14.tittle}
    </h5>
    <p class="card-text">${producto14.descripcion}</p>
    <span class="productPrice"> $ ${producto14.precio}</span>
    <a class="btn btn-primary botonAgregar" href="#">Agregar al carrito</a>
</div>                            
</div>
<div class="card mb-3" style="width: 18rem; background-color: #000;">
<img src=${producto15.imagen} class="card-img-top fotoItem" alt="AMD R7">
<div class="card-body product" id=${producto15.id}>
    <h5 class="card-title productTittle text-center">${producto15.tittle}
    </h5>
    <p class="card-text">${producto15.descripcion}</p>
    <span class="productPrice"> $ ${producto15.precio}</span>
    <a class="btn btn-primary botonAgregar" href="#">Agregar al carrito</a>
</div>                            
</div>
<div class="card mb-3" style="width: 18rem; background-color: #000;">
<img src=${producto16.imagen} class="card-img-top fotoItem" alt="AMD R9">
<div class="card-body product" id=${producto16.id}>
    <h5 class="card-title productTittle text-center">${producto16.tittle}
    </h5>
    <p class="card-text">${producto16.descripcion}</p>
    <span class="productPrice"> $ ${producto16.precio}</span>
    <a class="btn btn-primary botonAgregar" href="#">Agregar al carrito</a>
</div>                            
</div>`;

document.querySelector("#contenedorRam").appendChild(contenedorCards4);

//Modificaría el numero del carrito por el valor que se le pase como innetText//

//  let numeroCarrito = document.getElementById("cart_menu_num");
//  numeroCarrito.innerText = 7;

// let numeroCarrito2 = document.querySelector(".badge");
// numeroCarrito2.innerText = 11;

//FORMAS DE ESCUCHAR EVENTO CLICK //
/* let botonAgregarCarro = document.querySelector(".botonAgregar")
   botonAgregarCarro.onclick = () => {
   alert("Este producto fue agregado al carrito")
};

 let boton = document.querySelector(".botonAgregar")
 boton.addEventListener("click", respuestaClick)

 function respuestaClick() {
   console.log("Este producto fue agregado al carrito");
}
*/

const carrito = []
let botonAgregarCarro1 = document.getElementsByClassName("botonAgregar1") // podria usarse querySelectorAll(".botonAgregar1")//
let botonAgregarCarro2 = document.getElementsByClassName("botonAgregar2")
let botonAgregarCarro3 = document.getElementsByClassName("botonAgregar3")
let botonAgregarCarro4 = document.getElementsByClassName("botonAgregar4")
let contador = 0;
let totalCompra = 0;
let numeroCarrito = document.getElementById("cart_menu_num");

for (let i = 0; i < botonAgregarCarro1.length; i++) {
    botonAgregarCarro1[i].addEventListener("click", () => {
        if (producto1.stock == 0) {
            alert("Actualmente no tenemos disponibilidad de este producto.");
        } else {
            producto1.vendido(1);
            carrito.push(producto1);
            contador++;
            numeroCarrito.innerHTML = contador;
            alert("Este producto fue agregado al carrito");
            totalCompra += producto1.precio;
        }
    });
}
for (let i = 0; i < botonAgregarCarro2.length; i++) {
    botonAgregarCarro2[i].addEventListener("click", () => {
        if (producto2.stock == 0) {
            alert("Actualmente no tenemos disponibilidad de este producto.");
        } else {
            producto2.vendido(1);
            carrito.push(producto2);
            contador++;
            numeroCarrito.innerHTML = contador;
            alert("Este producto fue agregado al carrito");
            totalCompra += producto2.precio;
        }
    });
}
for (let i = 0; i < botonAgregarCarro3.length; i++) {
    botonAgregarCarro3[i].addEventListener("click", () => {
        if (producto3.stock == 0) {
            alert("Actualmente no tenemos disponibilidad de este producto.");
        } else {
            producto3.vendido(1);
            carrito.push(producto3);
            contador++;
            numeroCarrito.innerHTML = contador;
            alert("Este producto fue agregado al carrito");
            totalCompra += producto3.precio;
        }
    });
}
for (let i = 0; i < botonAgregarCarro4.length; i++) {
    botonAgregarCarro4[i].addEventListener("click", () => {
        if (producto4.stock == 0) {
            alert("Actualmente no tenemos disponibilidad de este producto.");
        } else {
            producto4.vendido(1);
            carrito.push(producto4);
            contador++;
            numeroCarrito.innerHTML = contador;
            alert("Este producto fue agregado al carrito");
            totalCompra += producto4.precio;
        }
    });
}


let totalCarrito = carrito.reduce((acc, iterador) => acc + ([iterador.precio]), 0);
console.log(`El importe total a pagar es de $ ${totalCarrito}`);


console.log(carrito);