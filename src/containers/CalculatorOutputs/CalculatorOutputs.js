import React from 'react';
import Container from '../../components/Container/Container';
import './CalculatorOutputs.css';

const CalculatorOutputs = ({ totalTipPerPerson, totalBillPerPerson }) => {
  return (
    // <div data-testid='CalculatorOutputs' className='CalculatorOutputs'>
    <Container size='medium' color='green'>
      <div className='tip-amount-output'>
        <div className='tip-amount-text-output'>
          <span className='text-16 text-white'>Tip Amount</span>
          <br />
          <span className='text-13 text-gray-green'>/ person</span>
        </div>
        <div className='tip-amount-value-output'>
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

      <div className='total-output'>
        <div className='total-text-output'>
          <span className='text-16 text-white'>Total</span>
          <br />
          <span className='text-13 text-gray-green'>/ person</span>
        </div>
        <div className='total-value-output'>
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
    </Container>
    // </div>
  );
};

export default CalculatorOutputs;
