// Fluxo de caixa
let family = {
    incomes: [2500, 3200, 250.43, 360.45],
    expenses:[320.34, 128.45, 176.87, 1450.00]
}

function sum(array){
    let total = 0

    for(let value of array){
        total += value
    }


    return total
}



function calculateBalance(){

    const calculateIcomes = sum(family.incomes)
    const calculateExpenses = sum(family.expenses)

    const total = calculateIcomes - calculateExpenses
    const itsOk =  total >=0

    let balanceText = "Negativo"

    if(itsOk){
        balanceText = "Positivo"
    }

    console.log(`Seu saldo eh: ${balanceText}:R$${total.toFixed(2)} `)

}

calculateBalance()