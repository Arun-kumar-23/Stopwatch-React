import React from 'react'
import './Style.css'

function BtnComponents(props) {
    return (
        <div className="buttons">
            {(props.status ===0)? 
            <button className="start" onClick={props.start}>Start</button> :''
            }
            {
            (props.status === 1)? 
            <div>
            <button className="stop" onClick={props.stop} >Stop</button>&nbsp;&nbsp;
            <button className="reset" onClick={props.reset}>Reset</button>&nbsp;&nbsp;
            </div>:''
            }
            {(props.status === 2)?
            <div>
            <button className="resume" onClick={props.resume}>Resume</button>&nbsp;&nbsp;
            <button className="reset" onClick={props.reset}>Reset</button>&nbsp;&nbsp;
            </div>:''
            }

        </div>
    )
}

export default BtnComponents
