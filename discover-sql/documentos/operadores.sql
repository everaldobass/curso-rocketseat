-- Operadores Mateáticos

-- Adição
select * from aluno where matricula = 1 + 2

-- Subtração
select * from aluno where matricula = 4 - 1

-- Multiplicação
select * from aluno where matricula = 2 * 2

-- Divisão
select * from aluno where matricula = 4 / 2

-- Módulo
select * from aluno where matricula = 4 % 3

-- Operadores Lógicos
select * from aluno where nome like "J%"

-- AND
select * from aluno where nome like "%J%" and matricula > 2

-- OR
select * from aluno where matricula > 1 or nome like "j%"
-- BETWEEN
select * from funcionarios where id_funcionario BETWEEN 4 and 7
-- NOT BETWEEN
select * from funcionarios where id_funcionario NOT BETWEEN 4 and 7

-- IN e NOT IN
select * from funcionarios
where id_departamento in(3,5)


-- IS NULL e IS NOT NULL


