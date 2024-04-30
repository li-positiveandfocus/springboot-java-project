import './Counter.css';
import { useState } from 'react';

import CounterButton from './CounterButton';

// common state for different counter buttons
export default function Counter(){
    //[0,f] 0 is the state and f is the function to update the state
    // const state = useState(0);
    const [count, setCount] = useState(0);

    function incrementCounterParentFunction(by){
        setCount(count+by)
    }

    function decrementCounterParentFunction(by){
        setCount(count-by)
    }

    function resetCounter(){
        setCount(0)
    }

    return(
    <>
      <span className="count">{count}</span>
      <CounterButton by={1} incrementMethod = {incrementCounterParentFunction} decrementMethod = {decrementCounterParentFunction}/>
      <CounterButton by={2} incrementMethod = {incrementCounterParentFunction} decrementMethod = {decrementCounterParentFunction}/>
      <CounterButton by={5} incrementMethod = {incrementCounterParentFunction} decrementMethod = {decrementCounterParentFunction}/>
      <button className="resetButton" 
                        onClick={resetCounter}
                > Reset
                </button>
    </>
    )
}

