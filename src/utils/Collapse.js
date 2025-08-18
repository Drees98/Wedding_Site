import React, {useState} from 'react';
import "./Collapse.css"
import {ReactComponent as TriangleDown} from '../images/triangleDown.svg'
import {ReactComponent as Triangle} from '../images/triangleUp.svg'
function Collapse(props) {
    const [open, setOpen] = useState(false)  
    const toggle = () => {
        setOpen(!open)
    }
    return (
        <div className='Collapse-Container'>
            <button className='Collapse-Button' onClick={toggle}>{props.label} <span>{open ? <Triangle className='Triangle-Svg'/> : <TriangleDown className='Triangle-Svg'/>}</span></button>
            {open && (
                <div className='toggle'>
                    {props.children}
                </div>
            )}
        </div>
    )
}

export default Collapse