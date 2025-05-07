// import { useState } from "react";
// import estilo from "./FormEmprestimos.module.css"

// function FormEmprestimos() {

//     const [formDate, setFormDate] = useState({
//         nomeAluno: '',
//         nomeLivro: '',
//         dataEmprestimo: '',
//         dataDevolucao: '',
//         status: ''
//     });


//     //monitora uma alteração no formulario
//     // função para atualizar o state
//     const handleChange = (nome: string, valor: string | string[]) => {
//         setFormDate({...formDate, [nome]: valor });
//     };

//     return ( 
//         <section className={estilo.formSection}>
//             <h3>Cadastro de Emprestimos</h3>
//             <form className={estilo.formLogin} action="" onSubmit={() => alert(JSON.stringify(formDate))}> {/*  // ao cliar no input submit ou botao, 
//                                                                                                                      // esse onSubmit irá ser acionado */}
//                 <label htmlFor="">
//                     Nome Aluno
//                     <input 
//                         type="text"                                                     //tipo do input
//                         name="nomeAluno"                                                //nome do input
//                         id="nome-aluno"                                                 // id do input
//                         required                                                        // quando é OBRIGATORIO
//                         minLength={3}                                                   //minimo de caracteres
//                         onChange={(e) => handleChange("nomeAluno", e.target.value)}
//                     />
//                 </label>
//                 <label htmlFor="">
//                     Nome Livro
//                     <input 
//                         type="text" 
//                         name="nomeLivro" 
//                         id="nome-livro"
//                         required
//                         minLength={3} 
//                         onChange={(e) => handleChange("nomeLivro", e.target.value)}
//                     />
//                 </label>
//                 <label htmlFor="">
//                     Data Emprestimo
//                     <input 
//                         type="date" 
//                         name="dataEmprestimo" 
//                         id="data-emprestimo"
//                         required
//                         onChange={(e) => handleChange("dataEmprestimo", e.target.value)}
//                     />
//                 </label>
//                 <label htmlFor="">
//                     Data Devolução
//                     <input 
//                         type="date" 
//                         name="dataDevolucao" 
//                         id="data-devolucao"
//                         onChange={(e) => handleChange("dataEmprestimo", e.target.value)}
//                     />
//                 </label>
//                 <label htmlFor="">
//                     Status
//                     <input 
//                         type="text" 
//                         name="status" 
//                         id="status-emprestimo"
//                         minLength={4}
//                         onChange={(e) => handleChange("status", e.target.value)}
//                     />
//                 </label>

//                 <input className={estilo.inputButton} type="submit" value="CADASTRAR EMPRESTIMO" />    {/*submit significa "enviar", ou seja, irá usar ele para enviar os dados a API */}

//             </form>
//         </section>
//     );
// }

// export default FormEmprestimos;