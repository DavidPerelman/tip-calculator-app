import React, { useEffect } from 'react';
import Button from '../../components/Button/Button';
import './TipPercentsButtons.css';

const TipPercentsButtons = ({
  setTipPercent,
  changeTipPercentInput,
  buttonClick,
}) => {
  useEffect(() => {
    // const buttons = document.getElementsByClassName('Button');
    // Object.keys(buttons).forEach((key) => {
    //   buttons[key].addEventListener('click', buttonClick, false);
    // });
  }, []);

  // const buttonClick = (e) => {
  //   console.log(e.target.classList);

  //   const tipPercentInput = document.getElementById('tip-percents-input');
  //   tipPercentInput.value = '';
  //   const buttons = document.getElementsByClassName('Button');
  // };

  // const buttonClick = (e) => {
  // const tipPercentInput = document.getElementById('tip-percents-input');
  // tipPercentInput.value = '';
  // const buttons = document.getElementsByClassName('Button');

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

  const percentsValues = [5, 10, 15, 25, 50];

  return (
    <div className='TipPercentsButtons'>
      {/* <Button
        testId='button-5-percent'
        backgroundColor='non-active-button'
        color='white'
        size='small'
        value='5'
      >
        5%
      </Button>
      <Button
        testId='button-10-percent'
        backgroundColor='non-active-button'
        color='white'
        size='small'
        value='10'
      >
        10%
      </Button>
      <Button
        testId='button-15-percent'
        backgroundColor='non-active-button'
        color='white'
        size='small'
        value='15'
      >
        15%
      </Button>
      <Button
        testId='button-25-percent'
        backgroundColor='non-active-button'
        color='white'
        size='small'
        value='25'
      >
        25%
      </Button>
      <Button
        testId='button-50-percent'
        backgroundColor='non-active-button'
        color='white'
        size='small'
        value='50'
      >
        50%
      </Button> */}
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
      <input
        id='tip-percents-input'
        type='number'
        placeholder='Custom'
        onChange={changeTipPercentInput}
        data-testid='tipPercentInput'
        className='tip-percents-input'
      />
    </div>
    // <div className='TipPercentsButtons'>
    //   <Button
    //     testId='button-5-percent'
    //     backgroundColor='non-active-button'
    //     color='white'
    //     size='small'
    //     value='5'
    //   >
    //     5%
    //   </Button>
    //   <Button
    //     testId='button-10-percent'
    //     backgroundColor='non-active-button'
    //     color='white'
    //     size='small'
    //     value='10'
    //   >
    //     10%
    //   </Button>
    //   <Button
    //     testId='button-15-percent'
    //     backgroundColor='non-active-button'
    //     color='white'
    //     size='small'
    //     value='15'
    //   >
    //     15%
    //   </Button>
    //   <Button
    //     testId='button-25-percent'
    //     backgroundColor='non-active-button'
    //     color='white'
    //     size='small'
    //     value='25'
    //   >
    //     25%
    //   </Button>
    //   <Button
    //     testId='button-50-percent'
    //     backgroundColor='non-active-button'
    //     color='white'
    //     size='small'
    //     value='50'
    //   >
    //     50%
    //   </Button>
    //   <input
    //     id='tip-percents-input'
    //     type='number'
    //     placeholder='Custom'
    //     onChange={changeTipPercentInput}
    //     data-testid='tipPercentInput'
    //     className='tip-percents-input'
    //   />
    // </div>
  );
};

export default TipPercentsButtons;
