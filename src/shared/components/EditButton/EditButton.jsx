import styles from './edit-button.module.css';

const EditButton = ({ id, onClick }) => {
  return (
    <button
      className={styles.button}
      onClick={e => {
        onClick(id);
      }}
    >
      <span className={styles.label}>Edit</span>
    </button>
  );
};

export default EditButton;
