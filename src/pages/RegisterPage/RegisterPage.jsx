import { useDispatch } from 'react-redux';

import RegisterForm from 'modules/RegisterForm/RegisterForm';
import { register } from '../../redux/auth/auth-operations';
import css from './register-page.module.scss';

const RegisterPage = () => {
  const dispatch = useDispatch();

  const onRegister = data => {
    dispatch(register(data));
  };

  return (
    <div className="container">
      <div>Logo Wallet</div>
      <RegisterForm onSubmit={onRegister} />
    </div>
  );
};

export default RegisterPage;
