import Section from '../components/Section/Section';
import { CatalogForm } from '../components/Forms';
import CatalogList from '../components/CatalogList/CatalogList';

const Catalog = () => {
  return (
    <Section>
      <CatalogForm />
      <CatalogList />
    </Section>
  );
};

export default Catalog;
