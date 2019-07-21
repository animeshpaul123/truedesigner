import React, { Component } from 'react';
import './About.css';
import Profile from './profile/profile';
import SectionHeading from '../UI/sectionHeading/sectionHeading';
import profilePic from '../../images/paul.jpg';
import ExpEdu from './expEdu/expEdu';
import Fade from 'react-reveal/Fade';

class About extends Component {
    state = {
        profile: {
            title: 'The href attribute requires a valid value to be accessible. Provide a valid',
            desc: 'The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot provide a valid href, but still need the element to resemble a link, use a button and change it with appropriate styles. Learn more',
            dpImg: profilePic
        },
        expEducation: [
            {
                title: 'Experience',
                name: 'Front End Developer - Intern',
                where: 'Gale Partners',
                year: '2019 - Jan',
                location: 'Bangalore - India',
            },
            {
                title: 'Education',
                name: 'Bachelor of Engineering in Electronics and Control',
                where: 'Sathyabama Institite of Science and Technology',
                year: '2018 - June',
                location: 'Chennai - India',
            },
            {
                name: 'Higher Secondary Certificate',
                where: 'Pragjyotika jr College',
                year: '2014 - April',
                location: 'Jorhat - India',
            },
            {
                name: 'Secondary School Certificate',
                where: 'Borhat New High School',
                year: '2012 - April',
                location: 'Borhat - India',
            }
        ]
    }
    render () {
        const expEducation = this.state.expEducation.map(item => {
            return (
                <React.Fragment>
                    {item.title ? <p className="header">{item.title}</p> : null}
                        <ExpEdu name={item.name}
                            where={item.where}
                            location={item.location}
                            year={item.year}/>
                </React.Fragment>
            )
        })
        return (
            <div className="about">
                <div className="profile-section">
                    <Fade bottom>
                        <SectionHeading>About</SectionHeading>
                    </Fade>
                    <div className="profile-container">
                        <Profile title={this.state.profile.title}
                            desc={this.state.profile.desc}
                            img={this.state.profile.dpImg}/>
                    </div>
                    <div className="exp-edu-container">
                        {expEducation}
                    </div>
                </div>
            </div>
        )
    }
}

export default About;