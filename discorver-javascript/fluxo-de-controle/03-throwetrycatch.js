//Throw e Try/Catch

function sayMyName(name = ''){
    if(name === ''){
        throw 'Nome obrigatorio'
    }
    console.log('depois do erro')
}

try{
    //Chmando a função
    sayMyName()
}catch(e){
    // Mensagem de erro
    console.log(e)

}