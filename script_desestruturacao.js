// A desetruturação serve para separar atributo de um objeto dentro de variaveis

var user = {
    nome: 'Pedro',
    prof:'programador',
    empresa:'Guia do programador',
    curso:'Formação node js'
}

//se parando os dados em variaveis 

var {nome,prof,empresa,curso } = user;

console.log(nome);
console.log(empresa);
console.log(prof);
console.log(curso);


