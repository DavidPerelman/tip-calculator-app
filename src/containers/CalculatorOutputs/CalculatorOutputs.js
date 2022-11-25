import React, { useState } from 'react';
import Container from '../../components/Container/Container';
import './CalculatorOutputs.css';

const CalculatorOutputs = ({ tipAmount, totalPayPerPerson }) => {
  return (
    <div data-testid='CalculatorOutputs'>
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
              {/* {`${tipAmount.toLocaleString('en-US', {
                style: 'currency',
                currency: 'USD',
              })}`} */}
              ${tipAmount}
            </span>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CalculatorOutputs;
