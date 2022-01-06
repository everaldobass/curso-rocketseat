// Criando e adicionando elementos

// createElement
const div = document.createElement("div")
div.innerHTML = "Olá Devs"


// append prepend
//const body = document.querySelector("body")

// append
//body.append(div)


// preppend
//body.prepend(div)


//Inserir Antes do script- insertBefore
const body = document.querySelector('body')
const script = body.querySelector('script')
body.insertBefore(div, script)


