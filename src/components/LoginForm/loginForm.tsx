import estilo from './loginForm.module.css'

function loginForm() {
    return(
        <section className={estilo['form-section']}>
            <h3>LOGIN</h3>

            <form className={estilo['form-login']}>
                <label>
                    E-mail
                    <input type="email" 
                    placeholder='Informe seu e-mail'
                    className={estilo['input-email-login']}/>
                </label>

                <label>
                    Senha
                    <input type="password" 
                    placeholder='Informe sua senha'
                    className={estilo['input-password-login']} />
                </label>
                
                <input type="button" 
                value="Entrar"
                className={estilo['input-button-login']}/>
            </form>
        </section>
    );
}

export default loginForm;