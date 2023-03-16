// import { useState } from 'react';
import styles from './toggle-button.module.css';

const ToggleButton = ({checked, setChecked, onClick }) => {
  // const [checked, setChecked] = useState(false);
  const labelClasses = checked
    ? `${styles.switch} ${styles.checked}`
    : styles.switch;

  return (
    <div className={styles.wrapper}>
      <label className={labelClasses}>
        <input
          className={styles.checkbox}
          type="checkbox"
          checked={checked}
          // onChange={e => {
          //   console.log("target", e.target)
          //   onClick(e.target.checked);
          // }}
          onChange={()=>{
            setChecked(prevState=>{
              console.log("prevState", prevState)
              return !prevState});
            // console.log('checked', checked)
            if(checked) {
              onClick({type: "type", data: 'EXPENSE'});
            }
            onClick({type: "type", data: 'INCOME'});
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
