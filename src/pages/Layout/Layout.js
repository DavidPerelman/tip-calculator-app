import React, { useEffect, useState } from 'react';
import './Layout.css';
import SPLITTER from '../../asset/SPLITTER.png';
import Container from '../../components/Container/Container';
import CalculatorInputs from '../../containers/CalculatorInputs/CalculatorInputs';
import CalculatorOutputs from '../../containers/CalculatorOutputs/CalculatorOutputs';
import TipPercentsButtons from '../../containers/TipPercentsButtons/TipPercentsButtons';

const Layout = () => {
  const [bill, setBill] = useState(0);
  const [tipPercent, setTipPercent] = useState(0.15);
  const [totalTip, setTotalTip] = useState(0);
  const [numberOfPeople, setNumberOfPeople] = useState(0);
  const [totalTipPerPerson, setTotalTipPerPerson] = useState(0);
  const [totalBillPerPerson, setTotalBillPerPerson] = useState(0);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (bill === 0) {
      return;
    } else if (numberOfPeople < 1) {
      setTotalTipPerPerson(0);
      setTotalBillPerPerson(0);
      return setError(true);
    } else {
      setError(false);
      setTotalTipPerPerson((bill * tipPercent) / numberOfPeople);
      setTotalBillPerPerson(bill / numberOfPeople + totalTipPerPerson);
    }
  }, [bill, tipPercent, totalTipPerPerson, numberOfPeople]);

  const changeBillInput = (e) => {
    e.preventDefault();
    setBill(Number(e.target.value));
    setTotalTip(Number(tipPercent * bill));
  };

  const changeNumberOfPeopleInput = (e) => {
    e.preventDefault();
    setNumberOfPeople(Number(e.target.value));
  };

  return (
    <div className='Layout'>
      <img src={SPLITTER} className='SPLITTER' alt='SPLITTER' />
      <div className='calculate-container'>
        <Container size='big' color='white'>
          <div className='calculation-container'>
            <CalculatorInputs
              bill={bill}
              error={error}
              setBill={setBill}
              tipPercent={tipPercent}
              setTipPercent={setTipPercent}
              numberOfPeople={numberOfPeople}
              setNumberOfPeople={setNumberOfPeople}
              changeBillInput={changeBillInput}
              changeNumberOfPeopleInput={changeNumberOfPeopleInput}
            />
            <CalculatorOutputs
              totalTipPerPerson={totalTipPerPerson}
              totalBillPerPerson={totalBillPerPerson}
            />
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Layout;
