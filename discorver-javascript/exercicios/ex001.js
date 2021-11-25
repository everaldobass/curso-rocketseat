// Sistema de notas escolares

//let score = 70

function getScore(score){
let scoreA = score >= 90 && score <= 100
let scoreB = score >= 80 && score <= 89
let scoreC = score >= 70 && score <= 79
let scoreD = score >= 60 && score <= 69
let scoreE = score < 60 && score >= 0

let scorefinal;


if(scoreA){
    scorefinal = "A"  
}else if(scoreB){
    scorefinal = "B"
}else if(scoreC){
    scorefinal = "C"
}else if(scoreD){
    scorefinal = "D"
}else if(scoreE){
    scorefinal = "E"
}else if(scoreF){
    scorefinal = "F"
}else{
    scorefinal = "Nota invalida"
}

return scorefinal

}

console.log(getScore(80))