import { useDispatch } from 'react-redux';
import LoginForm from '../../modules/LoginForm/LoginForm';
import { login } from '../../redux/auth/auth-operations';

import imgMan from '../../images/svg/desktop-man.png';

import css from './login-page.module.scss';

const LoginPage = () => {
  const dispatch = useDispatch();

  const onLogin = data => {
    dispatch(login(data));
  };

  return (
    <div className={`"container" ${css.box}`}>
      <div className={css.leftSide}>
        <img className={css.imgLeft} src={imgMan} alt="man" width="435" height="420" />
        <p className={css.text}>Finance App</p>
      </div>

      <div className={css.rightSide}>
        <LoginForm onSubmit={onLogin} />
      </div>
    </div>
  );
};

export default LoginPage;
