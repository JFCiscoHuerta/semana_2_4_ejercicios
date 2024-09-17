function convertirMoneda() {
    const tasaCambioEUR = 0.90;
    const tasaCambioMXN = 20; 

    const cantidadUSD = parseFloat(prompt("Ingresa la cantidad en USD: "));

    const cantidadEUR = cantidadUSD * tasaCambioEUR;
    const cantidadMXN = cantidadUSD * tasaCambioMXN;

    console.log(`${cantidadUSD} USD equivalen a:`);
    console.log(`${cantidadEUR.toFixed(2)} EUR`);
    console.log(`${cantidadMXN.toFixed(2)} MXN`);
}

convertirMoneda();
