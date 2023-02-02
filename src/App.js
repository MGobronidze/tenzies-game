import React from 'react';
import './App.css';
import Die from './components/Die';
import {nanoid} from "nanoid"


function App() {
  const [dice , setDice] = React.useState(allNewDice());

  function allNewDice(){
    let newDice=[]
    for (let i=0; i<10; i++){
          newDice.push(
            {
            value: Math.trunc(Math.random()*6 + 1),
            isHeld: false,
            id: nanoid()
            }
          )
    }
    return newDice
  }

  function rollDice(){
      setDice(allNewDice());
  }

  function holdDice(id) {
    setDice(oldDice => oldDice.map(die => {
        return die.id === id ? 
            {...die, isHeld: !die.isHeld} :
            die
    }))
}
  const DiceEl = dice.map( die => <Die key={die.id} value ={die.value} isHeld={die.isHeld} holdDice={() => holdDice(die.id)} />)
  return (
   <main> 
      <div className='dice-container '>
        {DiceEl} 
      </div> 
      <button className="roll-btn" onClick={rollDice}>Roll</button>
  </main>
  );
}

export default App;
