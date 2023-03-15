import { BrowserRouter } from 'react-router-dom';
// import { Provider } from 'react-redux';
// import { PersistGate } from 'redux-persist/integration/react';
// import { store, persistor } from 'redux/store';
import UserRoutes from './UserRoutes';

import './shared/styles/styles.scss';

export const App = () => {
  return (
    <BrowserRouter basename="/wallet">
      <UserRoutes />
    </BrowserRouter>
  );
};
