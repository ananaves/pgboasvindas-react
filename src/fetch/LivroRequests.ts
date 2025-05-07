import { SERVER_CFG } from "../appConfig";
import LivroDTO from '../interfaces/LivroInterface';



export class LivroRequests {

    private serverURL;
    private routeListaLivro;
    private routeCadastrarLivro;
    private routeAtualizaLivro;
    private routeRemoveLivro;

    constructor() {
        this.serverURL = SERVER_CFG.SERVER_URL;
        this.routeListaLivro = '/lista/livros';
        this.routeCadastrarLivro = '/novo/livros';
        this.routeAtualizaLivro = '/atualiza/livros';
        this.routeRemoveLivro = '/remove/livro';
    }

     /**
     * Método que faz uma requisição à API para buscar a lista de livros cadastrados
     * @returns Retorna um JSON com a lista de livros ou null em caso de erro
     */
     async listarLivros(): Promise<LivroDTO | null> {
        try {
            // faz a requisição no servidor
            const respostaAPI = await fetch(`${this.serverURL}${this.routeListaLivro}`);

            // Verifica se a resposta foi bem-sucedida (status HTTP 200-299)
            if (respostaAPI.ok) {
                // converte a reposta para um JSON
                const listaDeLivros: LivroDTO = await respostaAPI.json();
                // retorna a resposta
                return listaDeLivros;
            }
            
            // retorna um valor nulo caso o servidor não envie a resposta
            return null;
        } catch (error) {
            // exibe detalhes do erro no console
            console.error(`Erro ao fazer a consulta de livros: ${error}`);
            // retorna um valor nulo
            return null;
        }
    }

    /**
     * Envia os dados do formulário livro para a API
     * @param formLivros Objeto com os valores do formulário
     * @returns **true** se cadastro com sucesso, **false** se falha
     */
    async enviaFormularioLivro(formLivros: string): Promise<boolean> {
        try {
            const respostaAPI = await fetch(`${this.serverURL}${this.routeCadastrarLivro}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formLivros)
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
export default new LivroRequests();