import { Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { MainLayout, DashLayout } from '@/layouts';
import { PUBLIC_ROUTES, PRIVATE_ROUTES } from '@/app/routes';
import { CustomSpinner } from '@/components/UI';

const Login = lazy(() => import('@/pages/public/Login'));
const NotFound = lazy(() => import('@/pages/public/NotFound'));
const Welcome = lazy(() => import('@/pages/private/Welcome'));
const UsersList = lazy(() => import('@/pages/private/UsersList'));
const User = lazy(() => import('@/pages/private/User'));
const TestsList = lazy(() => import('@/pages/private/TestsList'));
const Test = lazy(() => import('@/pages/private/Test'));

const App = () => (
  <Suspense fallback={<CustomSpinner />}>
    <Routes>
      <Route path="/" element={<MainLayout />}>
        {/* Rutas públicas */}
        <Route index element={<h1>Main</h1>} />
        <Route path={PUBLIC_ROUTES.LOGIN} element={<Login />} />
        {/* Rutas privadas */}
        <Route path={PRIVATE_ROUTES.DASH} element={<DashLayout />}>
          <Route index element={<Welcome />} />
          <Route path={PRIVATE_ROUTES.USERS}>
            <Route index element={<UsersList />} />
            <Route path={PRIVATE_ROUTES.USER} element={<User />} />
          </Route>
          <Route path={PRIVATE_ROUTES.TESTS}>
            <Route index element={<TestsList />} />
            <Route path={PRIVATE_ROUTES.TEST} element={<Test />} />
          </Route>
        </Route>
        {/* Ruta 404 */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  </Suspense>
);

export default App;
