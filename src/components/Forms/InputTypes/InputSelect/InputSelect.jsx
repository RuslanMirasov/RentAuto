import Icon from 'components/Icon/Icon';
import { useState, useRef, useEffect } from 'react';
import css from '../InputText/InputText.module.scss';

const InputSelect = ({ name, label, placeholder, required, options, value = '', onChange }) => {
  const selectInputRef = useRef(null);
  const selectWrapperRef = useRef(null);
  const [selectValue, setSelectValue] = useState(value);
  const [selectValueText, setSelectValueText] = useState(value);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setSelectValue(value);
  }, [value]);

  const handleOptionClick = val => {
    setSelectValue(val);
    if (name === 'rentalPrice') {
      setSelectValueText(`${val} $`);
      onChange({ target: { name, value: val } });
      return;
    }
    setSelectValueText(val);
    onChange({ target: { name, value: val } });
  };

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = event => {
    if (selectWrapperRef.current && !selectWrapperRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <label className={`${css.Label} ${isOpen ? css.open : ''}`} ref={selectWrapperRef}>
      {label && <span className={css.LabelText}>{label}</span>}
      <span className={css.LabelInput}>
        <input type="hidden" name={name} value={selectValue} required={required} ref={selectInputRef} />
        <div className={css.Input} onClick={handleOpen}>
          {!selectValue ? <span className={css.Placeholder}>{placeholder}</span> : <span className={css.InputText}>{selectValueText}</span>}
          <div className={css.SelectArrow}>
            <Icon name="select-arrow" color="var(--text-color)" />
          </div>
          {options && (
            <div className={`${css.Options} ${isOpen ? css.open : ''} custom-scrollbar`}>
              <ul className={`custom-scrollbar`}>
                {Object.keys(options).map(key => (
                  <li key={key} datavalue={key} onClick={() => handleOptionClick(options[key])}>
                    {options[key]}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </span>
    </label>
  );
};

export default InputSelect;
