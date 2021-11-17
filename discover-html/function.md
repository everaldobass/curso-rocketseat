# Functions
- Agrupamento de códigos
- reutilizar códigos

```
// Criar frases motivacionais

//Declarando uma função
function crearPhrases(){

    console.log('Estudar é muito bom');
    console.log('Paciência e perseverança');
    console.log('Revisão é aprendizado');

}

// Executar a função
crearPhrases();

```

### Argumentos e parâmetros

```
// Paramentros
const sum = function(num1, num2){

    console.log(num1 + num2);

}

sum(2,3);//Argumentos

```

### Retornando valores dentro da função
```
// Paramentros
const suma = function(num1, num1){
    let total = num1 + num2;
    return total;
}
// Argumentos
let num1 = 10;
let num2 = 20;

console.log(`A Soma eh: ${suma(num1, num2)}`)
```

### Outra maneira de entender funções

```
function fazerSuco(fruta1, fruta2){
    return fruta1 + fruta2;
}

const copo = fazerSuco('banana', 'maça');
console.log(copo);
```

### Function scope
```
let subject = "Creat video"
function creatThink(suject) {
    subject = "Study";
    return subject;
    
}
console.log(subject);
console.log(creatThink());

```

### Function Hoisting
```
sayMayName()

function sayMayName(){
    console.log('Everlado')
}

```

### Arrow function
```
const sayMayName = (name) =>{
    console.log('Everaldo Nascimento');
}

sayMayName();
```

### Callback function
- Chama uma função e chama outra de volta
```
function meuNome(name){
    name();
}

meuNome(
    () =>{
        console.log("Everaldo Nascimento");
    }
)


```

### Funções construtoras
```



```
### 
```


```