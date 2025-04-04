import { SERVER_CFG } from "../appConfig";


export class AlunoRequests {

    private serverURL;
    private routeListaAluno;
    private routeCadastrarAluno;
    private routeAtualizaAluno;
    private routeRemoveAluno;

    constructor() {
        this.serverURL = SERVER_CFG.SERVER_URL;
        this.routeListaAluno = '/lista/alunos';
        this.routeCadastrarAluno = '/novo/alunos';
        this.routeAtualizaAluno = '/atualiza/alunos';
        this.routeRemoveAluno = '/remove/alunos';
    }

    /**
     * Função que busca a lista de alunos na API
     */

    async listarAlunos() {
        try {
            const respostaAPI = await fetch(`${this.serverURL}${this.routeListaAluno}`);

            if(respostaAPI.ok) {
                const listarAlunos = await respostaAPI.json();
                return listarAlunos;
            }
        }catch (error) {
            console.error(`Erro ao fazer a consulta: ${error}`);
            return null;
        }
    }

}

export default new AlunoRequests();