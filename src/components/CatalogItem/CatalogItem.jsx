import { Button } from 'components/Buttons';
import css from './CatalogItem.module.scss';
import { usePopup } from '../../contexts/PopupContext';
import defaultImage from '../../images/noImage.jpg';
import { Color, Title } from 'components/Typography';
import AddToFavorites from 'components/AddToFavorites/AddToFavorites';
import List from 'components/List/List';

const CatalogItem = ({ car }) => {
  const { popupOpen } = usePopup();
  const { id, img, make, model, year, rentalPrice, address, type, rentalCompany, accessories } = car;
  const location = address.split(',');
  return (
    <li className={css.CatalogItem}>
      <article className={css.Article}>
        <div className={css.CarImage}>
          <img src={img || defaultImage} alt="" />
          <AddToFavorites id={id} make={make} price={rentalPrice} model={model} />
        </div>
        <div className={css.CarTitle}>
          <Title tag="h2" size="h6">
            {make && make}
            {model && <Color>{`, ${model}`}</Color>}
            {year && `, ${year}`}
          </Title>
          {rentalPrice && <Title size="h6">{rentalPrice}</Title>}
        </div>
        <List>
          {location[1] && <li>{location[1]}</li>}
          {location[2] && <li>{location[2]}</li>}
          {rentalCompany && <li>{rentalCompany}</li>}
          {type && <li>{type}</li>}
          {make && <li>{make}</li>}
          {id && <li>{id}</li>}
          {accessories[1] && <li>{accessories[1]}</li>}
        </List>
      </article>

      <Button onClick={() => popupOpen('car', null, null, car)} full>
        Learn more
      </Button>
    </li>
  );
};

export default CatalogItem;
