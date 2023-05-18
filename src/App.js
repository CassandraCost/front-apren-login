import {useState} from 'react';
import img from './imagens/user.png';
import './styles.css'

function App() {
  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")
  return (
    <div className="container"> 
    
      <div className="container-login"> 

        <div className="wrap-login"> 

          <form className="login-form">

            <span className="login-form-title">Bem Vindo!</span>
            <span className="login-form-title">
            {<img src={img} alt=""/>}
            </span>

            <div className='wrap-input'>
              <input className= { (email.length > 0 ? 'has-val ' : '') + 'input'} 
              type='email'
              value={email}
              onChange={e=>setEmail(e.target.value)}/>
              <span className='focus-input' data-placeholder='Email'></span>
            </div>

            <div className='wrap-input'>
              <input className= { (senha.length > 0 ? 'has-val ' : '') + 'input'} 
              type='password'
              value={senha}
              onChange={e=>setSenha(e.target.value)}/>
              <span className='focus-input' data-placeholder='Senha'></span>
            </div>

            <div className='container-login-form-btn'>
              <button className='login-form-btn'>Entrar</button>
            </div>

            <div className='text-cadastro'>
              <span className='texto'>Cadastrar-me!</span>
              <a className='texto2' href='#'>Criar conta</a>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
