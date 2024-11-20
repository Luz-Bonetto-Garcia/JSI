function calcularJSI() {
    const intensidad = parseFloat(document.getElementById("intensidad").value);
    const duracion = parseFloat(document.getElementById("duracion").value);
    const esfuerzos = parseFloat(document.getElementById("esfuerzos").value);
    const postura = parseFloat(document.querySelector('input[name="postura"]:checked').value);
    const velocidad = parseFloat(document.getElementById("velocidad").value);
    const duracionTarea = parseFloat(document.getElementById("duracionTarea").value);
    const duracionX100 = 100 * ((duracion * esfuerzos * 60)/3600);
    
    // Factores multiplicadores (valores de ejemplo, ajustar con las tablas reales)
        valorDuracion = 1;
        if(duracionX100>=10)
        {
           valorDuracion ++;
        }
        if(duracionX100>=30)
        {
            valorDuracion ++;
        }
        if(duracionX100>=50)
        {
            valorDuracion ++;
        }
        if(duracionX100>=80)
        {
            valorDuracion ++;
        }

        valorDuracionTarea = 1;
        if(duracionTarea>=1)
        {
           valorDuracionTarea ++;
        }
        if(duracionTarea>=2)
        {
            valorDuracionTarea ++;
        }
        if(duracionTarea>=4)
        {
            valorDuracionTarea ++;
        }
        if(duracionTarea>=8)
        {
            valorDuracionTarea ++;
        }
        
        valorEsfuerzos = 1;
        if(esfuerzos>=4)
        {
            valorEsfuerzos ++;
        }
        if(esfuerzos>=9)
        {
            valorEsfuerzos ++;
        }
        if(esfuerzos>=15)
        {
            valorEsfuerzos ++;
        }
        if(esfuerzos>=20)
        {
            valorEsfuerzos ++;
        }

    const valorIntensidad = intensidad;
    const valorPostura = postura;
    const valorVelocidad = velocidad;

    //Traducir valoracion por los valores adecuados de cada punto
    
    const IE=[1,3,6,9,13]
    const DE=[0.5,1,1.5,2,3]
    const EM=[0.5,1,1.5,2,3]
    const HWP=[1,1,1.5,2,3]
    const SW=[1,1,1,1.5,2]
    const DD=[0.25,0.5,0.75,1,1.5]

    const factorIntensidad = IE[valorIntensidad-1];
    const factorDuracion = DE[valorDuracion-1];
    const factorEsfuerzos = EM[valorEsfuerzos-1];
    const factorPostura = HWP[valorPostura-1];
    const factorVelocidad = SW[valorVelocidad-1];
    const factorDuracionTarea = DD[valorDuracionTarea-1];

    // Cálculo del JSI

    const jsi = factorIntensidad * factorDuracion * factorEsfuerzos * factorPostura * factorVelocidad * factorDuracionTarea;

    // Mostrar resultado
    const resultado = document.getElementById("resultado");

 // Reiniciar valores de select
 document.getElementById("intensidad").value = "1"; // Ligero
 document.getElementById("velocidad").value = "1"; // Muy lenta

 // Reiniciar inputs numéricos
 document.getElementById("duracion").value = ""; // Segundos
 document.getElementById("esfuerzos").value = ""; // Esfuerzos por minuto
 document.getElementById("duracionTarea").value = ""; // Horas

 // Reiniciar radio buttons
 document.getElementById("1").checked = true; // Sin desviación

 
    resultado.innerHTML = `<h3>Resultado del JSI: ${jsi.toFixed(2)}</h3>`;
    if (jsi > 7) {
        resultado.innerHTML += "<p  style='color: red'>Riesgo alto de desórdenes músculo-esqueléticos.</p><br><img width='150px' src='recursos/men.jpg'>";
    } else if (jsi > 3){
        resultado.innerHTML += "<p  style='color: orange'>Riesgo bajo o moderado.</p><br><img width='250px' src='recursos/m2.avif'>";
    } else {
        resultado.innerHTML += "<p style='color: green'>La tarea probablemente no posee ningun riesgo.</p><br><img width='150px' src='recursos/m1.jpg'>";
    }
}
