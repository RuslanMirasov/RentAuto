import css from './Logo.module.scss';
import { NavLink } from 'react-router-dom';
import { usePopup } from 'contexts/PopupContext';
import Icon from 'components/Icon/Icon';

const Logo = () => {
  const { menuClose } = usePopup();
  return (
    <NavLink to="/" className={css.Logo} onClick={menuClose}>
      <Icon name="logo" size={40} />
      <p className={css.LogoText}>RentAuto</p>
    </NavLink>
  );
};

export default Logo;
