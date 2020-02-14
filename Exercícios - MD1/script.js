/*Objects JS*/
var endereco = {
    rua: "Rua dos Pinheiros",
    numero: 1293,
    bairro: "Centro",
    cidade: "São Paulo",
    uf: "SP"
};

var x = 32, y = 321;

var skills = ["Javascript", "ReactJS", "React Native"];

var anosEstudo = 7;

/*Functions JS*/
function retornaEnd(endereco) {

    var texto = "O usuário mora em "
        + endereco.cidade
        + " / "
        + endereco.uf
        + ", no bairro "
        + endereco.bairro
        + ", na rua " + '"'
        + endereco.rua + '"'
        + " com nº "
        + endereco.numero;

    return texto;
}

function pares(num1, num2) {

    for (var i = num1; i <= num2; i++) {
        if (i % 2 == 0) {
            document.writeln(i);
        }
    }

    return '';
}

function temHabilidade(skills) {
    Boolean = skills.indexOf("Javascript") !== -1 ? true : false;
    return Boolean;
}

function experiencia(anos) {

    document.writeln("O usuário possui "+anos+" de estudo e seu nível é: ")
    if (anos > 0 && anos <= 1) {
        document.writeln("Iniciante");
    } else {
        if (anos >= 1 && anos <= 3) {
            document.writeln("Intermediário");
        } else {
            if (anos >= 3 && anos <= 6) {
                document.writeln("Avançado");
            } else {
                if (anos >= 7) {
                    document.writeln("Jedi Master");
                }
            }
        }
    }
}

