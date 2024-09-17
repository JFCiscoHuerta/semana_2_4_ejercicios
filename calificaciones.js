function procesarCalificaciones() {
    const calificaciones = [];
    let continuar = true;

    while (continuar) {
        const calificacion = parseFloat(prompt("Ingresa una calificación (o escribe 'salir' para terminar): "));
        if (isNaN(calificacion)) {
            continuar = false;
        } else {
            calificaciones.push(calificacion);
        }
    }

    if (calificaciones.length > 0) {
        const suma = calificaciones.reduce((a, b) => a + b, 0);
        const promedio = suma / calificaciones.length;
        const calificacionAlta = Math.max(...calificaciones);
        const calificacionBaja = Math.min(...calificaciones);

        console.log(`Promedio de calificaciones: ${promedio.toFixed(2)}`);
        console.log(`Calificación más alta: ${calificacionAlta}`);
        console.log(`Calificación más baja: ${calificacionBaja}`);
    } else {
        console.log("No se ingresaron calificaciones.");
    }
}

procesarCalificaciones();
