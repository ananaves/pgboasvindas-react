import Cabecalho from "../../components/Cabecalho/cabecalho";
// import TabelaAluno from "../../../components/Tabelas/TabelaAluno/TabelaAluno";
import FormAlunos from "../../components/Formularios/FormAluno/FormAlunos";
import Rodape from "../../components/Rodape/rodape";


function PAlunos() {
    return(
        <>
            <Cabecalho/>
            {/* <TabelaAluno/> */}
            <FormAlunos/>
            <Rodape/>
        </>
    );
}

export default PAlunos