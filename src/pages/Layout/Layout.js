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
