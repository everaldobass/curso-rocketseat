
-- Comandos nas tabelas
-- Create table
-- Alter table
-- Drop table
SELECT * FROM alunos


-- Criando tabelas

CREATE TABLE alunos (
matricula INTEGER PRIMARY KEY AUTOINCREMENT,
nome TEXT,
cpf INTEGER UNIQUE,
responsavel TEXT
  
)

CREATE TABLE professores(
id_professor INTEGER PRIMARY KEY AUTOINCREMENT,
nome TEXT,
cpf INTEGER UNIQUE,
materia TEXT
  
)


CREATE TABLE tb_aulas(
id_professor INTEGER,
matricula INTEGER,
  
FOREIGN KEY(id_professor) REFERENCES professores(id_professor),
FOREIGN KEY(matricula) REFERENCES alunos(matricula)

)

-- Alterar no da tabela

ALTER TABLE aluno RENAME TO tb_alunos;

ALTER TABLE professor RENAME TO tb_professores;

ALTER TABLE aulas RENAME TO tb_aulas;


-- Alterar o nome da coluna
ALTER TABLE aulas RENAME COLUMN id_aluno TO matricula_alunos;

-- Excluir uma tabela
DROP TABLE alunos;

DROP TABLE tb_aulas;

DROP TABLE professores;









