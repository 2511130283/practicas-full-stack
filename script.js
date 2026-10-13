const botonContacto = document.getElementById("btnContacto");

if (botonContacto) {
    botonContacto.addEventListener("click", (evento) => {
        evento.preventDefault(); // Evita que la página recargue o salte al inicio
        alert("¡Gracias por visitar mi portafolio! Puedes escribirme a mi correo.");
    });
}