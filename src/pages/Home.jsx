import Section from '../components/Section/Section';
import { TitleBox, Title } from 'components/Typography';
import { Button } from 'components/Buttons';
import heroBg from '../images/heroDesctop.jpg';

const Home = () => {
  return (
    <>
      <Section background={heroBg} full>
        <TitleBox>
          <Title tag="h1" size="h1">
            BEST CAR <br />
            FOR RENT <br />
            TODAY
          </Title>
          <Button to="./catalog" variant="border-dark">
            Catalog
          </Button>
        </TitleBox>
      </Section>
    </>
  );
};

export default Home;
