// ------- Seleccionar etiquetas -------
const etiquetas = document.querySelectorAll(".boton-etiqueta");

etiquetas.forEach(etiqueta => {
    etiqueta.addEventListener("click", () => {
        etiqueta.classList.toggle("seleccionado");
    });
});

// ------- Botón de RESET -------
const botonReset = document.getElementById("btnReset");

botonReset.addEventListener("click", () => {
    etiquetas.forEach(etiqueta => etiqueta.classList.remove("seleccionado"));
});

// ------- Botón BUSCAR -------
const botonBuscar = document.getElementById("btnBuscar");
const mensajeError = document.getElementById("mensajeError");

botonBuscar.addEventListener("click", () => {
    const seleccionadas = document.querySelectorAll(".boton-etiqueta.seleccionado");

    if (seleccionadas.length === 0) {
        mensajeError.style.display = "block";
        setTimeout(() => mensajeError.style.display = "none", 2000);
        return;
    }

    // SI selecciona → ir a la segunda página
    window.location.href = "segunda_pagina.html";
});
