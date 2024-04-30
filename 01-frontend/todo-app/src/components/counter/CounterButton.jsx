import PropTypes from 'prop-types';
import { useState } from 'react';

export default function CounterButton({by, incrementMethod, decrementMethod}){

    // const [count, setCount] = useState(0);
    // console.log(by)

    // function incrementCounterFunction(){
    //     // state[1](state[0]+1)
    //     // console.log(state[0]);
    //     // console.log(state[1]);
    //     // console.log('increment clicked');
    //     // setCount(count+by)
    //     incrementMethod(by)
    //     // console.log(count)
    // }

    // function decrementCounterFunction(){
    //     // setCount(count-by)
    //     decrementMethod(by)
    //     // console.log(count)
    // }


    return (
        <div className="counter">
            <>
            <div>
                <button className="counterButton" 
                        onClick={()=>incrementMethod(by)}
                > +{by}
                </button>
                <button className="counterButton" 
                        onClick={()=>decrementMethod(by)}
                > -{by}
                </button>
            </div>
            </>
        </div>
    )
}

CounterButton.propTypes = {
    by: PropTypes.number
}

CounterButton.defaultProps = {
    by: 1
}