import React from 'react';
import './profile.css';
import Fade from 'react-reveal/Fade';

const profile = (props) => (
    <div className="profile">
        <div className="row">
            <div className="col-md-6">
                <div className="img-wrapper">
                    <img src={props.img} alt={props.alt}/>
                </div>
            </div>
            <div className="col-md-6">
                <Fade right>
                <h2>{props.title}</h2>
                </Fade>
            </div>
            <div className="col-md-12">
                <p>{props.desc}</p>
            </div>
        </div>
    </div>
)

export default profile;