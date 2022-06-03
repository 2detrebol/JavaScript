let total = document.querySelector('#total');

const carritoConfirmado = JSON.parse(localStorage.getItem("carrito"));

//HACER UNA FUNCION//
carritoConfirmado.forEach(producto => {
    const {
        imagen,
        titulo,
        precio,
        cantidad,
        subtotal,
        id /*no interesa para esto*/
    } = producto;
    const row = document.createElement('tr');
    row.className = "text-center align-middle contenidoCarro";
    row.innerHTML = `
            <th class="imgProducto">
                <img src="${imagen}" width="50">
            </th>
            <th>${titulo}</th>            
            <th>${cantidad}</th>
            <th>${precio}</th>
            <th>${formatoMoneda(subtotal)}</th>`;
    // HTML DEL carrito EN EL tbody //
    document.querySelector("#listaCarrito").appendChild(row);
});


function totalGeneral() {
    let productoTotal = carritoConfirmado.reduce((total, producto) => total + producto.subtotal, 0);
    return productoTotal;
}
total.innerHTML = formatoMoneda(totalGeneral());

function formatoMoneda(e) {
    return new Intl.NumberFormat('es-ar', {
        style: 'currency',
        currency: 'ARS',
        minimumFractionDigits: 0,
    }).format(e);
}

//CREDIT CARD//
$('#card-number').on('keypress change blur', function () {
    $(this).val(function (index, value) {
        return value.replace(/[^a-z0-9]+/gi, '').replace(/(.{4})/g, '$1 ');
    });
});

$('#card-number').on('copy cut paste', function () {
    setTimeout(function () {
        $('#card-number').trigger("change");
    });
});


/* Exp. Date Slash */

$('#card-exp').on('input', function () {
    var curLength = $(this).val().length;
    if (curLength === 2) {
        var newInput = $(this).val();
        newInput += '/';
        $(this).val(newInput);
    }
});

//CREDIT CARD//

//BOTON UNICO PARA AMBOS FORMULARIOS//
$(function () {
    $("#btnFinalizar").click(function (event) {
        event.preventDefault();
        if ($("#nombre").val() === "" || $("#documento").val() === "" || $("#domicilio").val() === "" || $("#numeracion").val() === "" || $("#localidad").val() === "" || $("#numeroTel").val() === "" || $("#email").val() === "") {
            alert("Complete todos los campos para el envío");
        } else {
            if ($("#creditCard").is(":checked")) {
                if ($("#card-number").val() === "" || $("#card-name").val() === "" || $("#card-exp").val() === "" || $("#card-cvc").val() === "") {
                    alert("Complete los datos de la tarjeta");
                } else {
                    alert("Gracias por su compra");
                }
            } else if ($("#cash" || "#creditCard").is(":checked")) {
                alert("Gracias por su compra!");
            } else {
                alert("Seleccione forma de pago");
            }
        }
    });
});