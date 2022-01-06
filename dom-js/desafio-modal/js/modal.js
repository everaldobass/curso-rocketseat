// Pegar o button
const buttonopenModal = document.getElementById("openModal")
const modalWaraaper = document.querySelector(".modal-wrapper")


buttonopenModal.onclick = function(){
    modalWaraaper
    .classList
    .remove("invisible")
}

document.addEventListener("keydown", function(event){
    const isEsckey = event.key === "Escape"

    if(isEsckey){
        modalWaraaper.classList.add("invisible")
    }
})