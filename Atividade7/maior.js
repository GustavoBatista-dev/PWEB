var num1, num2, num3

alert("JS - Maior Número")

while (true) {
    num1 = parseFloat(prompt("Digite o primeiro valor: "))
    num2 = parseFloat(prompt("Digite o segundo valor: "))
    num3 = parseFloat(prompt("Digite o terceiro valor: "))

    alert("O maior valor é: " + maiorNumero(num1, num2, num3))


    if (!confirm("Deseja repetir?"))
        break

}

function maiorNumero(n1, n2, n3) {
    if (n1 > n2 && n1 > n3)
        return n1
    else if (n2 > n1 && n2 > n3)
        return n2
    else
        return n3
}