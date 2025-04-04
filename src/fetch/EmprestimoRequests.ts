import { SERVER_CFG } from "../appConfig";


export class EmprestimoRequests {

    private serverURL;
    private routeListaEmprestimo;
    private routeCadastrarEmprestimo;
    private routeAtualizaEmprestimo;
    private routeRemoveEmprestimo;

    constructor() {
        this.serverURL = SERVER_CFG.SERVER_URL;
        this.routeListaEmprestimo = '/lista/emprestimos';
        this.routeCadastrarEmprestimo = '/novo/emprestimo';
        this.routeAtualizaEmprestimo = '/atualiza/emprestimo';
        this.routeRemoveEmprestimo = '/remove/emprestimo';
    }

    /**
     * Função que busca a lista de livros na API
     */

    async listarEmprestimos() {
        try {
            const respostaAPI = await fetch(`${this.serverURL}${this.routeListaEmprestimo}`);
            if(respostaAPI.ok) {
                const emprestimo = await respostaAPI.json();
                return emprestimo;
            }
        }catch (error) {
            console.error(`Erro ao fazer a consulta: ${error}`);
            return null;
        }
    }

}

export default new EmprestimoRequests();