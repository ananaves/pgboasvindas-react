import { useState } from "react";
import estilo from "./FormLivros.module.css"

function FormLivros() {

    const [formDate, setFormDate] = useState({
        titulo: '',
        autor: '',
        editora: '',
        anoPublucacao: '',
        isbn: '',
        quantTotal: '',
        quantDisponivel: '',
        valorAquisicao: '',
        statusLivroEmprestado: ''
    });


    //monitora uma alteração no formulario
    // função para atualizar o state
    const handleChange = (nome: string, valor: string | string[]) => {
        setFormDate({...formDate, [nome]: valor });
    };

    return ( 
        <section className={estilo.formSection}>
            <h3>Cadastro de Livros</h3>
            <form className={estilo.formLogin} action="" onSubmit={() => alert(JSON.stringify(formDate))}> {/*  // ao cliar no input submit ou botao, 
                                                                                                                     // esse onSubmit irá ser acionado */}
                <label htmlFor="">
                    Título
                    <input 
                        type="text"                                                     //tipo do input
                        name="titulo"                                                     //nome do input
                        id="titulo-livro"                                                  // id do input
                        required                                                        // quando é OBRIGATORIO
                        minLength={3}                                                   //minimo de caracteres
                        onChange={(e) => handleChange("titulo", e.target.value)}
                    />
                </label>
                <label htmlFor="">
                    Autor
                    <input 
                        type="text" 
                        name="autor" 
                        id="autor-livro"
                        required
                        minLength={3} 
                        onChange={(e) => handleChange("autor", e.target.value)}
                    />
                </label>
                <label htmlFor="">
                    Editora
                    <input 
                        type="text" 
                        name="editora" 
                        id="editora-livro"
                        required
                        minLength={3} 
                        onChange={(e) => handleChange("editora", e.target.value)}
                    />
                </label>
                <label htmlFor="">
                    Ano de Publicação
                    <input 
                        type="date"                                      
                        name="anoPublicacao"                                        
                        id="anoPublicacao-livro"                                                                              
                        onChange={(e) => handleChange("anoPublicacao", e.target.value)}
                    />
                </label>
                <label htmlFor="">
                    ISBN
                    <input 
                        type="number" 
                        name="isbn" 
                        id="isbn-livro"
                        minLength={13}
                        onChange={(e) => handleChange("isbn", e.target.value)}
                    />
                </label>
                <label htmlFor="">
                    Quantidade Total
                    <input 
                        type="number"                                                     //tipo do input
                        name="quantTotal"                                                     //nome do input
                        id="quant-total-livro"                                                  // id do input
                        required                                                        // quando é OBRIGATORIO
                        minLength={1}                                                   //minimo de caracteres
                        onChange={(e) => handleChange("quantTotal", e.target.value)}
                    />
                </label>
                <label htmlFor="">
                    Quantidade Disponível
                    <input 
                        type="number"                                                     //tipo do input
                        name="quantDisponivel"                                                     //nome do input
                        id="quant-disponivel-livro"                                                  // id do input
                        required                                                        // quando é OBRIGATORIO
                        minLength={1}                                                   //minimo de caracteres
                        onChange={(e) => handleChange("quantDisponivel", e.target.value)}
                    />
                </label>
                <label htmlFor="">
                    Valor Aquisição
                    <input 
                        type="number" 
                        name="valorAquisicao" 
                        id="vAqs-livro"
                        minLength={3}
                        onChange={(e) => handleChange("valorAquisicao", e.target.value)}
                    />
                </label>
                <label htmlFor="">
                    Status Livro Emprestado
                    <input 
                        type="text" 
                        name="statusLivroEmprestado" 
                        id="stts-livro-emprest"
                        minLength={3}
                        onChange={(e) => handleChange("statusLivroEmprestado", e.target.value)}
                    />
                </label>

                <input className={estilo.inputButton} type="submit" value="CADASTRAR LIVRO" />    {/*submit significa "enviar", ou seja, irá usar ele para enviar os dados a API */}

            </form>
        </section>
    );
}

export default FormLivros;