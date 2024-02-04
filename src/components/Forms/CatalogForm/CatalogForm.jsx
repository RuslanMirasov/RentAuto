import { Button } from 'components/Buttons';
import { useState, useEffect } from 'react';
import { Form, Input, Fieldset } from '..';
import { brends } from '../../../api/brends';
import css from './CatalogForm.module.scss';

const CatalogForm = () => {
  const [brendsList] = useState(brends);
  const [priceList, setPriceList] = useState([]);
  const [formValues, setFormValues] = useState({
    brend: '',
    price: '',
    from: '',
    to: '',
  });

  useEffect(() => {
    const generatePriceList = (from, to) => {
      const result = [];
      for (let i = from; i <= to; i += 10) {
        result.push(i.toString());
      }
      return result;
    };

    const fromNumber = parseInt(formValues.from) || 10;
    const toNumber = parseInt(formValues.to) || 1000;

    if (!isNaN(fromNumber) && !isNaN(toNumber) && fromNumber <= toNumber) {
      const newPriceList = generatePriceList(fromNumber, toNumber);
      setFormValues(prevValues => ({
        ...prevValues,
        price: '',
      }));
      setPriceList(newPriceList);
    }
  }, [formValues.from, formValues.to]);

  const handleSubmit = e => {
    console.log(formValues);
    setFormValues({
      brend: '',
      price: '',
      from: '',
      to: '',
    });
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setFormValues(prevValues => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const isFormEmpty = () => {
    return Object.values(formValues).every(value => value === '' || value === null || value === undefined);
  };

  return (
    <div className={css.FormWrapper}>
      <Form onSubmit={handleSubmit}>
        <Input
          type="select"
          name="brend"
          label="Car brand"
          placeholder="Select the make"
          options={brendsList}
          value={formValues.brend}
          onChange={handleChange}
        />
        <Input
          type="select"
          name="price"
          label="Price/ 1 hour"
          placeholder="To $"
          options={priceList}
          value={formValues.price}
          onChange={handleChange}
        />
        <Fieldset col="2" label="Сar mileage / km">
          <Input type="number" name="from" placeholder="From " min="0" max="1000" value={formValues.from} onChange={handleChange} />
          <Input type="number" name="to" placeholder="To " min="0" max="1000" value={formValues.to} onChange={handleChange} />
        </Fieldset>
        <Button disabled={isFormEmpty()}>Search</Button>
      </Form>
    </div>
  );
};

export default CatalogForm;
