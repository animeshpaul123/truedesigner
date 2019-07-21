import React from 'react';
import './titleBox.css';
import { Spring } from 'react-spring/renderprops';

const titleBox = (props) => {
    return (
        <Spring
            from={{ opacity: 0 , transform: 'translateY(50%)'}}
            to={{ opacity: 1 , transform: 'translateY(0%)'}}
            config={{ duration: 400 }}
        >
            {styles => (
                <div style={styles}>
                    <div className="titleBox">
                        {props.smallText ? <span className="smallText">{props.smallText}</span> : null}
                        <h1>I'm <span> {props.bigText}</span></h1>
                        <p>{props.mediumText}</p>
                        {props.desc ? <p className="desc">{props.desc}</p> : null}
                        {props.link ? <a href={props.link} download>
                            <button>{props.titleBtn}</button>
                        </a> : null}
                    </div>
                </div>
            )}
        </Spring>
    )
}

export default titleBox;