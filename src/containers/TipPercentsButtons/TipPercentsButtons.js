import React, { useEffect } from 'react';
import Button from '../../components/Button/Button';
import './TipPercentsButtons.css';

const TipPercentsButtons = ({ setTipPercent, changeTipPercentInput }) => {
  useEffect(() => {
    const buttons = document.getElementsByClassName('Button');

    Object.keys(buttons).forEach((key) => {
      buttons[key].addEventListener('click', buttonClick, false);
    });
  }, []);

  const buttonClick = (e) => {
    const buttons = document.getElementsByClassName('Button');

    Object.keys(buttons).forEach((key) => {
      if (Number(buttons[key].value) / 100 === Number(e.target.value) / 100) {
        console.log(e.target);
        setTipPercent(Number(e.target.value) / 100);
        buttons[key].classList.remove('non-active-button');
        e.target.classList.add('active-button');
      } else {
        buttons[key].classList.add('non-active-button');
        buttons[key].classList.remove('active-button');
      }
    });
  };

  return (
    <div className='TipPercentsButtons'>
      <Button
        backgroundColor='non-active-button'
        color='white'
        size='small'
        value='5'
        // onClick={buttonClick}
      >
        5%
      </Button>
      <Button
        backgroundColor='non-active-button'
        color='white'
        size='small'
        value='10'
        // onClick={buttonClick}
      >
        10%
      </Button>
      <Button
        backgroundColor='non-active-button'
        color='white'
        size='small'
        value='15'
        // onClick={buttonClick}
      >
        15%
      </Button>
      <Button
        backgroundColor='non-active-button'
        color='white'
        size='small'
        value='25'
        // onClick={buttonClick}
      >
        25%
      </Button>
      <Button
        backgroundColor='non-active-button'
        color='white'
        size='small'
        value='50'
        // onClick={buttonClick}
      >
        50%
      </Button>
      <input
        type='number'
        placeholder='Custom'
        onChange={changeTipPercentInput}
        data-testid='billInput'
        className='tip-percents-input'
      />
    </div>
  );
};

export default TipPercentsButtons;
