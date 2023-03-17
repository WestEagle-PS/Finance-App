import css from './text-field.module.scss';

const TextField = ({ label = '', icon = null, ...props }) => {
  const fieldClasses = icon ? `${css.field} ${css.iconField}` : css.field;

  return (
    <div className={css.formGroup}>
      <input className={fieldClasses} placeholder={label} {...props} />
      {icon}
    </div>
  );
};

export default TextField;
