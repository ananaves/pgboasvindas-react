import estilo from './cabecalho.module.css';
import logotipo from '../../assets/logotipo.png';
import { APP_ROUTES } from '../../appConfig';


function Cabecalho() {
    return(
        <header className={estilo.cabecalho}>
            <a href={APP_ROUTES.ROUTE_HOME}
                className='logoImg'>
                <img src={logotipo} alt="logotipo" />
            </a>
            <a href={APP_ROUTES.ROUTE_TABALUNO}>Abrir tabela alunos</a>
            <a href={APP_ROUTES.ROUTE_TABLIVRO}>Abrir tabela livros</a>
            <a href={APP_ROUTES.ROUTE_TABEMPRESTIMO}>Abrir tabela emprestimos</a>
            <a href={APP_ROUTES.ROUTE_LOGIN}>login</a>
        </header>
    );
}

export default Cabecalho;