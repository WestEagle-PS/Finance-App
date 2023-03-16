import styles from './toggle-button.module.scss';

const ToggleButton = ({ checked = false, onChecked }) => {
  const labelClasses = checked ? `${styles.switch} ${styles.checked}` : styles.switch;

  return (
    <div className={styles.wrapper}>
      <label className={labelClasses}>
        <input
          className={styles.checkbox}
          type="checkbox"
          checked={checked}
          onChange={() => {
            onChecked(!checked);
          }}
        />
        <span className={styles.slider + ' ' + styles.round}></span>
      </label>
    </div>
  );
};

export default ToggleButton;

// Приклад використання

// const [checked, setChecked] = useState(false);

// return (
//   <div className="container">
//     <ToggleButton checked={checked} onClick={setChecked} />
//   </div>
// );
