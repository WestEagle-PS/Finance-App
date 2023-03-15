import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

// import PrivateRouter from 'modules/PrivateRouter/PrivateRouter';
// import PublicRoute from 'modules/PublicRoute/PublicRoute';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const StatisticPage = lazy(() => import('./pages/StatisticPage/StatisticPage'));
const RegisterPage = lazy(() => import('./pages/RegisterPage/RegisterPage'));
const LoginPage = lazy(() => import('./pages/LoginPage/LoginPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage/NotFoundPage'));

const UserRoutes = () => {
  return (
    <>
      <Suspense fallback={<p>.....Loading page, please wait</p>}>
        <Routes>
          {/* <Route element={<PublicRoute />}> */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          {/* </Route> */}

          {/* <Route element={<PrivateRouter />}> */}
          <Route path="/home" element={<HomePage />} />
          <Route path="/statistic" element={<StatisticPage />} />
          {/* </Route> */}

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default UserRoutes;