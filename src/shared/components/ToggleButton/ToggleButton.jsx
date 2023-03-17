import { useState } from 'react';
import styles from './toggle-button.module.css';

const ToggleButton = ({ getChecked, onClick }) => {
  const [checked, setChecked] = useState(false);
  const labelClasses = checked ? `${styles.switch} ${styles.checked}` : styles.switch;

  return (
    <div className={styles.wrapper}>
      <label className={labelClasses}>
        <input
          className={styles.checkbox}
          type="checkbox"
          checked={checked}
          onChange={() => {
            getChecked(checked);
            if (checked) {
              onClick({ type: 'type', data: 'INCOME' });
              setChecked(prevState => !prevState);
              return;
            }
            onClick({ type: 'type', data: 'EXPENSE' });
            setChecked(prevState => !prevState);
          }}
        />
        <span className={styles.slider + ' ' + styles.round}></span>
      </label>
    </div>
  );
};

export default ToggleButton;
