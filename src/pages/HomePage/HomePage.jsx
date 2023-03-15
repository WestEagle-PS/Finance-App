import css from './home-page.module.scss';
import Header from 'components/Header/Header';
import Currency from 'components/Currency/Currency'

const HomePage = () => {
  return (
    <div className="container">
      <Header />
      <h2 className={css.title}>Hello! It`s Home page</h2>
      <Currency />
    </div>
  );
};

export default HomePage;
