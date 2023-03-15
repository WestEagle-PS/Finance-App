import UserRoutes from 'UserRoutes';
import { BrowserRouter } from 'react-router-dom';
import Header from 'components/Header/Header';

import './shared/styles/styles.scss';

export const App = () => {
  return (
    <BrowserRouter basename="/wallet">
      <Header />
      <UserRoutes />
    </BrowserRouter>
  );
};
