import css from './LoadMore.module.scss';

const LoadMore = ({ loadMore }) => {
  return (
    <div className={css.LoadMore}>
      <button className={css.Link} onClick={loadMore}>
        Load more
      </button>
    </div>
  );
};

export default LoadMore;
