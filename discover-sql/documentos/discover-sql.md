## Introdução

### Overview do curso
- O que é um banco de dados?
- Repositório sisêmico de informações
- Serviçõs de banco de dados
- Empresas - SqLite, MariaDB, Mysql

### Conceitos
- Tabelas
- Campos - Nome, descrição
- Informações - registros
- Relações entre tabelas

#### Exemplo de bd Escola
- **Tabela - Alunos**
- matricula -> 0101
- nome -> Everaldo Nascimento
- cpf -> 123456477
- responsavel -> Maria José do Nascimento

- **Tabela - Professores**
- id_professor -> 1
- nome -> Mayk Brito
- cpf -> 789456126
- materia -> JavaScript

- **Tabela - Aulas** 
- id_professor 
- id_aluno


### Tipos de compos
- **Tabela: perfil**
- id_user: number primary key
- nome: text
- nome de usuario: text UNIQUE
- descricao: text
- telefone: number

- **Tabela: posts**
- id_post: number primary key
- post: text
- video: text
- data: datetime / date 
- id_user: Number foreing key

- Primary Key: id_user
- Foreing key:
- Unique: Comando não pode repetir no banco

- **Nomes de campos e tabelas**
- Regras para escrever nome de tabelas e de campos
- Deve começar com letra do alabeto
- Não são permitido caracteres especiais
- Não deve conter espaços
- Não deve conter acentuação

### Aluno
- matricula: NUMBER PRIMARY KEY
- nome: TEXT
- cpf: NUMBER UNIQUE
- responsavel: TEXT

### Professor
- id_professor: NUMBER PRIMARY KEY
- nome: TEXT
- cpf: NUMBER UNIQUE
- materia: TEXT


### Aulas
- id_professor: NUMBER FOREING KEY(professor)
- id_aluno: NUMBER FOREING KEY(aluno)

### Abrindo um banco SQLite

### Select
- select * from aluno

### SELECT especificando campos
- select nome, materia, cpf from professor
- select nome, responsavel from aluno

### SELECT com WHERE
- select * from aluno where nome like = "J%"

### Operadores relacionais
- Operador =, igual
- select * from aluno where nome like "Mariano Garcia"
- like 
- select * from aluno where responsavel like "josefina%"

- >,Maior que
- select * from aluno where matricula > 2

- <,Menor que 
- select * from aluno where matricula < 2

- >=,Maior ou igual 
- select * from aluno where matricula >= 2

- <=,Menor ou igual 
- select * from aluno where matricula <= 3

- <>, Não igual
- select * from aluno where matricula <> 1

- !=Diferente
- select * from aluno where matricula != 3

### Operadores Mateáticos
- Adição +
- Subtração -
- Multiplicação *
- Divisão /
- Módulo

### Operadores Lógicos
- AND
- OR
- BETWEEN
- IN e NOT IN
- IS NULL e IS NOT NULL

### Comandos
- Insert
- Update
- Delete

### Comandos
- Comando JOIN
- Comando JOIN com WHERE
- Comando JOIN especificando campos
- Alias
- LEFT OUTER JOIN

### Comandos Avançados
- Order By
- Limit
- Offset
- Count
- Group By
- Join, group By e Count Juntos
- Having

### Comandos nas tabelas
- Create table
- Alter table
- Drop table










