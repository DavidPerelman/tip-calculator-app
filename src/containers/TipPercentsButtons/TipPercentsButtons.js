import React from 'react';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import './TipPercentsButtons.css';

const TipPercentsButtons = ({ changeTipPercentInput, setTipPercent }) => {
  const percentsValues = [5, 10, 15, 25, 50];

  const buttonClick = (e) => {
    setTipPercent(Number(e.target.value) / 100);
    const tipPercentInput = document.getElementById('tip-percents-input');
    tipPercentInput.value = '';

    const buttons = document.getElementsByClassName('Button');

    Object.keys(buttons).forEach((key) => {
      if (Number(buttons[key].value) / 100 === Number(e.target.value) / 100) {
        setTipPercent(Number(e.target.value) / 100);
        buttons[key].classList.remove('non-active-button');
        e.target.classList.add('active-button');
      } else if (buttons[key].innerHTML === 'RESET') {
        e.target.classList.add('active-button');
      } else {
        buttons[key].classList.add('non-active-button');
        buttons[key].classList.remove('active-button');
      }
    });
  };

  return (
    <div className='TipPercentsButtons'>
      {percentsValues.map((value, i) => (
        <Button
          key={i}
          testId={`button-${value}-percent`}
          backgroundColor='non-active-button'
          color='white'
          size='small'
          onClick={(e) => buttonClick(e)}
          value={`${value}`}
        >
          {`${value}`}%
        </Button>
      ))}
      <Input
        type='number'
        id='tip-percents-input'
        placeholder='Custom'
        onChange={changeTipPercentInput}
        dataTestid='tipPercentInput'
        className='tip-percents-input'
      />
      {/* <input
        id='tip-percents-input'
        type='number'
        placeholder='Custom'
        onChange={changeTipPercentInput}
        data-testid='tipPercentInput'
        className='tip-percents-input'
      /> */}
    </div>
  );
};

export default TipPercentsButtons;
