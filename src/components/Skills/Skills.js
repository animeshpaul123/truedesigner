import React, { Component } from 'react';
import './Skills.css';
import Skill from './skill/skill';
import Imgbox from '../Home/imgBox/imgBox';
import Bike from '../../images/bike.svg';
import SectionHeading from '../UI/sectionHeading/sectionHeading';
import Fade from 'react-reveal/Fade';

class Skills extends Component {
    state = {
        skillImg: Bike,
        quote: {
            title: 'A great man is always willing to be little',
            author: 'Emerson'
        },
        skills: [
            {
                name: 'Illustrator/XD',
                progress: 60,
            },
            {
                name: 'HTML 5',
                progress: 85,
            },
            {
                name: 'CSS 3',
                progress: 85,
            },
            {
                name: 'Bootstrap',
                progress: 80,
            },
            {
                name: 'SASS',
                progress: 80,
            },
            {
                name: 'LESS',
                progress: 75,
            },
            {
                name: 'UI',
                progress: 70,
            },
            {
                name: 'JQUERY',
                progress: 80,
            },
            {
                name: 'React',
                progress: 70,
            },{
                name: 'node',
                progress: 65,
            },{
                name: 'Express',
                progress: 65,
            },
        ]
    }
    render () {
        const mySkills = this.state.skills.map((skill, i) => {
            return (
                <Fade bottom>
                    <div className="col-md-6">
                        <Skill name={skill.name}
                            width={skill.progress}
                            key={i}/>
                    </div>
                </Fade>
            )
        })
        return (
            <div className="skills">
                <div class="img-container">
                    <Imgbox img={this.state.skillImg}/>
                    <Fade>
                        <div className="quote">
                            <h2>
                                <span className="left"><i className="fas fa-quote-left"></i></span>
                                    {this.state.quote.title}
                                <span className="right"><i className="fas fa-quote-right"></i></span>
                            </h2>
                            <p>~ {this.state.quote.author}</p>
                        </div>
                    </Fade>
                </div>
                <div className="skills-container">
                    <Fade bottom>
                        <SectionHeading>Skills & Abilities</SectionHeading>
                    </Fade>
                    <div className="row skills-inner-row">
                        {mySkills}
                    </div>
                </div>

            </div>
        )
    }
}

export default Skills;