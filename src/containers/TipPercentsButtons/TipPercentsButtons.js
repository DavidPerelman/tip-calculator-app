import React from 'react';
import Button from '../../components/Button/Button';
import './TipPercentsButtons.css';

const TipPercentsButtons = ({ tipPercent, setTipPercent }) => {
  return (
    <div className='TipPercentsButtons'>
      <Button backgroundColor='fdfd' color='white' size='small'>
        5%
      </Button>
      <Button backgroundColor='fdfd' color='white' size='small'>
        5%
      </Button>
      <Button backgroundColor='fdfd' color='white' size='small'>
        5%
      </Button>
      <Button backgroundColor='fdfd' color='white' size='small'>
        5%
      </Button>
      <Button backgroundColor='fdfd' color='white' size='small'>
        5%
      </Button>
      <input
        type='number'
        placeholder='0'
        // onChange={changeBillInput}
        data-testid='billInput'
        className='tip-percents-input'
      />
    </div>
  );
};

export default TipPercentsButtons;
