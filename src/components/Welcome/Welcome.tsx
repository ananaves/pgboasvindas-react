import estilo from './welcome.module.css';


function Welcome() {
    
    return (
        <main className={estilo.principal}>
            <p>Seja Bem-vindo a biblioteca</p>
            <p>para ter uma experiencia, faça o login no sistema</p>

        </main>
    );
}

export default Welcome