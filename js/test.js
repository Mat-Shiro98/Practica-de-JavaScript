const sueldoBruto = 114500;
const tasaInflacionMensual = 0.063; // 6.3% en decimal
const tipoCambioDolar = 730;
const costoDeVidaEnDolares = 1000; // Establece el costo de vida estimado en dólares

// Calculamos el sueldo ajustado por inflación
function calcularSueldoAjustado(sueldo, tasaInflacion) {
  return sueldo * Math.pow(1 + tasaInflacion, 12); // Multiplicamos por 12 para ajustar a un año
}

const sueldoAjustado = calcularSueldoAjustado(sueldoBruto, tasaInflacionMensual);

// Convertimos el costo de vida estimado de dólares a pesos
const costoDeVidaEnPesos = costoDeVidaEnDolares * tipoCambioDolar;

// Verificamos si el sueldo ajustado es suficiente para cubrir el costo de vida
const esSuficiente = sueldoAjustado >= costoDeVidaEnPesos;

// Mostramos el resultado
console.log(`Sueldo ajustado por inflación: $${sueldoAjustado.toFixed(2)}`);
console.log(`Costo de vida estimado en pesos: $${costoDeVidaEnPesos.toFixed(2)}`);
console.log(`¿El sueldo es suficiente? ${esSuficiente ? 'Sí' : 'No'}`);
