import { Link } from 'react-router-dom';
import TextField from '../../shared/components/TextField/TextField';
import Button from '../../shared/components/Button/Button';
import useForm from '../../shared/hooks/useForm';
import initialState from './initialState';
import fields from './fields';
import logo from '../../images/svg/Group.png';

import css from './login-form.module.scss';
import { ReactComponent as Email } from '../../images/svg/email.svg';
import { ReactComponent as Password } from '../../images/svg/password.svg';

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
        <Button className={css.submit}>log in</Button>
        <Link className={css.link} to="/register">
          REGISTER
        </Link>
      </div>
    </form>
  );
};

export default LoginForm;
