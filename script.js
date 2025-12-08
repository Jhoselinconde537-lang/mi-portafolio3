// Seleccionar todas las etiquetas (botones redondos)
const botones = document.querySelectorAll(".boton-etiqueta");

// Agregar evento de clic a cada botón
botones.forEach(boton => {
    boton.addEventListener("click", () => {
        boton.classList.toggle("seleccionado");
    });
});

// Botón "Volver a seleccionar"
const botonReset = document.querySelector(".gris");

botonReset.addEventListener("click", () => {
    botones.forEach(boton => boton.classList.remove("seleccionado"));
});
