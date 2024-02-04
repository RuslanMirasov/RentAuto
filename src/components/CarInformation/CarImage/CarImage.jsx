import css from './CarImage.module.scss';

const CarImage = ({ url, make }) => {
  return (
    <div className={css.CarImage}>
      <img src={url} alt={`${make} for Rent`} />
    </div>
  );
};

export default CarImage;
