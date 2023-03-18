import { Link } from 'react-router-dom';

import TextField from '../../shared/components/TextField/TextField';
import PrimaryButton from 'shared/components/PrimaryButton/PrimaryButton';
import useForm from '../../shared/hooks/useForm';
import initialState from './initialState';
import fields from './fields';

import logo from '../../images/svg/Group.png';
import { ReactComponent as Email } from '../../images/svg/email.svg';
import { ReactComponent as Password } from '../../images/svg/password.svg';

import css from './login-form.module.scss';

const LoginForm = ({ onSubmit }) => {
  const { state, handleChange, handleSubmit } = useForm({ initialState, onSubmit });
  const { email, password } = state;

  return (
    <form onSubmit={handleSubmit} className={css.form}>
      <div className={css.logoBox}>
        <img src={logo} alt="logo" width="30" />
        <p className={css.wallet}>Wallet</p>
      </div>
      <div className={css.fieldsWrapper}>
        <TextField value={email} onChange={handleChange} icon={<Email />} {...fields.email} />
        <TextField value={password} onChange={handleChange} icon={<Password />} {...fields.password} />
      </div>
      <div className={css.buttonsWrapper}>
        <PrimaryButton>log in</PrimaryButton>
        <Link className={css.link} to="/register">
          register
        </Link>
      </div>
    </form>
  );
};

export default LoginForm;
