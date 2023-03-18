import { Navigate } from 'react-router-dom';
import TextField from '../../shared/components/TextField/TextField';
import PrimaryButton from 'shared/components/PrimaryButton/PrimaryButton';
import SecondaryButton from 'shared/components/SecondaryButton/SecondaryButton';
import fields from './fields';
import css from './register-form.module.scss';
import useRegisterValidation from 'shared/hooks/useRegisterValidation';
import PasswordField from 'shared/components/PasswordField/PasswordField';
import { ReactComponent as EmailIcon } from '../../images/svg/email.svg';
import { ReactComponent as PasswordIcon } from '../../images/svg/password.svg';
import { ReactComponent as UserIcon } from '../../images/svg/user.svg';
import { useState } from 'react';

const RegisterForm = ({ onSubmit }) => {
  const {
    email,
    password,
    confirmationPassword,
    username,
    passwordReliability,
    emailError,
    passwordError,
    confirmationPasswordError,
    usernameError,
    setEmail,
    setPassword,
    setConfirmationPassword,
    setUsername,
    validate,
  } = useRegisterValidation();
  const [redirect, setRedirect] = useState(false);

  const handleSubmit = event => {
    event.preventDefault();
    validate();
  };

  if (redirect) {
    return <Navigate to="/login" />;
  }

  return (
    <form onSubmit={handleSubmit} className={css.form}>
      <div className={css.fieldsWrapper}>
        <TextField
          value={email}
          error={emailError}
          onChange={e => setEmail(e.target.value)}
          icon={<EmailIcon />}
          {...fields.email}
        />
        <PasswordField
          value={password}
          error={passwordError}
          passwordReliability={passwordReliability}
          onChange={e => setPassword(e.target.value)}
          icon={<PasswordIcon />}
          {...fields.password}
        />
        <TextField
          value={confirmationPassword}
          error={confirmationPasswordError}
          onChange={e => setConfirmationPassword(e.target.value)}
          icon={<PasswordIcon />}
          {...fields.confirm_password}
        />
        <TextField
          value={username}
          error={usernameError}
          onChange={e => setUsername(e.target.value)}
          icon={<UserIcon />}
          {...fields.username}
        />
      </div>
      <div className={css.buttonsWrapper}>
        <PrimaryButton>register</PrimaryButton>
        <SecondaryButton onBtnClick={e => setRedirect(true)} type={'button'}>
          log in
        </SecondaryButton>
      </div>
    </form>
  );
};

export default RegisterForm;
