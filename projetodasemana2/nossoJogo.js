/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
 const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
 
 console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
 console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

console.log("Boas vindas ao jogo de Blackjack!")

if(confirm("Quer iniciar uma nova rodada?")) {
   // o que fazer se o usuário clicar "ok"
   
   
   Usuario1 = comprarCarta()
   Usuario2 = comprarCarta()
   cartaComputador1 = comprarCarta()
   cartaComputador2 = comprarCarta()
   
   carta = comprarCarta(Usuario1, Usuario2)
   console.log('Usúario - cartas:', Usuario1, Usuario2,)// "=", cartaresultado) 
   
   cartaComputador = comprarCarta(cartaComputador1, cartaComputador2)
   console.log('Computador - cartas:', cartaComputador1, cartaComputador2)
   } else {
      // o que fazer se o usuário clic9*ar "cancelar"
      console.log("Fim de jogo")  
}
   
//!!!!-----------TESTES-----------!!!!//

/*if(confirm("Gostaria de mais uma carta?")) {
   // o que fazer se o usuário clicar "ok"
   console.log('Usúario - cartas:', cartaUsuario1)
} else {
   // o que fazer se o usuário clicar "cancelar"
}*/



/*function resultado(Usuario1, Usuario2) {
   return Usuario1 + Usuario2
 */


//const cartaresultado = carta.texto + carta.tex
