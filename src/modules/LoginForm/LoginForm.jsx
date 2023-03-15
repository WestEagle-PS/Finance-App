import { Link } from 'react-router-dom';
import TextField from '../../shared/components/TextField/TextField';
import Button from '../../shared/components/Button/Button';

import useForm from '../../shared/hooks/useForm';

import initialState from './initialState';
import fields from './fields';

import css from './login-form.module.scss';

const LoginForm = ({ onSubmit }) => {
  const { state, handleChange, handleSubmit } = useForm({ initialState, onSubmit });

  const { email, password } = state;

  return (
    <form onSubmit={handleSubmit} className={css.form}>
      <TextField value={email} onChange={handleChange} {...fields.email} />
      <TextField value={password} onChange={handleChange} {...fields.password} />
      <Button>log in</Button>
      <Link className={css.link} to="/register">
        REGISTER
      </Link>
    </form>
  );
};

export default LoginForm;
