import css from './CarList.module.scss';

const CarList = ({ children }) => {
  return <div className={css.CarList}>{children}</div>;
};

export default CarList;
