import Section from '../components/Section/Section';
import { Title } from '../components/Typography';

const Catalog = () => {
  return (
    <Section background="#eee">
      <Title tag="h1" size="h2">
        Catalog
      </Title>
      {/* 
        <ButtonsList>
          <Button onClick={() => popupOpen('confirm')}>Confirm</Button>
          <Button onClick={() => popupOpen('error', 'error 404', 'Page not found')}>Error</Button>
          <Button onClick={() => popupOpen('request')}>Request</Button>
          <Button onClick={() => popupOpen('login')}>Login</Button>
          <Button onClick={() => popupOpen('registration')}>Registration</Button>
          <Button onClick={() => popupOpen('callback')}>Callback</Button>
        </ButtonsList>
      */}
    </Section>
  );
};

export default Catalog;
