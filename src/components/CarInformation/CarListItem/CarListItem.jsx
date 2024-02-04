import css from './CarListItem.module.scss';

const CarListItem = ({ children }) => {
  return <div className={css.CarListItem}>{children}</div>;
};

export default CarListItem;
