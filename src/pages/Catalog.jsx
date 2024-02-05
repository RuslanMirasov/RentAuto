import Section from '../components/Section/Section';
import { CatalogForm } from '../components/Forms';
import CatalogList from '../components/CatalogList/CatalogList';
import LoadMore from '../components/LoadMore/LoadMore';
import Loading from 'components/Loading/Loading';

//redux
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCars, clearCars } from '../redux/operations';
import { getCars } from '../redux/selectors';
import Empty from 'components/Empty/Empty';
// import { usePopup } from 'contexts/PopupContext';

const Catalog = () => {
  const dispatch = useDispatch();
  const { adverts, isLoading, error } = useSelector(getCars);
  const [filter, setFilter] = useState({
    limit: 12,
    page: 1,
    make: '',
    rentalPrice: '',
  });
  // const { popupOpen } = usePopup();

  const handleFormSend = async data => {
    setFilter(prevFilter => ({ ...prevFilter, page: 1, make: data.make, rentalPrice: data.rentalPrice }));
  };

  const handleLoadMore = () => {
    setFilter(prevFilter => ({ ...prevFilter, page: filter.page + 1 }));
  };

  useEffect(() => {
    if (filter.make || (filter.rentalPrice && filter.page === 1)) {
      dispatch(clearCars());
    }
    dispatch(getAllCars(filter));
  }, [dispatch, filter]);

  return (
    <Section>
      <CatalogForm filterCars={handleFormSend} />
      {error ? <Empty title="Not Found" subtitle="Sorry, nothing was found for your request" /> : <CatalogList adverts={adverts} />}
      {isLoading && <Loading />}
      {!isLoading && adverts.length >= 12 * filter.page && <LoadMore loadMore={handleLoadMore} />}
    </Section>
  );
};

export default Catalog;
