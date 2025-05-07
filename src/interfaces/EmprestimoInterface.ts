/**
 * Interface para representar um empréstimo de livro realizado por um aluno
 */
interface EmprestimoDTO {
    idEmprestimo?: number;              // ID do empréstimo (? indica um parâmetro opcional)
    idAluno?: number;                   // ID do aluno relacionado ao empréstimo
    idLivro?: number;                   // ID do livro relacionado ao empréstimo
    dataEmprestimo?: string;           // Data em que o empréstimo foi realizado (ISO 8601)
    dataDevolucao?: string;            // Data prevista para devolução (ISO 8601)
    statusEmprestimo?: string;         // Status textual do empréstimo (ex: "Em andamento", "Concluído")
    statusEmprestimoRegistro?: boolean;// Status do registro (ativo/inativo)
    aluno: {
        ra?: string;                   // Registro Acadêmico do aluno
        nome?: string;                 // Nome do aluno
        sobrenome?: string;           // Sobrenome do aluno
        celular?: string;             // Número de celular do aluno
    };
    livro: {
        titulo?: string;              // Título do livro emprestado
        autor?: string;               // Autor do livro
        editora?: string;             // Editora do livro
    };
}

export default EmprestimoDTO;
