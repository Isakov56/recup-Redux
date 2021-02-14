import React from 'react'
import {useDispatch} from 'react-redux'

export default function Changer() {
    const dispatch = useDispatch()
    return (
        <div>
            <button onClick={() => dispatch({type:'CHANGE_NAME', payload: 'micky the mouse'})}>change</button>
        </div>
    )
}
