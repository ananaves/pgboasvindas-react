import './App.css'
import Cabecalho from './components/Cabecalho/cabecalho'
import Rodape from './components/Rodape/rodape';
import Welcome from './components/Welcome/Welcome';
import LoginForm from './components/LoginForm/loginForm';

function App() {
  return(
    <>
      <Cabecalho/>
      <LoginForm/>
      <Rodape/>
    </>
  )
}

export default App;