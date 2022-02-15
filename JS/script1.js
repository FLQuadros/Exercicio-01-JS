var a = parseInt(prompt('Digite o primeiro lado do triangulo:'))

var b = parseInt(prompt('Digite o segundo lado do triangulo:'))

var c = parseInt(prompt('Digite o terceiro lado do triangulo:'))

if (a == b && b == c){
    alert('O triangulo é equilátero')
} else if ((a == b && b != c) || (a == c && c != b) || (b == c && b != a)) {
    alert('O triangulo é isóceles')
} else {
    alert('O triangulo é escaleno')
}