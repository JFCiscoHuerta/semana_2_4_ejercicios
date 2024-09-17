function adivinarNumero() {
    const numeroSecreto = Math.floor(Math.random() * 100) + 1;
    let intentos = 0;
    let adivinanza = 0;

    while (adivinanza !== numeroSecreto) {
        adivinanza = parseInt(prompt("Adivina un número entre 1 y 100: "));
        intentos++;
        
        if (adivinanza < numeroSecreto) {
            console.log("Demasiado bajo, intenta de nuevo.");
        } else if (adivinanza > numeroSecreto) {
            console.log("Demasiado alto, intenta de nuevo.");
        } else {
            console.log(`¡Correcto! Adivinaste el número en ${intentos} intentos.`);
        }
    }
}

adivinarNumero();
