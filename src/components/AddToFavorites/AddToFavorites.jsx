import Icon from 'components/Icon/Icon';
import { useState } from 'react';
import { usePopup } from '../../contexts/PopupContext';
import css from './AddToFavorites.module.scss';

const AddToFavorites = ({ id, make, model, price }) => {
  const { popupOpen } = usePopup();
  const [isFavorite, setIsFavorite] = useState(true);

  const handleClick = () => {
    setIsFavorite(!isFavorite);
    if (isFavorite) {
      popupOpen('confirm', `${make} (${model}) added to favourites`, `The rental price per hour is ${price}`);
    }
  };

  return (
    <div className={css.AddToFavorites} onClick={handleClick}>
      <Icon
        name="favorites"
        color={isFavorite ? 'rgba(255,255,255,0.8)' : 'var(--main-color)'}
        fill={isFavorite ? 'rgba(255,255,255,0)' : 'var(--main-color)'}
      />
    </div>
  );
};

export default AddToFavorites;
