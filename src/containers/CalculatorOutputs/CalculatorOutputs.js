import React from 'react';
import Button from '../../components/Button/Button';
import Container from '../../components/Container/Container';
import './CalculatorOutputs.css';

const CalculatorOutputs = ({
  totalTipPerPerson,
  totalBillPerPerson,
  setBill,
  setNumberOfPeople,
  setTipPercent,
  setTotalBillPerPerson,
}) => {
  const resetButtonClick = () => {
    setTotalBillPerPerson(0);
    setBill(0);
    setNumberOfPeople(0);
    setTipPercent(0);

    document.getElementsByClassName('number-of-people-input')[0].value = '';
    document.getElementsByClassName('bill-input')[0].value = '';
  };
  return (
    <Container size='medium' color='green' className='output'>
      <div className='total-output'>
        <div className='tip-amount-text-output'>
          <span className='text-16 text-white'>Tip Amount</span>
          <br />
          <span className='text-13 text-gray-green'>/ person</span>
        </div>
        <div className='total-value-output'>
          <span
            data-testid='tipAmountOutput'
            className='text-48 text-light-sea-green'
          >
            {`${totalTipPerPerson.toLocaleString('en-US', {
              style: 'currency',
              currency: 'USD',
            })}`}
          </span>
        </div>
      </div>

      <br />

      <div className='tip-amount-output'>
        <div className='total-text-output'>
          <span className='text-16 text-white'>Total</span>
          <br />
          <span className='text-13 text-gray-green'>/ person</span>
        </div>
        <div className='tip-amount-value-output'>
          <span
            data-testid='tipAmountOutput'
            className='text-48 text-light-sea-green'
          >
            {`${totalBillPerPerson.toLocaleString('en-US', {
              style: 'currency',
              currency: 'USD',
            })}`}
          </span>
        </div>
      </div>

      <Button
        color='active-button'
        size='big'
        className='reset-button'
        onClick={resetButtonClick}
      >
        RESET
      </Button>
    </Container>
  );
};

export default CalculatorOutputs;
