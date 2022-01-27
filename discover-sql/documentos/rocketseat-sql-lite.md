### Comandos SELECT
- rocketseat

### Select

SELECT * FROM tabela

SELECT * FROM aluno
SELECT * FROM professor
SELECT * FROM aulas

### Select especificando campos

SELECT * FROM aluno
SELECT nome, responsavel FROM aluno
SELECT nome, materia, cpf FROM professor

### Select com Where 
SELECT * 
FROM aluno
WHERE matricula = 1

#### Like "%j"
SELECT *
FROM aluno
WHERE nome like "%j"


SELECT matricula, cpf
FROM aluno
WHERE nome like "%g%"

#### Operadores Relacionais
- =, igual

SELECT *
FROM aluno 
WHERE matricula = 3

- **like** - utilizado apenas para texto

SELECT *
FROM aluno
WHERE nome like "Everaldo Nascimento"


SELECT *
FROM aluno
WHERE responsavel like "%N"

- **>,maior**

SELECT * 
FROM aluno
WHERE matricula > 2


- **<,menor**
SELECT *
FROM aluno
WHERE matricula - 2

- **>=,maior igual**
SELECT *
FROM aluno
WHERE matricula >= 1

- **<=,menor igual**
SELECT *
FROM aluno
WHERE matricula <= 2

- **<>,não igual**
SELECT *
FROM aluno
WHERE matricula <> 3

- **!-,diferente**
SELECT *
FROM aluno
WHERE matricula != 3


#### Operadores Aritméticos

SELECT * FROM aluno

- adição, +

SELECT * 
FROM aluno
WHERE = 1 + 1

- subtração, -

SELECT *
FROM aluno
WHERE = 3 - 1


- multiplicação, *

SELECT *
FROM aluno
WHERE = 2 * 1


- divisão, /

SELECT *
FROM aluno
WHERE = 4 / 2


- modulo, %

SELECT *
FROM aluno
WHERE = matricula = 4 % 2


#### Operadores Lógicos
- AND

SELECT *
FROM aluno
WHERE nome LIKE "%J" AND matricula = 2

- OR

SELECT *
FROM aluno
WHERE matricula > 1 OR nome LIKE "G%"

- BETWEEN - Exibe os funcionarios entre 4 e 7


### Operadores Auxiliares

SELECT *
FROM funcionarios
WHERE idFuncionarios BETWEEN 4 AND 7


SELECT *
FROM Funcionarios
WHERE idFuncionarios NOT BETWEEN 4 AND 7

- IN on NOT IN
- Exibe os Funcionarios com o ID entre parenteses

SELECT *
FROM Funcionarios
WHERE idDepartamento IN (1, 2, 5)

- Não exibe os Funcionarios com o ID entre parenteses

SELECT * 
FROM Funcionarios
WHERE idDepartamento NOT IN (1, 2, 5)

- IS NULL e IS NOT NULL
- Verifica se um campo ou coluna é vazio

SELECT *
FROM Funcionarios
WHERE idDepartamento IS NULL


- Verificar se o campo ou coluna não vazio

SELECT *
FROM Funcionarios
WHERE idDepartamento IS NOT NULL


#### Comandos DML

- INSERT INTO

INSERT INTO aluno
(nome, cpf, responsavel)
VALUES
("Josefina", 456123789, "Maritaca")

- UPDATE

UPDATE aluno SET
nome = "Josefina Maria", responsavel = "Maria Maritaca", cpf = 123456789
WHERE matricula = 2

- DELETE

- Exclui todos os dados da tebela

DELETE
FROM aluno

- Sempre utilizar o DELETE com a WHERE 
DELETE 
FROM aluno
WHERE idAluno = 5


### Unindo tabelas
#### - JOIN

SELECT *
FROM duncionarios
JOIN departamentos 
ON departamentos.id_dept = funcionarios_id_departamentos


### - JOIN com WHERE

SELECT *
FROM Funcionarios
JOIN Departamentos
ON funcionarios.id_departamento = departamentos.id_dept
WHERE funcionarios.id_dept = 2


### - JOIN especificando campos

SELECT funcionarios.nome, funcionarios.cpf, departamentos.descrição
FROM funcionarios
ON funcionarios.id_departamentos = departamentos.id_dept

### - ALIAS

SELECT func.nome AS "Nome", func.cpf AS "CPF", dept.descricao AS "departamento"
FROM funcionarios AS func
JOIN departamentos AS dept
ON funcionarios.id_departamentos = departamentos.id_dept

###- LEFT OUTER JOIN

SELECT * 
FROM funcionarios
LEFT OUTER JOIN departamentos
ON funcionarios.id_departamentos = departamentos.id_dept



### COMANDOS Avançados

#### - ORDER BY - Exibe em ordem crescente

SELECT *
FROM aluno
ORDER BY nome

#### - ORDER BY DESC - Exibe em forma decrescente

SELECT *
FROM aluno
ORDER BY cpf DESC


#### - LIMIT - Limita os campos

SELECT * 
FROM aluno
LIMIT 2


#### - OFFSET - Ignora todos campos

SELECT *
FROM funcionarios
LIMIT 4 OFFSET 4


#### - COUNT - Conta a quantidade de registro de uma tabela

SELECT COUNT (nome)
FROM funcioarios


#### - GROUP BY

SELECT id_departamento, COUNT(id_departamento)
FROM funcionarios
GROUP BY id_departamento


#### - JOIN, GROUP BY e COUNT juntos

SELECT departamentos.descricao, COUNT(funcionarios.id_departamento)
FROM funcionarios
JOIN departamentos
ON funcionarios.id_departamento = departamento.id_dept
GROUP BY departamentos.id_dept

#### - HAVING - Compara os agrupamentos

SELECT departamentos.descricao, COUNT(id_departamento.id_departamento)
FROM funcionarios
JOIN departamentos
ON funcionarios.id_departamento = departamento.id_dept
GROUP BY departamentos.id_dept
HAVING COUNT (funcionarios.id_departamento) IN (2,4)



#### COMANDOS nas Tabelas

- CREATE TABLE

CREATE TABLE alunos(

  matricula INTEGER PRIMARY KEY AUTOINCREMENT,
  nome VARCHAR (50),
  cpf INTEGER UNIQUE,
  responsavel TEXT

)


- CREATE TABLE professores (

  id_professor INTEGER PRIMARY KEY AUTOINCREMENTE,
  nome TEXT,
  cpf INTEGER UNIQUE,
  materia TEXT
  
)

- CREATE TABLE aulas(
  id_professor INTEGER,
  matricula INTEGER,
  FOREIGN KEY (id_professor) REFERENCES professores (id_professor)
  FOREIGN KEY(matricula) REFERENCES aluno (matricula)
)


### - ALTER TABLE - Alterar o nome do campo da tabela

ALTER TABLE 
aluno RENAME TO alunos


ALTER TABLE
professor RENAMET TO professores

### - Alterar o nome da coluna de uma tabela

ALTER TABLE
aulas ARENAME COLUMN id_aluno TO matricula_aluno

### - DROP TABLE

DROP TABLE aulas
DROP TABLE alunos
DROP T












































