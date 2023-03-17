import styles from './primary-button.module.scss';

const PrimaryButton = ({ children, ...props }) => {
  return (
    <button className={styles.button} {...props}>
      {children}
    </button>
  );
};

export default PrimaryButton;

// Приклад використання
// const handleClick = () => {
//   console.log('Click');
// };

// return (
//   <div className="container">
//     <PrimaryButton onClick={handleClick}>ADD</PrimaryButton>
//   </div>
// );
