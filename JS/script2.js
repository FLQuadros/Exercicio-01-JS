var a = parseInt(prompt('Digite o primeiro número:'))

var b = parseInt(prompt('Digite o segundo número:'))

var c = parseInt(prompt('Digite o terceiro número:'))

if ( a > b && a > c) {
    alert('O maior número é ' + a )
} else if ( a < b && b > c ) {
    alert('O maior número é ' + b )
} else {
    alert('O maior número é ' + c )
}