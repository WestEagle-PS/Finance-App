import { Link } from 'react-router-dom';
import TextField from '../../shared/components/TextField/TextField';
import Button from '../../shared/components/Button/Button';
import useForm from '../../shared/hooks/useForm';
import initialState from './initialState';
import fields from './fields';
import css from './register-form.module.scss';
import { ReactComponent as Email } from '../../images/svg/email.svg';
import { ReactComponent as Password } from '../../images/svg/password.svg';
import { ReactComponent as User } from '../../images/svg/user.svg';

const RegisterForm = ({ onSubmit }) => {
  const { state, handleChange, handleSubmit } = useForm({ initialState, onSubmit });

  const { username, email, password, confirm_password } = state;

  return (
    <form onSubmit={handleSubmit} className={css.form}>
      <div className={css.fieldsWrapper}>
        <TextField value={email} onChange={handleChange} icon={<Email />} {...fields.email} />
        <TextField value={password} onChange={handleChange} icon={<Password />} {...fields.password} />
        <TextField value={confirm_password} onChange={handleChange} icon={<Password />} {...fields.confirm_password} />
        <TextField value={username} onChange={handleChange} icon={<User />} {...fields.username} />
      </div>
      <div className={css.buttonsWrapper}>
        <Button>REGISTER</Button>
        <Link className={css.link} to="/login">
          LOG IN
        </Link>
      </div>
    </form>
  );
};

export default RegisterForm;
