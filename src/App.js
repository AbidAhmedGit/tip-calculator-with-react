import React, {useState} from 'react';

function App() {

  function handleClick(event){
    console.log((event))
  }

  const [bill, setBill] = useState(50);
  const [tipPercentage, setTipPercentage] = useState(18);
  const [people, setPeople] = useState(1);
  const [totalTip, setTotalTip] = useState(0)

  const totalTipCalc = (tipPercentage/100) * bill;
  const tipPerPerson = (totalTipCalc) / people;



  return (
    <>

      <h1>Tip Calculator</h1>
      <form>
        <div>
        <label>
          Bill:
        </label>
        </div>
        <div>
        <input
          type='number'
          defaultValue={bill}
          onChange={event => setBill(event.target.value)}
          min={0}
          />
        </div>
        {/* {console.log(bill)} */}
        <div>
        <label>
          Tip Percentage:
        </label>
        </div>
        <div>
        <input
          type='number'
          defaultValue={tipPercentage}
          onChange={event => setTipPercentage(event.target.value)}
          min={0}
          />
        </div>
        <div>
        <label>
          Number of People:
        </label>
        </div>
        <div>
        <input
          type='number'
          defaultValue={people}
          onChange={event => setPeople(event.target.value)}
          min={0}
          />
        </div>
          {/* {console.log(people)} */}

        <p>
          Total Tip:
          <span>{(tipPercentage && bill) ? ` $${totalTipCalc.toFixed(2)}` : ` -`}</span>
        </p>
        <p>
          Tip per person:
          <span>{(totalTipCalc && people) ? ` $${tipPerPerson.toFixed(2)}` : `  -`}</span>
        </p>

      </form>
    </>
  );
}

export default App;
