import React from 'react';
import Container from '../../components/Container/Container';
import billHeader from '../../asset/bill.png';
import numberOfPeopleIconHeader from '../../asset/number-of-people.png';
import numberOfPeopleIconError from '../../asset/error.png';
import './CalculatorInputs.css';
import TipPercentsButtons from '../TipPercentsButtons/TipPercentsButtons';

const CalculatorInputs = ({
  changeNumberOfPeopleInput,
  changeBillInput,
  tipPercent,
  setTipPercent,
  error,
}) => {
  return (
    <div data-testid='CalculatorInputs'>
      <Container size='medium' color='white'>
        <div className='CalculatorInputs-container'>
          <div>
            <p className='bill-header'>Bill</p>
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
            <p className='select-tip-header'>Select Tip %</p>
            <TipPercentsButtons
              tipPercent={tipPercent}
              setTipPercent={setTipPercent}
            />
          </div>

          <div>
            <div className='number-of-people-headers'>
              <p className='number-of-people-header'>Number Of People</p>

              {error ? (
                <p className='number-of-people-error'>Can't be zero</p>
              ) : (
                ''
              )}
            </div>
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
