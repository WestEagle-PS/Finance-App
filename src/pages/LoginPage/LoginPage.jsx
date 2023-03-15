import { useDispatch } from 'react-redux';
import LoginForm from '../../modules/LoginForm/LoginForm';
import { login } from '../../redux/auth/auth-operations';

import css from './login-page.module.scss';

const LoginPage = () => {
  const dispatch = useDispatch();

  const onLogin = data => {
    dispatch(login(data));
  };

  return (
    <div className="container">
      <div>Logo Wallet</div>
      <LoginForm onSubmit={onLogin} />
    </div>
  );
};

export default LoginPage;
