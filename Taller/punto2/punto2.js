var a = 0
var b = 0
var c = 0
var d = 0
var calcularPromedio = 0

a = parseInt(prompt("Digite su primer número"));
b = parseInt(prompt("Digite su segundo número"));
c = parseInt(prompt("Digite su tercer número"));
d = parseInt(prompt("Digite su cuarto número"));

calcularPromedio= promedio (a,b,c,d);

function promedio (nA, nB, nC, nD){
const resultado = ((nA+nB+nC+nD)/4);
console.log ("El promedio es  "  +  resultado);
}