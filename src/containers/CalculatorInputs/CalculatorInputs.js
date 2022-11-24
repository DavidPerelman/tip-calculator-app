import React from 'react';
import Container from '../../components/Container/Container';
import bill from '../../asset/bill.png';
import './CalculatorInputs.css';

const CalculatorInputs = () => {
  return (
    <div data-testid='CalculatorInputs'>
      <Container size='medium' color='white'>
        <div id='bill-input'>
          <img src={bill} className='bill' alt='bill' />
          <input className='bill-input' value='0' />
        </div>
      </Container>
    </div>
  );
};

export default CalculatorInputs;
