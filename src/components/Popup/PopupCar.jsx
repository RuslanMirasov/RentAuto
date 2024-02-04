import { Button } from 'components/Buttons';
import { CarHeader, CarImage, CarInfoWrapper, CarList, CarListItem } from 'components/CarInformation';
import List from 'components/List/List';
import { Color, Text, Title, TitleBox } from 'components/Typography';
import PopupAnimation from './PopupAnimation/PopupAnimation';

const PopupCar = ({ car }) => {
  const {
    accessories,
    address,
    description,
    engineSize,
    fuelConsumption,
    functionalities,
    id,
    img,
    make,
    mileage,
    model,
    rentalConditions,
    rentalPrice,
    type,
    year,
  } = car;
  const location = address.split(',');
  const conditions = rentalConditions.split('\n');
  const minimumAge = conditions[0].split('Minimum age:');
  return (
    <PopupAnimation>
      <CarInfoWrapper>
        <CarHeader>
          <CarImage url={img} make={make} />
          <TitleBox>
            <Title tag="h2" size="h5">
              {make}, <Color>{model}</Color>, {year}
            </Title>
            <List>
              {location[1] && <li>{location[1]}</li>}
              {location[2] && <li>{location[2]}</li>}
              {id && <li>Id: {id}</li>}
              {year && <li>Year: {year}</li>}
              {type && <li>Type: {type}</li>}
              {fuelConsumption && <li>Fuel Consumption: {fuelConsumption}</li>}
              {engineSize && <li>Engine Size: {engineSize}</li>}
            </List>
          </TitleBox>
          <Text>{description}</Text>
        </CarHeader>

        <TitleBox>
          <Title size="h6">Accessories and functionalities:</Title>
          <List>
            {accessories.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
            {functionalities.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </List>
        </TitleBox>

        <TitleBox>
          <Title size="h6">Rental Conditions:</Title>
          <CarList>
            {minimumAge && (
              <CarListItem>
                Minimum age: <Color>{minimumAge}</Color>
              </CarListItem>
            )}
            {conditions[1] && <CarListItem>{conditions[1]}</CarListItem>}
            {conditions[2] && <CarListItem>{conditions[2]}</CarListItem>}
            {mileage && (
              <CarListItem>
                Mileage: <Color>{mileage}</Color>
              </CarListItem>
            )}
            {rentalPrice && (
              <CarListItem>
                Price: <Color>{rentalPrice}</Color>
              </CarListItem>
            )}
          </CarList>
        </TitleBox>

        <Button to="tel:+380730000000">Rental car</Button>
      </CarInfoWrapper>
    </PopupAnimation>
  );
};

export default PopupCar;
