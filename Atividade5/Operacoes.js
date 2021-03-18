var num1, num2, decisao = true

alert("JS - Operacões Básicas")

while (decisao) {
    num1 = parseFloat(prompt("Digite o primeiro valor: "))
    num2 = parseFloat(prompt("Digite o segundo valor: "))

    alert("A Soma dos dois valores é: " + (num1 + num2))
    alert("A subtração do primeiro pelo segundo é: " + (num1 - num2))
    alert("O produto dos dois números: " + (num1 * num2))
    alert("A divisão do primeiro pelo segundo: " + (num1 / num2))
    alert("O resto da divisão do primeiro pelo segundo: " + (num1 % num2))
    
    decisao = confirm("Deseja repetir?")
}