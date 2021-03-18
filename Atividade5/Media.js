var nome, nota1, nota2, nota3, media, decisao=true

alert("JS - Média Aritmética")

while (decisao) {
    nome = prompt("Digite o nome do aluno: ");
    nota1 = parseFloat(prompt("Digite a nota 1: "))
    nota2 = parseFloat(prompt("Digite a nota 2: "))
    nota3 = parseFloat(prompt("Digite a nota 3: "))

    var decisao = confirm("Confirme os dados: \nNome: " + nome + "\nNota1: " + nota1 + "\nNota2: " + nota2 + "\nNota3: " + nota3)

    if (decisao) {

        media = (nota1 + nota2 + nota3) / 3
        alert("A média aritmética das notas de " + nome + " é:\n" + media)
        document.write(nome + ": " + media + "\n")
    }
    decisao = confirm("Deseja repetir?")
}
