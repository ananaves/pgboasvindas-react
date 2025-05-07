import { useState } from "react";
import estilo from "./FormAluno.module.css"

function FormAlunos() {

    const [formDate, setFormDate] = useState({
        nome: '',
        sobrenome: '',
        dataNascimento: '',
        endereco: '',
        email: '',
        celular: ''
    });


    //monitora uma alteração no formulario
    // função para atualizar o state
    const handleChange = (nome: string, valor: string | string[]) => {
        setFormDate({...formDate, [nome]: valor });
    };

    return ( 
        <section className={estilo.formSection}>
            <h3>Cadastro de Alunos</h3>
            <form className={estilo.formLogin} action="" onSubmit={() => alert(JSON.stringify(formDate))}> {/*  // ao cliar no input submit ou botao, 
                                                                                                                     // esse onSubmit irá ser acionado */}
                <label htmlFor="">
                    Nome
                    <input 
                        type="text"                                                     //tipo do input
                        name="nome"                                                     //nome do input
                        id="nome-alno"                                                  // id do input
                        required                                                        // quando é OBRIGATORIO
                        minLength={3}                                                   //minimo de caracteres
                        onChange={(e) => handleChange("nome", e.target.value)}
                    />
                </label>
                <label htmlFor="">
                    Sobrenome
                    <input 
                        type="text" 
                        name="sobrenome" 
                        id="sobrenome-alno"
                        required
                        minLength={3} 
                        onChange={(e) => handleChange("sobrenome", e.target.value)}
                    />
                </label>
                <label htmlFor="">
                    Data de Nascimento
                    <input 
                        type="date" 
                        name="dataNascimento" 
                        id="dt-nascimento"
                        onChange={(e) => handleChange("dataNascimento", e.target.value)}
                    />
                </label>
                <label htmlFor="">
                    Endereço
                    <input 
                        type="text" 
                        name="endereco" 
                        id="endereço-aluno"
                        minLength={6}
                        onChange={(e) => handleChange("endereco", e.target.value)}
                    />
                </label>
                <label htmlFor="">
                    E-mail
                    <input 
                        type="email" 
                        name="email" 
                        id="email-aluno"
                        minLength={11}
                        onChange={(e) => handleChange("email", e.target.value)}
                    />
                </label>
                <label htmlFor="">
                    Celular
                    <input 
                        type="number" 
                        name="celular" 
                        id="telefone-aluno"
                        minLength={10}
                        maxLength={13}
                        onChange={(e) => handleChange("celular", e.target.value)}
                    />
                </label>

                <input className={estilo.inputButton} type="submit" value="CADASTRAR ALUNO" />    {/*submit significa "enviar", ou seja, irá usar ele para enviar os dados a API */}

            </form>
        </section>
    );
}

export default FormAlunos;