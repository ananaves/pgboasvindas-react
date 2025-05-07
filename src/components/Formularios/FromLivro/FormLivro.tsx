import { JSX, useState } from "react";
import estilo from "./FormLivros.module.css"

function FormLivros(): JSX.Element {

    const [formDate, setFormDate] = useState({
        titulo: '',
        autor: '',
        editora: '',
        anoPublicacao: 0,
        isbn: '',
        quantTotal: 0,
        quantDisponivel: 0,
        valorAquisicao: 0
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
                    Ano Publicação
                    <input 
                        type="date" 
                        name="anoPublicacao" 
                        id="anoPublicacao"
                        required 
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
                        type="number" 
                        name="quantTotal" 
                        id="quantTotal"
                        required 
                        minLength={0}
                        onChange={(e) => handleChange("quantTotal", e.target.value)}
                    />
                </label>
                <label htmlFor="">
                    Quantidade Disponivel
                    <input 
                        type="number" 
                        name="quantDisponivel" 
                        id="quantoDisponivel"
                        required 
                        minLength={0}
                        onChange={(e) => handleChange("quantDisponivel", e.target.value)}
                    />
                </label>
                <label htmlFor="">
                    Valor Aquisição
                    <input 
                        type="number" 
                        name="valorAquisicao" 
                        id="va-livro"
                        step={0.01}
                        onChange={(e) => handleChange("valorAquisicao", e.target.value)}
                    />
                </label>


                <input className={estilo.inputButton} type="submit" value="CADASTRAR LIVRO" />    {/*submit significa "enviar", ou seja, irá usar ele para enviar os dados a API */}

            </form>
        </section>
    );
}

export default FormLivros;