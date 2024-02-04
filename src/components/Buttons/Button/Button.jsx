import { NavLink } from 'react-router-dom';
import css from './Button.module.scss';

const Button = ({ to, onClick, full, variant, blank, disabled, children }) => {
  const allButtonClasses = {
    [css.Button]: true,
    [css.Full]: full,
    [css.White]: variant === 'white',
  };

  const currentClasses = Object.keys(allButtonClasses)
    .filter(key => allButtonClasses[key])
    .join(' ');

  const buttonElement = to ? (
    <NavLink to={to} className={currentClasses} target={blank ? '_blank' : undefined}>
      <span>{children}</span>
    </NavLink>
  ) : onClick ? (
    <button type="button" className={currentClasses} onClick={onClick} disabled={disabled}>
      <span>{children}</span>
    </button>
  ) : (
    <button type="submit" className={currentClasses} disabled={disabled}>
      <span>{children}</span>
    </button>
  );

  return buttonElement;
};

export default Button;
