import React from 'react';
import './project.css';
import ImgBox from '../../Home/imgBox/imgBox';

const project = (props) => {
    return (
        <div className="project">
            <ImgBox img={props.projectImg}/>
            <div className="overlap">
                <h4>{props.title}</h4>
                <p>{props.catagory}</p>
            </div>
        </div>
    )
}

export default project;