// Alterando o Stilo 
const element = document.querySelector("body")
//element.style.backgroundColor = "#ccc"

element.classList.add('active', 'green')
console.log(element.classList)

element.classList.toggle('active')