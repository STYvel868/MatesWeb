// Esperamos a que cargue todo antes de ejecutarse
document.addEventListener("DOMContentLoaded", function () {
    // Obtenemos el botón y le asignamos un evento de clic
    document.getElementById("calculo").addEventListener("click", calculo);
});

function calculo() {
    // Obtenemos el valor inbgresado en el input y lo convertimos a número entero
    let op1 = parseInt(document.getElementById("op1").value);
    let operante = document.getElementById("operante").value;
    let op2 = parseInt(document.getElementById("op2").value);
    let solucion = ""; 
    switch (operante) {
        case "suma":
            solucion = op1 + op2; 
            break;
        case "resta":
            solucion = op1 - op2; 
            break;
        case "multiplicacion":
            solucion = op1 * op2; 
            break;
        case "division":
            if (op2 === 0) {
                solucion = "Infinito";  // Mostrar "Infinito" en caso de división por cero
            } else {
                solucion = op1 / op2;
            }
            break;
        default:
            solucion = "Selección no válida.";
    }
    // Mostramos el resultado
    document.getElementById("resultado").innerText = "Resultado: " + solucion;
}

