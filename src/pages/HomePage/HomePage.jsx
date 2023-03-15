import { useState } from 'react';
import Modal from 'shared/components/Modal/Modal';
import Button from 'shared/components/Button/Button';
import AddTransactionForm from 'components/AddTransactionForm/AddTransactionForm';
import css from './home-page.module.scss';

const HomePage = () => {
  const [showModal, setShowModal] = useState(false);

  const handleAddBtnClick = () => {
    console.log('12356')
    setShowModal(true);
  }

  const onCloseModal = () => {
    setShowModal(false);
  }

  return (
    <div className="container">
      <h2 className={css.title}>Hello! It`s Home page</h2>
      <Button onClick={handleAddBtnClick}>+</Button>
      {showModal && <Modal onClose={onCloseModal}><AddTransactionForm/></Modal>}
    </div>
  );
};

export default HomePage;
