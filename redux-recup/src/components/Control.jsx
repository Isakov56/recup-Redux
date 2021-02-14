import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux'
import {useDispatch} from 'react-redux'


function Counter() {
    const dispatch = useDispatch()
    return (
        <div>
            <button onClick={() => dispatch({type: 'INCREMENT'})}>+</button>
            <button onClick={() => dispatch({type: 'DECREMENT'})}>-</button>
        </div>
    )
}
export default Counter
