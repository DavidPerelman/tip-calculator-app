import React from 'react';
import Button from '../../components/Button/Button';
import './TipPercentsButtons.css';

const TipPercentsButtons = ({
  tipPercent,
  setTipPercent,
  changeTipPercentInput,
}) => {
  const buttonClick = (e) => {
    setTipPercent(Number(e.target.value) / 100);
    console.log(e.target.value);
  };
  return (
    <div className='TipPercentsButtons'>
      <Button
        backgroundColor='fdfd'
        color='white'
        size='small'
        value='4'
        onClick={buttonClick}
      >
        5%
      </Button>
      <Button
        backgroundColor='fdfd'
        color='white'
        size='small'
        value='10'
        onClick={buttonClick}
      >
        10%
      </Button>
      <Button
        backgroundColor='fdfd'
        color='white'
        size='small'
        value='15'
        onClick={buttonClick}
      >
        15%
      </Button>
      <Button
        backgroundColor='fdfd'
        color='white'
        size='small'
        value='25'
        onClick={buttonClick}
      >
        25%
      </Button>
      <Button
        backgroundColor='fdfd'
        color='white'
        size='small'
        value='50'
        onClick={buttonClick}
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
