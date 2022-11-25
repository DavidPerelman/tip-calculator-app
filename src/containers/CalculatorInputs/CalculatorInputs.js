import React, { useState } from 'react';
import Container from '../../components/Container/Container';
import header from '../../asset/bill.png';
import './CalculatorInputs.css';

const CalculatorInputs = () => {
  const [bill, setBill] = useState('');

  console.log(bill);

  return (
    <div data-testid='CalculatorInputs'>
      <Container size='medium' color='white'>
        <div id='bill-input'>
          <img src={header} className='bill-header' alt='bill-header' />
          <div class='wrapper'>
            <div class='icon'></div>
            <input
              type='text'
              onChange={(e) => setBill(e.target.value)}
              data-testid='billInput'
              className='bill-input'
              value={bill}
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CalculatorInputs;
