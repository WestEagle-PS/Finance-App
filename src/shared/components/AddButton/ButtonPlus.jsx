import styles from './add-button.module.css';

const AddButton = ({onBtnClick, props}) => {
  return <button className={styles.button} onClick={onBtnClick} {...props}></button>;
};

export default AddButton;
