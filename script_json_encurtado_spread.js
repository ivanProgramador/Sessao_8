//Json 
/*

essa e a forma antiga de atribuir valores aos atributos de um objeto json 

var nome = 'Pedro';
var idade = 21;


var user ={
    nome : nome,
    idade : idade 
}

*/

//json encurtado 

//ele  torna desecessario o uso de chaves ele vai direto no valor da variavel 

var nome = 'Pedro';
var idade = 21;


var user ={
    nome,
    idade 
}

// um objeto dentro de outro 

var empresa = {
    nome:"Guia do programador",
    cidade:"São Paulo",
    site:"https://guiadoprogramador.com.br",
    email:"guia@hotmail.com"
}

//aqui o objeto empresa fica dentro do objeto usuario 
//no caso abaixo pra pegar cada informação eu tenho quenolocar um ponto e depois 
//referenciar a informação do sub objeto porem essa não é uma boa pratica 


/* var user ={
    nome,
    idade,
    empresa.nome,
    empresa.cidade,
    empresa.site

}
*/
// o operador spread ... faz com que ela ja venda com todos os dados prontos ao inves de precisar extrair 
//usando o operador .

/*
var user ={
    nome,
    idade,
    ...empresa

}
*/







console.log(user);





