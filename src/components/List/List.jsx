import css from './List.module.scss';

const List = ({ children }) => {
  return <ul className={css.List}>{children}</ul>;
};

export default List;
