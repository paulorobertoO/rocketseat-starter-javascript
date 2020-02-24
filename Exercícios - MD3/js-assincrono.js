/*Exercício 01*/
var endereco = {
    rua: "Rua dos Pinheiros",
    numero: 1293,
    bairro: "Centro",
    cidade: "São Paulo",
    uf: "SP"
};

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

/*Exercício 02*/
var x = 32, y = 321;

function pares(num1, num2) {

    for (var i = num1; i <= num2; i++) {
        if (i % 2 == 0) {
            document.writeln(i);
        }
    }

    return '';
}

/*Exercício 03*/
var skills = ["Javascript", "ReactJS", "React Native"];

function temHabilidade(skills) {
    Boolean = skills.indexOf("Javascript") !== -1 ? true : false;
    return Boolean;
}

/*Exercício 04*/
var anosEstudo = 7;

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


/*Exercício 05*/
var usuarios = [
    {
        nome: "Diego",
        habilidades: ["Javascript", "ReactJS", "Redux"]
    },
    {
        nome: "Gabriel",
        habilidades: ["VueJS", "Ruby on Rails", "Elixir"]
    }
];

function imprimeFrase(usuarios) {
    for (user of usuarios) {
        document.writeln("O "+ user.nome + " possui as habilidades: " + user.habilidades.join(", ")+" <br>");
    }
}