import css from './CatalogList.module.scss';
import { useState } from 'react';
import { cars } from '../../api/cars';
import CatalogItem from '../CatalogItem/CatalogItem';

const CatalogList = () => {
  const [carList] = useState(cars);
  console.log(carList);
  return (
    <>
      {carList && (
        <ul className={css.CatalogList}>
          {carList.map((car, index) => (
            <CatalogItem key={index} car={car} />
          ))}
        </ul>
      )}
      {!carList && <p style={{ width: `100%`, marginTop: `50px`, opacity: 0.5 }}>Not found</p>}
    </>
  );
};

export default CatalogList;
