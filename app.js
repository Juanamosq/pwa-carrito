function incrementarContador(producto) {
    const elemento = document.getElementById(`contador-${producto}`);
    let valor = parseInt(elemento.textContent);
    elemento.textContent = valor + 1;
}

function decrementarContador(producto) {
    const elemento = document.getElementById(`contador-${producto}`);
    let valor = parseInt(elemento.textContent);
    if (valor > 0) {
        elemento.textContent = valor - 1;
    }
}
        