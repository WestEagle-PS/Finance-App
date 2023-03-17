import styles from './secondary-button.module.scss';

const SecondaryButton = ({ children, onBtnClick, ...props }) => {
  return (
    <button className={styles.button} onClick={onBtnClick} {...props}>
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
