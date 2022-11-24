import React, { useState } from 'react';
import Container from '../../components/Container/Container';
import header from '../../asset/bill.png';
import './CalculatorInputs.css';

const CalculatorInputs = () => {
  const [bill, setBill] = useState(0);

  return (
    <div data-testid='CalculatorInputs'>
      <Container size='medium' color='white'>
        <div id='bill-input'>
          <img src={header} className='bill-header' alt='bill-header' />
          <input
            type='text'
            data-testid='billInput'
            className='bill-input'
            value={bill}
          />
        </div>
      </Container>
    </div>
  );
};

export default CalculatorInputs;
