document.getElementById('botonLogin').addEventListener("click", function () {
    document.getElementById('popup').classList.add("active");
});

document.querySelector('.close-btn').addEventListener("click", function () {
    document.getElementById('popup').classList.remove("active");
});

/*
let btn = document.querySelector('.btn-submit'),
    nombre = document.querySelector('#nombre'),
    checkbox = document.querySelector('#recordame');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
//frase = document.querySelector('.frase');
btn.innerText = 'Registrate';

function guardarValor(valor) {
    let user = {
        usuario: email.value,
        pass: password.value,
    };
    if (user.usuario == "" || user.pass == "") {
        //alert('Todos los campos son obligatorios');
        //frase.innerText = 'Todos los campos son obligatorios';
    } else {
        if (valor === "sessionStorage") {
            sessionStorage.setItem("item", JSON.stringify(user));
        }
        if (valor === "localStorage") {
            localStorage.setItem("item", JSON.stringify(user));
        }
    }
    return user;
}

function recuperarDatos(datos) {
    if (datos) {
        email.value = datos.correo;
        password.value = datos.pass;
        btn.innerText = "Ingresar";
    }
}

recuperarDatos(JSON.parse(localStorage.getItem("item")));

btn.addEventListener("click", (e) => {
    e.preventDefault();
    if (checkbox.checked) {
        guardarValor("localStorage");
    } else {
        guardarValor("sessionStorage");
    }
    href = "./tienda.html";
});
*/