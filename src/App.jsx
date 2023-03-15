import UserRoutes from 'UserRoutes';
import { BrowserRouter } from 'react-router-dom';

import './shared/styles/styles.scss';

export const App = () => {
  return (
    <BrowserRouter basename="/wallet">
      <UserRoutes />
    </BrowserRouter>
  );
};
