// Eventos onclick
function print(){

    document.write(" Um click")
}


// ondblclick
function printond(){

    document.write("Dois clicks")
}

// Evento Teclado

// onkeydown

const input = document.querySelector("input")
input.onkeyup = function(){

    document.write("rodei")

}

// Adicionando eventos via JS

const h1 = document.querySelector("h1")
h1.addEventListener("mouseover", print)

function print(){

    document.writeln("print")
}

// Event
const input = document.querySelector("input")

input.onkeydown = function(event){

    console.log(event)

}



