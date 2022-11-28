import React from 'react';
import Button from '../../components/Button/Button';

const TipPercentsButtons = ({ tipPercent, setTipPercent }) => {
  return (
    <div>
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
    </div>
  );
};

export default TipPercentsButtons;
