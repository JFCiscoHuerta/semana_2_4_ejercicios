function calcularTotalCompra() {
    let totalCompra = 0;
    let continuar = true;

    while (continuar) {
        const cantidad = parseInt(prompt("Ingresa la cantidad del producto (o escribe '0' para terminar): "));
        if (cantidad === 0) {
            continuar = false;
        } else {
            const precio = parseFloat(prompt("Ingresa el precio del producto: "));
            totalCompra += cantidad * precio;
        }
    }

    const impuesto = totalCompra * 0.12;
    const totalPagar = totalCompra + impuesto;

    console.log(`Total de la compra sin impuesto: ${totalCompra.toFixed(2)} USD`);
    console.log(`Impuesto (12%): ${impuesto.toFixed(2)} USD`);
    console.log(`Total a pagar: ${totalPagar.toFixed(2)} USD`);
}

calcularTotalCompra();
