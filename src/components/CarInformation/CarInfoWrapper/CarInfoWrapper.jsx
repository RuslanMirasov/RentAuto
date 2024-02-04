import css from './CarInfoWrapper.module.scss';

const CarInfoWrapper = ({ children }) => {
  return <div className={css.CarInfoWrapper}>{children}</div>;
};

export default CarInfoWrapper;
