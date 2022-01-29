// Passo 1 - modelando

class Queue{
    constructor(){
        this.data = []
    }

    enqueue(item){

        this.data.push(item)
        console.log(`${item} chegou na fila`)

    }

    dequeue(){
        const item = this.data.shift()
        console.log(`${item} Saiu na fila`)
    }
}

// Passo 2
const fila = new Queue()
fila.enqueue('Everaldo')
fila.enqueue('Edson')
fila.enqueue('Elias')

fila.dequeue()
fila.dequeue()
fila.dequeue()