import styles from './add-button.module.css';

const AddButton = props => {
  return <button className={styles.button} {...props}></button>;
};

export default AddButton;
