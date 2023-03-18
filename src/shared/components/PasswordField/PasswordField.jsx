import css from './password-field.module.scss';
import TextField from '../TextField/TextField';

const PasswordField = ({ passwordReliability = [], ...props }) => {
  const sum = passwordReliability.reduce((accum, value) => {
    return accum + value;
  }, 0);

  let scaleWidth = Math.ceil((100 / passwordReliability.length) * sum);

  return (
    <div className={css.wrapper}>
      <TextField {...props} />
      <span className={css.scale}>
        <span className={css.filledScale} style={{ width: `${scaleWidth + 1}%` }}></span>
      </span>
    </div>
  );
};

export default PasswordField;
