import { useState } from 'react';
import Modal from 'shared/components/Modal/Modal';
import AddTransactionForm from 'components/AddTransactionForm/AddTransactionForm';
import css from './home-page.module.scss';
import Header from 'components/Header/Header';
import Currency from 'components/Currency/Currency'

const HomePage = () => {
  const [showModal, setShowModal] = useState(false);

  const handleAddBtnClick = () => {
    setShowModal(true);
  }

  const onCloseModal = () => {
    setShowModal(false);
  }

  return (
    <div className="container">
      <Header />
      <h2 className={css.title}>Hello! It`s Home page</h2>
      <Currency/>
      <button type="button" onClick={handleAddBtnClick}>+</button>
      {showModal && <Modal onClose={onCloseModal}><AddTransactionForm/></Modal>}
    </div>
  );
};

export default HomePage;
