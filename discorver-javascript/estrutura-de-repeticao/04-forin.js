// For in
let person = {
    name:"Everaldo",
    age: 30,
    weight: 75.5

}

// Pegar as propriedades do objeto
for(let property in person){
    console.log(property)

    console.log(person[property])
}