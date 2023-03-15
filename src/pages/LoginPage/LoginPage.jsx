import { useDispatch } from 'react-redux';
import LoginForm from '../../modules/LoginForm/LoginForm';
import { login } from '../../redux/auth/auth-operations';

import logo from '../../images/svg/Group.png';
import css from './login-page.module.scss';

const LoginPage = () => {
  const dispatch = useDispatch();

  const onLogin = data => {
    dispatch(login(data));
  };

  return (
    <div className="container">
      <div className={css.logoBox}>
        <img src={logo} alt="logo" />
        <p className={css.wallet}>WALLET</p>
      </div>
      <LoginForm onSubmit={onLogin} />
    </div>
  );
};

export default LoginPage;
