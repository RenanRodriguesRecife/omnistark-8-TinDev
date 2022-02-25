import React,{useState} from 'react';
import './Login.css';


import logo from '../assets/logo.svg';

function Login(){
    const [username,setUsername] = useState('');
    return(
    <div className="login-container">
      <form>
        <img src={logo} alt="Tindev"/>
        <input placeholder="Digite seu usuário no Github"/>
        <button type="submit">Enviar</button>
      </form>
    </div>

    );
}

export default Login;