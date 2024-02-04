import Section from 'components/Section/Section';
import { TitleBox, Text, Title } from 'components/Typography';
import { Button } from 'components/Buttons';
const NotFound = () => {
  return (
    <>
      <Section full>
        <TitleBox>
          <Title tag="h1" size="h1">
            Error 404
          </Title>
          <Text>Page not found</Text>
          <Button to="/" variant="border-dark">
            Home page
          </Button>
        </TitleBox>
      </Section>
    </>
  );
};

export default NotFound;
