-- Comandos Avançados
-- Order By
-- Limit
-- Offset
-- Count
-- Group By
-- Join, group By e Count Juntos
-- Having

-- Comandos avançados
select * from aluno
order by nome

select * from aluno
order by responsavel

-- Crescente ORDER BY
select * from professor
order by materia

-- Decrecente DESC
select * from professor
order by cpf desc

-- Comando LIMIT (limite de resultado)
select * from aluno
limit 2

-- Comando OFFSET

-- Comando OFFSET - Ignora os dois primeiros registros encontratos
-- LIMIT - Mostra os proximos
select * from funcionarios
limit 4 offset 2

-- Comando COUNT
select COUNT(*) from funcionarios
select COUNT(id_departamento) from funcionarios

-- Comando GROUP BY
select id_departamento, count(id_departamento)
from funcionarios
group by id_departamento

-- Comando JOIN, GROUP BY e COUNT juntos
select departamentos.descricao, count(funcionarios.id_departamento)
from funcionarios
join departamentos
on funcionarios.id_departamento = departamentos.id_dept
group by departamentos.id_dept


-- Comando HAVING
select departamentos.descricao, count(funcionarios.id_departamento) 
from funcionarios
join departamentos
on funcionarios.id_departamento = departamentos.id_dept
group by departamentos.id_dept
HAVING count(funcionarios.id_departamento) >= 2


