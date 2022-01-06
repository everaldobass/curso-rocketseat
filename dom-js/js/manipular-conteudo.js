// Manipulando Contúdo
const element1 = document.querySelector("#p1")
element1.textContent = "Manipular o TextContent "

const element2 = document.querySelector("#p2")
element2.innerText = "Conteúdo com o innerText"

const element3 = document.querySelector("#p3")
element3.innerHTML = "Alterar o conteúdo com o innerHTML"


// Consigo atribuir o pegar o valor
const element4 = document.querySelector("input")
element4.value = "Everaldo Nascimento"



const header =  document.querySelector("header")
header.setAttribute("id", "header")
header.innerHTML = "#header"

//header.removeAttribute("#header")

