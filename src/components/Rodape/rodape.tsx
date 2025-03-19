import estilo from './rodape.module.css'

function Rodape() {
    return(
        <footer className={estilo.rodape}>
            <p>Desenvolvido por: Ana Naves</p>
            <p>Copyright</p>
        </footer>
    )
}

export default Rodape