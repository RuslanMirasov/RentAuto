import css from './Footer.module.scss';
import Logo from 'components/Logo/Logo';
import Container from 'components/Container/Container';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className={css.Footer}>
      <Container>
        <Logo />
        <p>&copy;{currentYear} All rights reserved</p>
      </Container>
    </footer>
  );
};

export default Footer;
