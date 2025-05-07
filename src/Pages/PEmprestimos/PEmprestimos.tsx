import Cabecalho from "../../components/Cabecalho/cabecalho";
// import FormEmprestimos from "../../components/Formularios/FromEmprestimo/FormEmprestimos";
import TabelaEmprestimo from "../../components/Tabelas/TabelaEmprestimo/TabelaEmprestimo";
import Rodape from "../../components/Rodape/rodape";


function PEmprestimos() {
    return(
        <>
            <Cabecalho/>
            <TabelaEmprestimo/>
            {/* <FormEmprestimos/> */}
            <Rodape/>
        </>
    );
}

export default PEmprestimos