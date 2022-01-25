-- Selecionar com uma condição 
select * from aluno
where matricula = 1


-- Selecionar por nome com a condição %
select * from aluno where nome like "%j%"

-- Selecionar a matricula e o cpf
select matricula, cpf from aluno where nome like "%g%"

-- Operador igual o cpf
select * from aluno where cpf = 12345678945

select * from aluno where matricula = 2

-- Operador like
select * from aluno where nome like "Mariano Garcia"

select * from aluno where responsavel like "Josefina Gracielly"

select * from aluno where responsavel like "josefina%"-- Selecionar por nome com a condição %
select * from aluno where nome like "%j%"

-- Selecionar a matricula e o cpf
select matricula, cpf from aluno where nome like "%g%"

-- Operador igual o cpf
select * from aluno where cpf = 12345678945

select * from aluno where matricula = 2

-- Operador like
select * from aluno where nome like "Mariano Garcia"

select * from aluno where responsavel like "Josefina Gracielly"

select * from aluno where responsavel like "josefina%"

-- Maior que
select * from aluno where matricula > 2

-- Menor que
select * from aluno where matricula < 2

-- Maior ou igual
select * from aluno where matricula >= 2

-- Menor ou igual
select * from aluno where matricula <= 3

-- Não igual a
select * from aluno where matricula <> 1

-- Diferente
select * from aluno where matricula != 3





