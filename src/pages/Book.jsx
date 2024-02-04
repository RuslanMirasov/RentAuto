import { Title } from 'components/Typography';
import Section from '../components/Section/Section';

const Book = () => {
  return (
    <>
      <Section background="https://wallpapercave.com/wp/wp1834599.jpg" full>
        <Title tag="h1" size="h2">
          Book name
        </Title>
      </Section>
      {/* <Section full>
        <ButtonsList>
          <Button onClick={() => popupOpen('confirm')}>Confirm</Button>
          <Button onClick={() => popupOpen('error', 'error 404', 'Page not found')}>Error</Button>
          <Button onClick={() => popupOpen('request')}>Request</Button>
          <Button onClick={() => popupOpen('login')}>Login</Button>
          <Button onClick={() => popupOpen('registration')}>Registration</Button>
          <Button onClick={() => popupOpen('callback')}>Callback</Button>
        </ButtonsList>
      </Section> */}
    </>
  );
};

export default Book;