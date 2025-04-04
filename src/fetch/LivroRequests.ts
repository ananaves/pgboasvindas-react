import { SERVER_CFG } from "../appConfig";


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
     * Função que busca a lista de livros na API
     */

    async listarLivros() {
        try {
            const respostaAPI = await fetch(`${this.serverURL}${this.routeListaLivro}`);

            if(respostaAPI.ok) {
                const listarLivros = await respostaAPI.json();
                return listarLivros;
            }
        }catch (error) {
            console.error(`Erro ao fazer a consulta: ${error}`);
            return null;
        }
    }

}

export default new LivroRequests();