import { FormEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import useLocalstorage from '../hooks/useLocalstorage';

import { signIn } from '../services/firebase';

export function Login() {
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const [userId, setUserId] = useLocalstorage('useId', '');

  function handleLogin(e: FormEvent) {
    e.preventDefault();
    signIn(usuario, senha)
      .then((credential) => {
        alert('Bem-vindo! ' + credential.user.uid);
        setUserId(credential.user.uid);
      })
      .catch((error) => {
        console.log(error);
        alert('Usuário ou senha incorretos!');
      });
  }

  return (
    <>
      <form onSubmit={handleLogin}>
        <div>
          <label>Usuário: {userId}</label>
          <input onChange={(e) => setUsuario(e.target.value)} value={usuario} />
        </div>
        <div>
          <label>Senha:</label>
          <input
            onChange={(e) => setSenha(e.target.value)}
            value={senha}
            type="password"
          />
        </div>
        <div>
          <button type="submit">Acessar</button>
        </div>
        <div>
          Ainda não tem conta?
          <Link to="/criar-conta">
            <button>Que tal criar uma!</button>
          </Link>
        </div>
      </form>
    </>
  );
}