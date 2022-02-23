import './App.css';
import './Login.css';
import logo from './assets/logo.svg';

function App() {
  return (
   <div className="login-container">
     <form>
      <img src={logo} alt="Tindev"/>
      <input placeholder="Digite seu usuário no Github"/>
      <button type="submit">Enviar</button>
     </form>
   </div>
  );
}

export default App;
