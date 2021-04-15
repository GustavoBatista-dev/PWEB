alert("JS - Objeto Aluno")

var n = parseFloat(prompt("Digite a forma de criação do objeto (1, 2 ou 3): "))

switch (n) {
    case 1:
        var aluno01 = {}
        var RA = 'RA'
        var nome = 'nome'

        aluno01[RA] = '0030481913019'
        aluno01[nome] = 'Gustavo'

        alert(JSON.stringify(aluno01))
        break;

    case 2:
        var aluno02 = {
            RA: '0030481913019',
            nome: 'Gustavo Batista'
        }

        alert(JSON.stringify(aluno02))
        break;

    case 3:
        var aluno03 = new Object()

        aluno03.RA = '0030481913019'
        aluno03.nome = 'Gustavo Batista'

        alert(JSON.stringify(aluno03))
        break;
}
