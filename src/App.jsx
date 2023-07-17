import { Routes, Route } from 'react-router-dom';
import { MainLayout, DashLayout } from '@layouts';
import { Login } from '@pages/public';
import {
  Welcome, UsersList, User, TestsList, Test,
} from '@pages/private';
import { PUBLIC_ROUTES, PRIVATE_ROUTES } from '@/app/routes';

const App = () => (
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
    </Route>
  </Routes>
);

export default App;
