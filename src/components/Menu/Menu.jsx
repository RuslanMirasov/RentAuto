import MenuLink from './MenuLink';
import css from './Menu.module.scss';

const Menu = () => {
  return (
    <ul className={`${css.Menu} custom-scrollbar`}>
      <MenuLink to="/">Home</MenuLink>
      <MenuLink to="/catalog">Catalog</MenuLink>
      <MenuLink to="/favorites">Favorites</MenuLink>
    </ul>
  );
};

export default Menu;
