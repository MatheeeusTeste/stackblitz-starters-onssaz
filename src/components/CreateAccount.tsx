import { FormEvent, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { createUser } from '../services/firebase';

export function CreateAccount() {
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const nav = useNavigate();

  function handleLogin(e: FormEvent) {
    e.preventDefault();
    createUser(usuario, senha)
      .then(() => {
        alert('Conta criada! Agora você pode fazer login!');
        nav('/login');
      })
      .catch((error) => {
        console.log(error);
        alert('Não foi possível criar sua conta! ' + error.message);
      });
  }

  return (
    <>
      <form onSubmit={handleLogin}>
        <div>
          <label>Usuário:</label>
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
          <button type="submit">Criar minha conta</button>
        </div>
        <div>
          Já tem conta?
          <Link to="/login">
            <button>Que tal fazer login!</button>
          </Link>
        </div>
      </form>
    </>
  );
}