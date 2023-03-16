import { useDispatch } from 'react-redux';

import RegisterForm from 'modules/RegisterForm/RegisterForm';
import { register } from '../../redux/auth/auth-operations';

import logo from '../../images/svg/Group.png';
import css from './register-page.module.scss';

const RegisterPage = () => {
  const dispatch = useDispatch();

  const onRegister = data => {
    dispatch(register(data));
  };

  return (
    <div className="container">
      <div className={css.logoBox}>
        <img src={logo} alt="logo" />
        <p className={css.wallet}>Wallet</p>
      </div>
      <RegisterForm onSubmit={onRegister} />
    </div>
  );
};

export default RegisterPage;
