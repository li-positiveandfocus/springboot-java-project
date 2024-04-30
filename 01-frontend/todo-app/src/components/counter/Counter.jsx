import './Counter.css';
import { useState } from 'react';

export default function Counter({by}){
    //[0,f] 0 is the state and f is the function to update the state
    // const state = useState(0);
    const [count, setCount] = useState(0);

    // console.log(by)

    function incrementCounterFunction(){
        // state[1](state[0]+1)
        // console.log(state[0]);
        // console.log(state[1]);
        // console.log('increment clicked');
        setCount(count+by)
        console.log(count)
    }

    function decrementCounterFunction(){
        setCount(count-by)
        console.log(count)
    }


    return (
        <div className="counter">
            <span className="count">{count}</span>
            <>
            <div>
                <button className="counterButton" 
                        onClick={incrementCounterFunction}
                > +{by}
                </button>
                <button className="counterButton" 
                        onClick={decrementCounterFunction}
                > -{by}
                </button>
            </div>
            </>
        </div>
    )
}