import React from 'react';
import Container from '../../components/Container/Container';
import './CalculatorInputs.css';
import TipPercentsButtons from '../TipPercentsButtons/TipPercentsButtons';

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
  // const buttonClick = (e) => {
  //   setTipPercent(Number(e.target.value) / 100);
  //   const tipPercentInput = document.getElementById('tip-percents-input');
  //   tipPercentInput.value = '';

  //   const buttons = document.getElementsByClassName('Button');

  //   Object.keys(buttons).forEach((key) => {
  //     if (Number(buttons[key].value) / 100 === Number(e.target.value) / 100) {
  //       setTipPercent(Number(e.target.value) / 100);
  //       buttons[key].classList.remove('non-active-button');
  //       e.target.classList.add('active-button');
  //     } else if (buttons[key].innerHTML === 'RESET') {
  //       e.target.classList.add('active-button');
  //     } else {
  //       buttons[key].classList.add('non-active-button');
  //       buttons[key].classList.remove('active-button');
  //     }
  //   });
  // };

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
              <input
                type='number'
                placeholder='0'
                onChange={changeBillInput}
                data-testid='billInput'
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
