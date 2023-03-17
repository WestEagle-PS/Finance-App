import styles from './delete-button.module.scss';

const DeleteButton = ({ id, onClick }) => {
  return (
    <button
      className={styles.button}
      onClick={e => {
        onClick(id);
      }}
    >
      Delete
    </button>
  );
};

export default DeleteButton;

// Приклад використання
// const handleDelete = id => {
//   console.log('Deleted ' + id);
// };

// <div className="container">
//   <DeleteButton id={'1'} onClick={handleDelete} />;
// </div>;
