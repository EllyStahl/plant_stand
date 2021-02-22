import './App.css';
import PlantBox from './components/PlantBox';
import * as react from 'react'

import snake from './images/snake.png';
import tetrasperma from './images/tetrasperma.png';
import oxalis from './images/oxalis.png';
import aglaonema from './images/aglaonema.png';

function App() {
  
  // const[cashOnHand]
  const[snakeCount, setSnakeCount] = react.useState(0)
  const[tetraspermaCount, setTetraspermaCount] = react.useState(0)
  const[oxalisCount, setOxalisCount] = react.useState(0)
  const[aglaonemaCount, setAglaonemaCount] = react.useState(0)

  function buy(name){
    switch (name){
      case 'snake':
        setSnakeCount(snakeCount+1)
        break;
      case 'tetrasperma':
        setTetraspermaCount(tetraspermaCount+1)
        break;
      case 'oxalis':
        setOxalisCount(oxalisCount+1)
        break;
      case 'aglaonema':
        setAglaonemaCount(aglaonemaCount+1)
        break;
    }
  }
  function sell(name){
    switch (name){
      case 'snake':
        setSnakeCount(snakeCount-1)
        break;
      case 'tetrasperma':
        setTetraspermaCount(tetraspermaCount-1)
        break;
      case 'oxalis':
        setOxalisCount(oxalisCount-1)
        break;
      case 'aglaonema':
        setAglaonemaCount(aglaonemaCount-1)
        break;
    }
  }

  return (
    <div className="App">
      <PlantBox name="snake" image={snake} buy={buy} sell={sell} count={snakeCount}/>
      <PlantBox name="tetrasperma" image={tetrasperma} buy={buy} sell={sell} count={tetraspermaCount}/>
      <PlantBox name="oxalis" image={oxalis} buy={buy} sell={sell} count={oxalisCount}/>
      <PlantBox name="aglaonema" image={aglaonema} buy={buy} sell={sell} count={aglaonemaCount}/>
    </div>
  )
}

export default App;
