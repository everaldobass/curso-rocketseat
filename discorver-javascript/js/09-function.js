// Funções construtoras
/**
 * - Expressão new
 * - Criar um novo objeto
 * - This keyboord
 */

function Person(name){
    this.name = name;

    this.walk = function(){
        return "está andando";
    }

}

const everaldo = new Person("Everlado");
console.log(everaldo.walk());