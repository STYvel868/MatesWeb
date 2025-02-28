// Esperamos a que cargue todo antes de ejecutarse
document.addEventListener("DOMContentLoaded", function () {
    // Obtenemos el botón y le asignamos un evento de clic
    document.getElementById("convertirNum").addEventListener("click", convertir);
});

function convertir() {
    // Obtenemos el valor ingresado en el input y lo convertimos a número entero
    let numero = parseInt(document.getElementById("numero").value);
    let tipo = document.getElementById("tipo").value;
    let resultado = ""; 
    // Validamos si el número es válido
    if (isNaN(numero) || numero < 1) {
        resultado = "Ingrese un número válido.";
    } else {
        // Convertimos el número
        switch (tipo) {
            case "binario":
                resultado = numero.toString(2); // Convertir a binario
                break;
            case "octal":
                resultado = numero.toString(8); // Convertir a octal
                break;
            case "hexadecimal":
                resultado = numero.toString(16).toUpperCase(); // Convertir a hexadecimal
                break;
            case "romano":
                resultado = convertirARomano(numero); // Convertir a números romanos
                break;
            default:
                resultado = "Selección no válida.";
        }
    }

    // Mostramos el resultado
    document.getElementById("resultado").innerText = "Resultado: " + resultado;
}
// Función para convertir un número a romano
function convertirARomano(num) {
    const valores = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    const simbolos = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
    let romano = "";
    for (let i = 0; i < valores.length; i++) {
        while (num >= valores[i]) {
            num -= valores[i];
            romano += simbolos[i];
        }
    }
    return romano;
}
