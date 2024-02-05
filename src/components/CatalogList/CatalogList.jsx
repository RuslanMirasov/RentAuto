import CatalogItem from '../CatalogItem/CatalogItem';
import css from './CatalogList.module.scss';

const CatalogList = ({ adverts }) => {
  return (
    <ul className={css.CatalogList}>
      {adverts.map(advert => (
        <CatalogItem key={advert.id} car={advert} />
      ))}
    </ul>
  );
};

export default CatalogList;
