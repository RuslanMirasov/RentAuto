import Icon from 'components/Icon/Icon';
import { Text, Title, TitleBox } from 'components/Typography';
import css from './Empty.module.scss';

const Empty = ({ title, subtitle }) => {
  return (
    <div className={css.Empty}>
      <Icon name="error" color="var(--red-color)" size="100" />
      <TitleBox align="center">
        <Title size="h4">{title}</Title>
        <Text>{subtitle}</Text>
      </TitleBox>
    </div>
  );
};

export default Empty;
