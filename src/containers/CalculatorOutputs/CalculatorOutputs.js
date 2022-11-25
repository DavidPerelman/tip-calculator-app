import React from 'react';
import Container from '../../components/Container/Container';
import './CalculatorOutputs.css';

const CalculatorOutputs = () => {
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
            <span className='text-48 text-light-sea-green'>$4.27</span>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CalculatorOutputs;
