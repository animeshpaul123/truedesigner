import React from 'react';
import './whatIDo.css';

const whatIDo = (props) => (
    <div class="what-i-do text-center">
        <span class="icon">
            <i class={props.icon}></i>
        </span>
        <div class="desc">
            <h3>{props.title}</h3>
            <p>{props.desc}</p>
        </div>
    </div>
)

export default whatIDo;