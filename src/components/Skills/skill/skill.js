import React from 'react';
import './skill.css';

const skill = (props) => {
    const styles = {
        width: props.width + '%',
    }
    return (
        <div className="skill-progress">
            <h3>{props.name}</h3>
            <div className="progress">
                <div className="progress-bar color-1" style={styles}>
                    <span>{props.width}%</span>
                </div>
            </div>
        </div>
    )
}

export default skill;
