import { Link } from 'react-router-dom';
import TextField from '../../shared/components/TextField/TextField';
import Button from '../../shared/components/Button/Button';

import useForm from '../../shared/hooks/useForm';

import initialState from './initialState';
import fields from './fields';

import css from './register-form.module.scss';

const RegisterForm = ({ onSubmit }) => {
  const { state, handleChange, handleSubmit } = useForm({ initialState, onSubmit });

  const { username, email, password, confirm_password } = state;

  return (
    <form onSubmit={handleSubmit} className={css.form}>
      <TextField value={email} onChange={handleChange} {...fields.email} />
      <TextField value={password} onChange={handleChange} {...fields.password} />
      <TextField value={confirm_password} onChange={handleChange} {...fields.confirm_password} />
      <TextField value={username} onChange={handleChange} {...fields.username} />
      <Button>REGISTER</Button>
      <Link className={css.link} to="/login">
        LOG IN
      </Link>
    </form>
  );
};

export default RegisterForm;
