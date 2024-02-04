import ReactDOM from 'react-dom';
import { CloseButton } from 'components/Buttons';
import { usePopup } from 'contexts/PopupContext';
import PopupError from './PopupError';
import PopupConfirm from './PopupConfirm';
import PopupCar from './PopupCar';
import './Popup.scss';

const Popup = () => {
  const { isPopupLoading, isOpenPopup, popupType, popupTitle, popupText, popupObject, popupClose } = usePopup();

  const popupContentClasses = {
    'popup-content': true,
    'type-error': popupType === 'error',
    'type-confirm': popupType === 'confirm',
    'type-car': popupType === 'car',
    'is-loading': isPopupLoading,
  };

  const currentPopupContentClasses = Object.keys(popupContentClasses)
    .filter(key => popupContentClasses[key])
    .join(' ');

  return ReactDOM.createPortal(
    <>
      {isOpenPopup && (
        <div className="popup" onClick={popupClose}>
          <div className={currentPopupContentClasses} onClick={e => e.stopPropagation()}>
            <CloseButton onClick={popupClose} />
            {popupType === 'error' && <PopupError title={popupTitle} text={popupText} />}
            {popupType === 'confirm' && <PopupConfirm title={popupTitle} text={popupText} />}
            {popupType === 'car' && <PopupCar car={popupObject} />}
          </div>
        </div>
      )}
    </>,
    document.body
  );
};

export default Popup;
