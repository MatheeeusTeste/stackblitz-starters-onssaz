import { Link } from 'react-router-dom';
import { CreateAccount } from '../components/CreateAccount';
import { Login } from '../components/Login';

export function CreateAccountPage() {
  return (
    <div className="box-login">
      <h1>Criar conta</h1>
      <CreateAccount />
      <Link to="/">Voltar para Home</Link>
    </div>
  );
}
