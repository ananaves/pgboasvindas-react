import { SERVER_CFG } from "../appConfig";
import EmprestimoDTO from '../interfaces/EmprestimoInterface';


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
     * Método que faz uma requisição à API para buscar a lista de emprestimos cadastrados
     * @returns Retorna um JSON com a lista de emprestimos ou null em caso de erro
     */
    async listarEmprestimos(): Promise<EmprestimoDTO | null> {
        try {
            // faz a requisição no servidor
            const respostaAPI = await fetch(`${this.serverURL}${this.routeListaEmprestimo}`);

            // Verifica se a resposta foi bem-sucedida (status HTTP 200-299)
            if (respostaAPI.ok) {
                // converte a reposta para um JSON
                const listaDeEmprestimos: EmprestimoDTO = await respostaAPI.json();
                // retorna a resposta
                return listaDeEmprestimos;
            }
            
            // retorna um valor nulo caso o servidor não envie a resposta
            return null;
        } catch (error) {
            // exibe detalhes do erro no console
            console.error(`Erro ao fazer a consulta de emprestimos: ${error}`);
            // retorna um valor nulo
            return null;
        }
    }

    /**
     * Envia os dados do formulário emprestimo para a API
     * @param formEmprestimos Objeto com os valores do formulário
     * @returns **true** se cadastro com sucesso, **false** se falha
     */
    async enviaFormularioEmprestimo(formEmprestimos: string): Promise<boolean> {
        try {
            const respostaAPI = await fetch(`${this.serverURL}${this.routeCadastrarEmprestimo}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formEmprestimos)
            });

            if(!respostaAPI.ok) {
                throw new Error('Erro ao fazer requisição com o servidor.');
            }

            return true;
        } catch (error) {
            console.error(`Erro ao enviar o formulário. ${error}`);
            return false;
        }
    }
}

// Exporta a classe já instanciando um objeto da mesma
export default new EmprestimoRequests();