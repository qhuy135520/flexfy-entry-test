import React from 'react'
import './color.css'

const Color = ({ color, element }) => {
    return (
        <>
            <span style={{ backgroundColor: `${color}` }} class={`cham-mau ${element === 0 ? 'select' : ''}`}></span>
        </>
    )
}

export default Color
