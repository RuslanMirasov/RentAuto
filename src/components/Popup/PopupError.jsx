import Icon from 'components/Icon/Icon';
import { Title, Text } from 'components/Typography';
import { Button } from 'components/Buttons';
import { usePopup } from 'contexts/PopupContext';
import PopupAnimation from './PopupAnimation/PopupAnimation';

const PopupError = ({ title, text }) => {
  const { popupClose } = usePopup();
  return (
    <PopupAnimation>
      <Icon name="error" />
      {title && (
        <>
          <Title tag="h2" size="h4">
            {title}
          </Title>
          <hr />
        </>
      )}
      {text && <Text>{text}</Text>}
      <Button variant="white" onClick={popupClose} full>
        OK
      </Button>
    </PopupAnimation>
  );
};

export default PopupError;
