import estilo from './cabecalho.module.css';

function Cabecalho() {
    return(
        <header className={estilo.cabecalho}>
            <h1>logo</h1>
            <a href="#">login</a>
        </header>
    );
}

export default Cabecalho;