var a = 0
var b = 0.21

var calcularPorcentaje = 0

a = parseInt(prompt("Digite su primer número"));


calcularPromedio= promedio (a,b);

function promedio (nA, nB,){
const resultado = (nA*nB) ;

console.log ("El precio sin iva es "  + nA);
console.log ("El precio con iva es "  + ( resultado + nA));
}