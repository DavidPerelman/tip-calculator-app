import React, { useState } from 'react';
import './Layout.css';
import SPLITTER from '../../asset/SPLITTER.png';
import Container from '../../components/Container/Container';
import CalculatorInputs from '../../containers/CalculatorInputs/CalculatorInputs';
import CalculatorOutputs from '../../containers/CalculatorOutputs/CalculatorOutputs';

const Layout = () => {
  const [bill, setBill] = useState('');
  const [tipPercent, setTipPercent] = useState(0);
  const [numberOfPeople, setNumberOfPeople] = useState('');
  const [tipAmount, setTipAmount] = useState('0.00');

  const changeBillInput = (e) => {
    e.preventDefault();
    if (bill === NaN) {
      return setBill(0);
    } else {
      setBill(parseInt(e.target.value));
      console.log(parseInt(bill));
    }
  };

  const changeNumberOfPeopleInput = (e) => {
    e.preventDefault();
    if (numberOfPeople === NaN) {
      return setNumberOfPeople(0);
    } else {
      setNumberOfPeople(parseInt(e.target.value));
      console.log(parseInt(numberOfPeople));
    }
  };

  return (
    <div className='Layout'>
      <img src={SPLITTER} className='SPLITTER' alt='SPLITTER' />
      <div className='calculate-container'>
        <Container size='big' color='white'>
          <div className='calculation-container'>
            <CalculatorInputs
              bill={bill}
              setBill={setBill}
              numberOfPeople={numberOfPeople}
              setNumberOfPeople={setNumberOfPeople}
              changeBillInput={changeBillInput}
              changeNumberOfPeopleInput={changeNumberOfPeopleInput}
            />
            <CalculatorOutputs
              tipAmount={tipAmount}
              setTipAmount={setTipAmount}
            />
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Layout;
