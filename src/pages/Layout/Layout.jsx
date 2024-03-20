import { Outlet } from 'react-router-dom';
import Container from '../../components/common/Container/Container';
import Header from '../../components/common/Header/Header';

const Layout = () => {
  return (
    <Container>
      <Header />
      <main className="Wrapper">
        <Outlet />
      </main>

      <footer>&copy;PhoneBook App</footer>
    </Container>
  );
};

export default Layout;
