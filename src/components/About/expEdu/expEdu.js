import React from 'react';
import './expEdu.css';
import Fade from 'react-reveal/Fade';

const expEdu = (props) => (
    <div class="wrap row">
        <Fade bottom>
            <div class="col-md-9 col-xs-9">
                <p class="job">
                    {props.name}
                    <span>{` `}- {props.where}</span>
                </p>
                <p class="loc">{props.location}</p>
            </div>
            <div class="col-md-3 col-xs-3">
                <span class="year">{props.year}</span>
            </div>
        </Fade>
    </div>
)

export default expEdu;