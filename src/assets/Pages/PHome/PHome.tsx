import Cabecalho from "../../../components/Cabecalho/cabecalho";
import Rodape from "../../../components/Rodape/rodape";
// import TabelaEmprestimo from "../../../components/TabelaEmprestimo/TabelaEmprestimo";
import TabelaAluno from "../../../components/TabelaAluno/TabelaAluno";
// import TabelaLivro from "../../../components/TabelaLivro/TabelaLivro";


function PHome() {
    return(
        <>
            <Cabecalho/>
            <TabelaAluno/>
            {/* <TabelaLivro/> */}
            {/* <TabelaEmprestimo/>  */}
            <Rodape/>
        </>
    );
}

export default PHome