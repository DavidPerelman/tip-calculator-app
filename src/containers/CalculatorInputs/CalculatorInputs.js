import React from 'react';
import Container from '../../components/Container/Container';
import billHeader from '../../asset/bill.png';
import numberOfPeopleIconHeader from '../../asset/number-of-people.png';
import './CalculatorInputs.css';

const CalculatorInputs = ({ changeNumberOfPeopleInput, changeBillInput }) => {
  return (
    <div data-testid='CalculatorInputs'>
      <Container size='medium' color='white'>
        <div className='CalculatorInputs-container'>
          <div>
            <img src={billHeader} className='bill-header' alt='bill-header' />
            <div className='wrapper'>
              <div className='dollar-icon'></div>
              <input
                type='number'
                placeholder='0'
                onChange={changeBillInput}
                data-testid='billInput'
                className='bill-input'
              />
            </div>
          </div>

          <div>
            <img
              src={numberOfPeopleIconHeader}
              className='number-of-people'
              alt='number-of-people'
            />
            <div className='wrapper'>
              <div className='person-icon'></div>
              <input
                type='number'
                placeholder='0'
                onChange={changeNumberOfPeopleInput}
                data-testid='numberOfPeopleInput'
                className='number-of-people-input'
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CalculatorInputs;
