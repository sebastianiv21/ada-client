import { Routes, Route } from 'react-router-dom';
import MainLayout from '@layouts/MainLayout';
import DashLayout from '@layouts/DashLayout';
import Landing from '@pages/public/Landing';
import Login from '@pages/public/Login';
import Welcome from '@pages/private/Welcome';
import UsersList from '@pages/private/users/UsersList';
import User from '@pages/private/users/User';

const App = () => (
  <Routes>
    <Route path="/" element={<MainLayout />}>
      {/* Rutas públicas */}
      <Route index element={<Landing />} />
      <Route path="login" element={<Login />} />
      {/* Rutas privadas */}
      <Route path="dash" element={<DashLayout />}>
        <Route index element={<Welcome />} />
        <Route path="users">
          <Route index element={<UsersList />} />
          <Route path=":userId" element={<User />} />
        </Route>
      </Route>
    </Route>
  </Routes>
);

export default App;
