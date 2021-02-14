import React from 'react'
import {useSelector} from 'react-redux'

export default function Micky() {
    const micky = useSelector(state => state.micky)
    return (
        <div>
            <h1>{micky}</h1>
        </div>
    )
}
