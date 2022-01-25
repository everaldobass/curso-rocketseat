-- Comandos DML - Linguagem de Manipulação de Dados

select * from aluno
-- Comandos INSERT INTO
insert into aluno(nome, cpf, responsavel)
values("Everaldo Nascimento", 7894561423, "Maria Jose do Nascimento")


-- Comando UPDATE
update aluno set nome="Mariano soares", responsavel="Marcio Soares"
where matricula = 2

update aluno set nome="Mariano Garcia", cpf=123456789 
where matricula = 2

-- Comando DELETE
delete from aluno
where matricula = 3

-- Unindo tabelas
- Comando JOIN
- Comando JOIN com WHERE
- Comando JOIN especificando campos
- Alias
- LEFT OUTER JOIN


-- Unindo Tabelas
select * from departamentos
select * from funcionarios

-- Comando JOIN
select * from funcionarios
join departamentos
on departamentos.id_dept = funcionarios.id_departamento

-- Comando JOIN com WHERE
select * from funcionarios
join departamentos
on funcionarios.id_departamento = departamentos.id_dept
where funcionarios.id_funcionario = 2

-- Comando JOIN especificando campos
select funcionarios.nome, funcionarios.cpf, departamentos.descricao
from funcionarios
join departamentos
on funcionarios.id_departamento = departamentos.id_dept

-- Alias - Altera o nome do departamento por abreviação
select func.nome as "Nome", func.cpf as "CPF", dept.descricao as "Departamento"
from funcionarios as func
join departamentos as dept
on func.id_departamento = dept.id_dept

-- LEFT OUTER JOIN - Mostra todo o conteúdo
select * from funcionarios
left outer join departamentos
on funcionarios.id_departamento = departamentos.id_dept

-- Prioriza o conteúdo da Esquerda

select * from departamentos
left outer join funcionarios
on funcionarios.id_departamento = departamentos.id_dept




