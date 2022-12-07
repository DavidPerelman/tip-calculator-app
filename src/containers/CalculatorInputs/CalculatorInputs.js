import React, { useEffect } from 'react';
import Container from '../../components/Container/Container';
import './CalculatorInputs.css';
import TipPercentsButtons from '../TipPercentsButtons/TipPercentsButtons';
import Input from '../../components/Input/Input';

const CalculatorInputs = ({
  numberOfPeople,
  changeNumberOfPeopleInput,
  changeTipPercentInput,
  changeBillInput,
  tipPercent,
  setTipPercent,
  error,
  setError,
}) => {
  return (
    <div data-testid='CalculatorInputs'>
      <Container size='medium' color='none' className='input'>
        <div className='CalculatorInputs-container'>
          <div className='bill-container'>
            <div className='bill-headers'>
              <p className='bill-header'>Bill</p>

              {/* {error ? (
                <p className='number-of-people-error'>Can't be zero</p>
              ) : (
                ''
              )} */}
            </div>

            <div className='wrapper'>
              <div className='dollar-icon'></div>
              <Input
                type='number'
                id='bill-input'
                placeholder='0'
                onChange={changeBillInput}
                dataTestid='billInput'
                className='bill-input'
              />
            </div>
          </div>
          <div className='select-tip-container'>
            <p className='select-tip-header'>Select Tip %</p>
            <TipPercentsButtons
              numberOfPeople={numberOfPeople}
              // buttonClick={buttonClick}
              setError={setError}
              tipPercent={tipPercent}
              setTipPercent={setTipPercent}
              changeTipPercentInput={changeTipPercentInput}
            />
          </div>

          <div className='number-of-people-container'>
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
              <Input
                type='number'
                id='number-of-people-input'
                placeholder='0'
                onChange={changeNumberOfPeopleInput}
                dataTestid='numberOfPeopleInput'
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
