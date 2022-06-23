

interface Humano{

    nome: string,
    idade: number, 
    profissao: string
}

let pessoa1: Humano = {
    nome: "maria",
    idade:19,
    profissao: "atriz"
};

    pessoa1.nome = "maria";
    pessoa1.idade = 29;
    pessoa1.profissao = "atriz"

let pessoa2: Humano = {

     nome:"roberto", 
     idade:19, 
     profissao: "Padeiro"
}

    pessoa2.nome = "roberto";
    pessoa2.idade = 19;
    pessoa2.profissao = "Padeiro";



// aqui criei um objeto 

let pessoa3 = {
    nome: "laura",
    idade: "32",
    profissao: "Atriz"
};
    pessoa3.nome = "laura",
    pessoa3.idade = "32",
    pessoa3.profissao = "Atriz"

// aqui criei um classe com os parametros 

 function pessoa4 (nome: string, idade: number, profissao: string) { 
    nome = "carlos",
    idade = 19,
    profissao = "padeiro"
}