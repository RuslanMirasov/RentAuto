import css from './CarHeader.module.scss';

const CarHeader = ({ children }) => {
  return <div className={css.CarHeader}>{children}</div>;
};

export default CarHeader;
