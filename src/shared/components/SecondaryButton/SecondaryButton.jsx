import styles from './secondary-button.module.css';

const SecondaryButton = ({ children, ...props }) => {
  return (
    <button className={styles.button} {...props}>
      {children}
    </button>
  );
};

export default SecondaryButton;

// Приклад використання
// const handleClick = () => {
//   console.log('Click');
// };

// return (
//   <div className="container">
//     <SecondaryButton onClick={handleClick}>ADD</SecondaryButton>
//   </div>
// );
