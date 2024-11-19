function calcularJSI() {
    const intensidad = parseFloat(document.getElementById("intensidad").value);
    const duracion = parseFloat(document.getElementById("duracion").value);
    const esfuerzos = parseFloat(document.getElementById("esfuerzos").value);
    const postura = parseFloat(document.getElementById("postura").value);
    const velocidad = parseFloat(document.getElementById("velocidad").value);
    const duracionTarea = parseFloat(document.getElementById("duracionTarea").value);

    // Factores multiplicadores (valores de ejemplo, ajustar con las tablas reales)
    const factorIntensidad = intensidad;
    const factorDuracion = duracion / 100;
    const factorEsfuerzos = esfuerzos / 10; // Ejemplo
    const factorPostura = postura;
    const factorVelocidad = velocidad;
    const factorDuracionTarea = duracionTarea / 8; // Ejemplo

    // Cálculo del JSI
    const jsi = factorIntensidad * factorDuracion * factorEsfuerzos * factorPostura * factorVelocidad * factorDuracionTarea;

    // Mostrar resultado
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<h3>Resultado del JSI: ${jsi.toFixed(2)}</h3>`;
    if (jsi > 5) {
        resultado.innerHTML += "<p>Riesgo alto de desórdenes músculo-esqueléticos.</p>";
    } else {
        resultado.innerHTML += "<p>Riesgo bajo o moderado.</p>";
    }
}
