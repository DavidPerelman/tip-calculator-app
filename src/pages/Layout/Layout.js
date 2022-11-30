import React, { useEffect, useState } from 'react';
import './Layout.css';
import SPLITTER from '../../asset/SPLITTER.png';
import CalculatorInputs from '../../containers/CalculatorInputs/CalculatorInputs';
import CalculatorOutputs from '../../containers/CalculatorOutputs/CalculatorOutputs';

const Layout = () => {
  const [bill, setBill] = useState(0);
  const [tipPercent, setTipPercent] = useState(0);
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
  };

  const changeNumberOfPeopleInput = (e) => {
    e.preventDefault();
    setNumberOfPeople(Number(e.target.value));
  };

  const changeTipPercentInput = (e) => {
    e.preventDefault();

    const buttons = document.getElementsByClassName('Button');

    Object.keys(buttons).forEach((key) => {
      if (buttons[key].innerHTML === 'RESET') {
        buttons[key].classList.add('active-button');
        buttons[key].classList.remove('non-active-button');
      } else {
        buttons[key].classList.add('non-active-button');
        buttons[key].classList.remove('active-button');
      }
    });

    setTipPercent(Number(e.target.value) / 100);
    console.log(Number(e.target.value / 100));
  };

  return (
    <div className='Layout'>
      <img src={SPLITTER} className='SPLITTER' alt='SPLITTER' />
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
          changeTipPercentInput={changeTipPercentInput}
          changeNumberOfPeopleInput={changeNumberOfPeopleInput}
        />
        <CalculatorOutputs
          setBill={setBill}
          setNumberOfPeople={setNumberOfPeople}
          setTipPercent={setTipPercent}
          totalTipPerPerson={totalTipPerPerson}
          totalBillPerPerson={totalBillPerPerson}
          setTotalBillPerPerson={setTotalBillPerPerson}
        />
      </div>
    </div>
  );
};

export default Layout;
