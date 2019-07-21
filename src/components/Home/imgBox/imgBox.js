import React from 'react';
import './imgBox.css';

const imgBox = (props) => (
    <div className="imgBox">
        {props.img ? <img src={props.img} alt="svg" /> : null}
    </div>
)

export default imgBox;