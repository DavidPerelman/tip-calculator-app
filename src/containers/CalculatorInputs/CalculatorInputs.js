import React, { useState } from 'react';
import Container from '../../components/Container/Container';
import billHeader from '../../asset/bill.png';
import numberOfPeopleIconHeader from '../../asset/number-of-people.png';
import './CalculatorInputs.css';

const CalculatorInputs = () => {
  const [bill, setBill] = useState('');
  const [numberOfPeople, setNumberOfPeople] = useState('');

  return (
    <div data-testid='CalculatorInputs'>
      <Container size='medium' color='white'>
        <div id='bill-input'>
          <img src={billHeader} className='bill-header' alt='bill-header' />
          <div class='wrapper'>
            <div class='dollar-icon'></div>
            <input
              type='text'
              onChange={(e) => setBill(e.target.value)}
              data-testid='billInput'
              className='bill-input'
              value={bill}
            />
          </div>
        </div>

        <div id='bill-input'>
          <img
            src={numberOfPeopleIconHeader}
            className='number-of-people'
            alt='number-of-people'
          />
          <div class='wrapper'>
            <div class='person-icon'></div>
            <input
              type='text'
              onChange={(e) => setNumberOfPeople(e.target.value)}
              data-testid='billInput'
              className='bill-input'
              value={numberOfPeople}
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CalculatorInputs;
