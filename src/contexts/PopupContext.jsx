import { createContext, useContext, useState, useEffect, useRef } from 'react';
import { bodyLock, bodyUnlock, showPopup, hidePopup } from 'utils/popupFunctions';

const defaultPopupType = 'request';

const PopupContext = createContext();

export const usePopup = () => useContext(PopupContext);

export const PopupProvider = ({ children }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [isOpenPopup, setIsOpenPopup] = useState(false);
  const [isPopupLoading, setIsPopupLoading] = useState(false);
  const [popupType, setPopupType] = useState(defaultPopupType);
  const [popupTitle, setPopupTitle] = useState('');
  const [popupText, setPopupText] = useState('');
  const [popupObject, setPopupObject] = useState({});
  const containerRef = useRef();

  // SCREEN WIDTH CHECK
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1023);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  //CLOSE POPUP AND MENU WITH ESCAPE
  useEffect(() => {
    const handleKeyPress = event => {
      if (event.key === 'Escape') {
        escapeActions();
      }
    };
    document.addEventListener('keydown', handleKeyPress);
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  });

  const escapeActions = () => {
    if (isOpenPopup) {
      popupClose();
      return;
    }
    menuClose();
  };

  //POPUP LOADING
  const setLoading = () => {
    setIsPopupLoading(true);
  };

  const unsetLoading = () => {
    setIsPopupLoading(false);
  };

  //MENU TOGGLE
  const menuToggle = () => {
    bodyLock(window.innerWidth - document.body.clientWidth);
    setIsOpenMenu(!isOpenMenu);
    if (isOpenMenu) {
      bodyUnlock();
    }
  };

  //MENU CLOSE
  const menuClose = () => {
    setIsOpenMenu(false);
    bodyUnlock();
  };

  //POPUP OPEN
  const popupOpen = (type, title, text, object = {}) => {
    setIsOpenPopup(true);
    if (!isOpenMenu || !isOpenPopup) {
      bodyLock(window.innerWidth - document.body.clientWidth);
    }
    setPopupType(type);
    title && setPopupTitle(title);
    text && setPopupText(text);
    object && setPopupObject(object);
    setTimeout(() => {
      showPopup();
    }, 1);
  };

  //POPUP CLOSE
  const popupClose = () => {
    hidePopup();
    setTimeout(() => {
      setIsOpenPopup(false);
      setPopupType(defaultPopupType);
      setPopupTitle('');
      setPopupText('');
      setPopupObject({});
      if (!isOpenMenu) {
        bodyUnlock();
      }
    }, 310);
  };

  return (
    <PopupContext.Provider
      ref={containerRef}
      value={{
        isMobile,
        isPopupLoading,
        isOpenPopup,
        isOpenMenu,
        popupType,
        popupTitle,
        popupText,
        popupObject,
        setLoading,
        unsetLoading,
        popupClose,
        popupOpen,
        menuToggle,
        menuClose,
      }}
    >
      {children}
    </PopupContext.Provider>
  );
};
