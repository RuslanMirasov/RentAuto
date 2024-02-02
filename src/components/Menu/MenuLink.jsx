import { NavLink } from 'react-router-dom';
import { usePopup } from 'contexts/PopupContext';

const MenuLink = ({ to, onClick, children }) => {
  const { menuClose } = usePopup();

  const handleClick = () => {
    if (!onClick) {
      menuClose();
      return;
    }
    onClick();
  };

  return (
    <li>
      <NavLink to={to} onClick={handleClick}>
        {children}
      </NavLink>
    </li>
  );
};

export default MenuLink;
