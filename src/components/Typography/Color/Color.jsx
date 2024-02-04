import css from './Color.module.scss';

const Color = ({ children }) => {
  return <span className={css.Color}>{children}</span>;
};

export default Color;
