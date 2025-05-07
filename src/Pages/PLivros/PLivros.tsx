import Cabecalho from "../../components/Cabecalho/cabecalho";
// import TabelaLivro from "../../components/Tabelas/TabelaLivro/TabelaLivro";
import FormLivros from "../../components/Formularios/FromLivro/FormLivro";
import Rodape from "../../components/Rodape/rodape";


function PLivros() {
    return(
        <>
            <Cabecalho/>
            {/* <TabelaLivro/> */}
            <FormLivros />
            <Rodape/>
        </>
    );
}

export default PLivros