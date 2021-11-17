# Trilha de JS
- Oque é JS
### Introdução
- Abertura
- Javascript

### Como vai Funcionar
- Conceitos e fundamentos
- Prática
- Revisão

# A importância da Sintaxe
- Toda linguagem tem Sintaxe
- Um boa comunicação necessita de uma boa sintaxe
- 82% dos erros para iniciantes programação

### Maneiras de executar o JavaScript
- Usando o próprio Navegador o DevTools
- Usando a ferramenta CodPen
- Utilizando o VS Code

### Adicionando arquivos JS
- Salvar um arquivo com a extenção Ponto JS Ex. script.js
- Inserir o script no arquivo HTML 
```
 <script src="./js/script.js"></script>
```
### Comentarios
- Comentários serve para ignorar trechos de códigos
- // Comentarios de uma Linha 
- /* Comentários com Multiplas Linhas */

### Tipos de dados
- Gramática
- elementos da linguagem e suas combinações
- A arte de falar e escrever corretamente
- Vocabulário
- Conjunto de termos e expressões
- Agrupamento de palavras
- Precisamos saber escrever
- Precisamos saber os significados
- Precisamos continuar aprendendo, para crescer nosso vocabulário

### Como vai ser a dinâmica do aprendizado?
- Conceitos e escrita.
- Vamos aprender os tipos de dados mais utilizados nalinguagem.

### String
- Cadeias de caracteres.
- Aspas simples .
- Aspas duplas.
- Grazes - Permite colocar - Expressões de linguagens- ``, 

### Number
- Inteiros - 33, -30, 10.
- Reais - 12.5, 8.1, 7.5.
- Not Number - 10 / "nome".
- Infinity - Infinity.
- Boolean - True ou False.

### Undefined vs Null
- Null -  considerando como objeto.
- Undefined -  não tem valor dentro dele.

### Objeto
- Propriedades - atributos.
- Funcionalidades - Métodos.

### Array
- Uma lista.
- Agrupamento de dados.

### Conclusão.

### Conhecendo as Variaveis
- Nomes simbolicos para receber algum valor.
- Atalho de código.
- Identificadores.
#### Palavras reservadas
- var
- let
- const - Não altera o valor, não muda.

### Tipos dinâmicos
- JavaScript é uma linguagem fracamente tipada e dinâmica.

### Scope
- Escopo determina a visibilidade de alguma variável no JS
- Chaves - {}
- var é global, é também local.
- hosting - Elevação.

### Scope  let e const
- const e let so funciona no escopo onde foi criada.

### Nomeando variáveis
- JS é case-sensitive.
- JS aceita a cadeia de caracteres Unicode.

#### Posso:
- Iniciar com eses caracteres especiais:
- Iniciar com letras.
- Colocar acentos.
#### Não posso:
- Iniciar com números
- Colocar espaços vazios no nome

#### Ideal:
- Criar nome que fazem sentido.
- Que explique o que a variavel é ou faz.
- camelCase.
- Escrever em Inglês.

#### Declaration assignment var
- Váriaveis e tipos de dados
- Declaração 
- Assigment ou atribuições
- Que tipo de dado foi colocada na variavel- (typeof idade)

#### Agrupando declarações
- Agrupamento de declarações

#### Concatenando e interpolando variáveis
- Multiplos argumentos na função
- Escrita de texto + variaveis 
- Concatenando valores - "Everlado" + idade + "Anos"
- Interpolando valores - (` Everaldo ${idade} anos`)

#### Objects
```
const person = {
    name: 'Everlado',
    idade: 40
}
 
 // Pegar o nome do objeto
console.log(person.nome)
```

#### Arrays
```
const animals = [

    'Lion',
    'Onça',
    'Tigre'
]
// Acessar elementos no array
console.log(animals[0]);

```

#### Exercícios
```
// 1 - Declare uma variável de nome weight
let weight
// 2 - Que tipo de dado é a variavel
console.log(typeof weight );

// 3 - Declare uma variavel e atribua valor para cada um dos dados
let name = "Everaldo";
let age = 40;
let stars = 1.65;
let isSubscribed = true;

// 4 - que tipo de dados a variavel student
let student = {}
console.log(typeof student);

// 5 - Declarar uma variavel tipo Array
let frutas = ['Banana', 'Laranja', 'Maça', 'Uva']

```




