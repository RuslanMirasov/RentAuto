import css from './Header.module.scss';
import Logo from 'components/Logo/Logo';
import { Burger } from 'components/Buttons';
import Navigation from 'components/Navigation/Navigation';
import Container from 'components/Container/Container';

const Header = () => {
  return (
    <header className={css.Header}>
      <Container>
        <Logo />
        <Navigation />
        <Burger />
      </Container>
    </header>
  );
};

export default Header;
