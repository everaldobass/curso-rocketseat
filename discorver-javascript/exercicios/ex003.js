//  Celsius to Fahrenheit


function transformDegree(degree){
    const celsiusExists = degree.toUpperCase().includes('C')
    const fahrenheitExists = degree.toUpperCase().includes('F')

    // fluxo de error
    if(!celsiusExists && !fahrenheitExists){
        throw new Error("Grau não identificado")
    }

    // fluxo ideal F => C
    let updateDegree = Number(degree.toUpperCase().replace("F", ""))
    let formula = (fahrenheit ) => (fahrenheit - 32) * 5/9
    let degreeSign = "C"

    //fluxo alternativo C => Fahrenheit
    if(celsiusExists){

    updateDegree = Number(degree.toUpperCase().replace("C", ""))
    formula = celsius => celsius * 5/9 + 32
    degreeSign = "F"

    }


    return formula(updateDegree) + degreeSign

}

try {
    console.log(transformDegree('10C'))
    console.log(transformDegree('50F'))
    //transformDegree('50Z')
    
} catch (error) {
    console.log(error)
    
}