document.getElementById('botonLogin').addEventListener("click", function () {
    document.getElementById('popup').classList.add("active");
});

document.querySelector('.close-btn').addEventListener("click", function () {
    document.getElementById('popup').classList.remove("active");
});