// Manipular Array
let meuArray = ["JS", "html", "CSS"]

//- Adicionar um item no fim
meuArray.push("node.js")

//- Adicionar elemento no inicio
meuArray.unshift("Mysql")

//- remover elemento do fim
meuArray.pop()

//- remover elemento do inicio
meuArray.shift()

//- pegar alguns elementos
console.log(meuArray.slice(1,2))

//- remover 1 ou mais elementos em qualquer posição
 meuArray.splice(1,3)

//- encontrar a posição de um elemento
let index = meuArray.indexOf('html')
meuArray.splice(index,1)



console.log(meuArray)
