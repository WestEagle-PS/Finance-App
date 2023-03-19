import styles from './edit-button.module.scss';

const EditButton = ({ id, onClick }) => {
  return (
    <button
      className={styles.button}
      onClick={() => {
        onClick(id);
      }}
    >
      <span className={styles.label}></span>
    </button>
  );
};

export default EditButton;
