import { useState, useEffect } from 'react';
import { validateInput } from 'utils/formFunctions';
import { InputCheckbox, InputHidden, InputRadio, InputSelect, InputText, InputTextarea } from '../InputTypes';

const Input = ({ type, name, required, label, placeholder, value = '', options, min, max, checked = false, onChange }) => {
  const [inputValue, setInputValue] = useState(value);
  const [inputChecked, setInputChecked] = useState(checked);

  useEffect(() => {
    setInputValue(value);
  }, [value]);

  useEffect(() => {
    setInputChecked(checked);
  }, [checked]);

  const handleChange = e => {
    if (required) {
      validateInput(e.target);
    }
    setInputValue(e.target.value);
    if (onChange) {
      onChange(e);
    }
  };

  const handleRadioChange = newChecked => {
    setInputChecked(newChecked);
    if (onChange) {
      onChange(newChecked);
    }
  };

  return (
    <>
      {type === 'hidden' ? (
        <InputHidden type={type} name={name} value={inputValue} />
      ) : type === 'textarea' ? (
        <InputTextarea name={name} value={inputValue} label={label} placeholder={placeholder} required={required} onChange={handleChange} />
      ) : type === 'radio' ? (
        <InputRadio
          type={type}
          name={name}
          label={label}
          value={inputValue}
          required={required}
          checked={inputChecked}
          onChange={handleRadioChange}
        />
      ) : type === 'checkbox' ? (
        <InputCheckbox
          type={type}
          name={name}
          label={label}
          value={inputValue}
          checked={inputChecked}
          required={required}
          onChange={handleRadioChange}
        />
      ) : type === 'select' ? (
        <InputSelect
          type={type}
          name={name}
          value={value}
          label={label}
          placeholder={placeholder}
          required={required}
          options={options}
          onChange={onChange}
        />
      ) : (
        <InputText
          type={type}
          name={name}
          label={label}
          value={inputValue}
          required={required}
          placeholder={placeholder}
          min={min}
          max={max}
          onChange={handleChange}
        />
      )}
    </>
  );
};

export default Input;
