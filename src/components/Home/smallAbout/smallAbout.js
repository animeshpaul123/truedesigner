import React from 'react';
import './smallAbout.css';
import ImgBox from '../imgBox/imgBox';
import TextBox from '../titleBox/titleBox';

const smallAbout = (props) => {
    return (
        <div className="small-about">
            <div className="img-container">
                <div className="about-img-1">
                    <ImgBox img={props.img}/>
                </div>
            </div>
            <div className="text-container">
                <TextBox bigText={props.bigText}
                    mediumText={props.mediumText}
                    desc={props.desc}/>
            </div>
        </div>
    )
}

export default smallAbout;