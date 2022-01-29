const pilotos = ['Senna', 'Prost', 'Shumacher', 'Hamilton']

// A indexação começa pelo número 0
console.log(pilotos[0])

// Acessar o tamanho do Array
console.log(pilotos.length)

// iteravel
for(let piloto of pilotos){
    console.log(piloto)
}

// adicionar elemento
pilotos.push('alonso')
console.log(pilotos)

// encontrar um elemento
const senna = pilotos.find(piloto => piloto === 'Senna')
console.log(senna)


// deletar um elemento
pilotos.splice(1,1)
console.log(pilotos)