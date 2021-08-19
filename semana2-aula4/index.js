// ------------------ Atividade de Callback e funçoes -------------------

// -- Interpretação de codigo

//1.a:
// Vai ser impresso:
// Amanda rangel/Mandi, Lais petra/Laura, Leticia Chijo

//2.a:
// Vai ser impresso:
// 0.Amanda Rangel 1.Lais Petra 2. Leticia Chijo

//3.a:
// Vai ser impresso:
// nome: Amanda Rangel Apelido: MAndi, Nome: Lais Petra Apelido: Laura

//----------------------------------------------------------------------------------------------------------------------------------------------------

// -- Escrita de codigo

//1.a.
const pets = [
   { nome: "Lupin", raca: "Salsicha"},
   { nome: "Polly", raca: "Lhasa Apso"},
   { nome: "Madame", raca: "Poodle"},
   { nome: "Quentinho", raca: "Salsicha"},
   { nome: "Fluffy", raca: "Poodle"},
   { nome: "Caramelo", raca: "Vira-lata"},
]

const nomedosdoguinhos = pets.map((pets, indice, Array) => {
    return pets.nome
})
//console.log(nomedosdoguinhos); 

//b.
const raçasalcicha = pets.filter((pets, indice, Array) => {
    return pets.raca === "Salsicha"
})
//console.log(raçasalcicha)

//c.
const petsPoodles = pets.filter(pets => pets.raca === "Poodle").map(pets => pets.nome)

//console.log(`Você ganhou um cupom de 10% de desconto para tosar o/a ${petsPoodles}`)

// --- Questao 2 

const produtos = [
   { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
   { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
   //{ nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
   { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
   { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
   //{ nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
   { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
   { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
   { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
   { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
]

//a.
const nomedosprodutos = produtos.map(produtos => produtos.nome)
//console.log(nomedosprodutos)

//b
const desconto = produtos.filter(produtos => produtos.nome)
//console.log(desconto)

//c
const Bebidas = produtos.filter(produtos => produtos.categoria === "Bebidas").map(produtos => produtos.nome)
//console.log(Bebidas)

//d
const produtosype = produtos.filter(produtos => produtos.categoria === "Limpeza").map(produtos => produtos.nome)
//console.log(produtosype)

//e
const ype = produtos.filter(produtos => produtos.categoria === "Limpeza")
//console.log(`Compre ${"Sabão em Pó Ypê"} por ${"2,2"}`)
//console.log(`Compre ${"Detergente Ypê"} por ${"10,80"}`)
