document.addEventListener("DOMContentLoaded", function () {
    const ahora = new Date();
    const horaFormateada = ahora.toLocaleTimeString("es-CO", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
    });

    const tituloPagina = document.title;
    const secciones = document.querySelectorAll("section");
    const cantidadSecciones = secciones.length;

    console.log("=== Laboratorio Parte 1 - Entorno Web ===");
    console.log("Hora de carga del documento: " + horaFormateada);
    console.log("Título del documento: " + tituloPagina);
    console.log("Cantidad de secciones encontradas: " + cantidadSecciones);
    console.log("=========================================");
});
