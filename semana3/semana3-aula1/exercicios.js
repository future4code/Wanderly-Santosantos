// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
    let cores = ["Azul", "Amarelo", "Vermelho", 'Verde', 'Lilas', 'Rosa'] 
    return (cores.length)   
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
  const numerosrev =  ['0','8','23','16','10','15','41','12','13']
  return (numerosrev.reverse())
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    numero = [36,12,56,7,3]
    array.sort(function(a,b){
              return a - b
    })
     return array
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
  let numeros = [1,2,3,4,5,6,7,8];
  let retornopar = numeros.filter(pares => (pares %2)== 0);
  return (retornopar)
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
  numeros1 = [1,2,3,4,5,6];
  retornarpar1 = numeros1.filter(pares => (pares %2)== 0);
  return (Math.pow(retornarpar1, 2));
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
  numerosaleatorios = [1, 5, 3, 7, 5, 2,40,33]
  maior = numerosaleatorios.reduce(function(a, b) {
  return Math.max(a, b);
});
  return maior
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
  const [menor, maior] = retornaArrayOrdenado([num1, num2])

  return {
     maiorNumero: maior,
     maiorDivisivelPorMenor: maior % menor === 0,
     diferenca: maior - menor
  }
}
// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
 let numerosPares = [];
    for (let i = 0; numerosPares.length < n; i++) {
        if (i % 2 == 0) {
            numerosPares.push(i);
        }
    }
    return numerosPares;
}

console.log (retornaNPrimeirosPares(5));  

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
 if ( ladoA == ladoB && ladoB == ladoC){
        return ("Equilátero");      
    }else if(ladoA != ladoB && ladoB != ladoC && ladoC != 
        ladoA){
        return ("Escaleno"); 
    }else{
        return ("Isósceles");
    }
}

validarForma(3,4,5)


// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  const arrayOrdenado = retornaArrayOrdenado(array)
  const indiceSegundoMenor = 1
  const indiceSegundoMaior = array.length - 2

  return [
     arrayOrdenado[indiceSegundoMaior],
     arrayOrdenado[indiceSegundoMenor]
  ]
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
  return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores.join(", ")}.`
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
  return { ...pessoa, nome: "ANÔNIMO" }
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
const pessoa = [
	{ nome: "Paula", idade: 12, altura: 1.8},
	{ nome: "João", idade: 20, altura: 1.3},
	{ nome: "Pedro", idade: 15, altura: 1.9},
	{ nome: "Luciano", idade: 22, altura: 1.8},
	{ nome: "Artur", idade: 10, altura: 1.2},
	{ nome: "Soter", idade: 70, altura: 1.9}
]
  const validarpessoas = pessoa => (
    pessoa.altura > 1.5 &&
    pessoa.idade > 14 && 
    pessoa.idade < 60 &&
  )
  return pessoas.filter(validarPessoa)
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  const validarpessoas = pessoa => (
    pessoa.altura < 1.5 &&
    pessoa.idade < 14 &&
    pessoa.idade > 60 &&
  )
  return pessoas.filter(pessoa => !validarPessoa(pessoa))
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
  const somar = (num1, num2) => num1 + num2

  contas.forEach(conta => {

     const somaDosGastos = conta.compras.reduce(somar, 0)

     conta.saldoTotal -= somaDosGastos

     conta.compras = []
  })

  return contas
}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  const compararNomesDeConsulta = (a, b) => a.nome > b.nome ? 1 : -1

  return consultas.sort(compararNomesDeConsulta)
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
  const gerarData = string => {

    const [dia, mes, ano] = string.split("/")

    return new Date(`${ano}-${mes}-${dia}`)
 }

 const compararDatasDeConsulta = (a, b) => {
    if (gerarData(a.dataDaConsulta) > gerarData(b.dataDaConsulta)) {
       return 1
    } else {
       return -1
    }
 }

 return consultas.sort(compararDatasDeConsulta)
}