import React, { Component } from 'react';
import './Projects.css';
import treeImg from '../../images/tree.svg';
import SectionHeading from '../UI/sectionHeading/sectionHeading';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';

import ImgBox from '../Home/imgBox/imgBox';
import Project from './project/project';
import loanImg from '../../images/loan.png';
import carbonImg from '../../images/carbonMade.png';
import solarImg from '../../images/solar.png';
import paulkartImg from '../../images/paulKart.png';
import shoppingImg from '../../images/shopping.png';
import todoImg from '../../images/todo.png';
import chatImg from '../../images/chat.png';
import emailImg from '../../images/emailInput.png';
import searchBarImg from '../../images/searchBar.png';
import calendarImg from '../../images/calendar.png';


class Projects extends Component {
    state = {
        img: treeImg,
        projects: [
            {
                img: loanImg,
                title: 'Loan App',
                catagory: 'web application',
                width: 12,
                url: 'https://amount-response.herokuapp.com',
            },
            {
                img: carbonImg,
                title: 'Perfect Match',
                catagory: 'Design & Dev',
                color: '#000',
                width: 6,
                url: 'https://happy-mestorf-83b459.netlify.com/',
            },
            {
                img: solarImg,
                title: 'Solar Animation',
                catagory: 'Design & Dev',
                color: '#000',
                width: 6,
                url: 'https://vigilant-shockley-8b665f.netlify.com/',
            },
            {
                img: paulkartImg,
                title: 'Paul Kart',
                catagory: 'Design & Dev',
                color: '#000',
                width: 6,
                url: 'https://condescending-fermat-307c69.netlify.com',
            },
            {
                img: shoppingImg,
                title: 'Shopping Kart',
                catagory: 'Design & Dev',
                color: '#000',
                width: 6,
                url: 'https://elegant-feynman-c99c48.netlify.com',
            },
            {
                img: chatImg,
                title: 'Chat App',
                catagory: 'Design & UI',
                color: '#000',
                width: 8,
                url: 'https://jovial-payne-b96556.netlify.com/',
            },
            {
                img: todoImg,
                title: 'Todo App',
                catagory: 'Design & UI',
                color: '#000',
                width: 4,
                url: 'https://nifty-franklin-ce785c.netlify.com/',
            },
            {
                img: emailImg,
                title: 'Sample App',
                catagory: 'Design & UI',
                color: '#000',
                width: 4,
                url: 'https://vigorous-mcclintock-6f4deb.netlify.com/',
            },
            {
                img: searchBarImg,
                title: 'Leaf App',
                catagory: 'Design & UI',
                color: '#000',
                width: 8,
                url: 'https://pedantic-wright-3ed01f.netlify.com/',
            },
            {
                img: calendarImg,
                title: 'Calendar App',
                catagory: 'Design & UI',
                color: '#000',
                width: 12,
                url: 'https://awesome-tesla-4da0b1.netlify.com/',
            },
        ]
    }
    render () {
        
        

        const project = this.state.projects.map(project => {
            let styles = ["project-container"]
            let width = `col-md-${project.width}`
            styles.push(width)
            return (
                <Fade bottom>
                    <div className={styles.join(' ')}>
                        <a href={project.url} target="_blank">
                            <Project projectImg={project.img}
                                title={project.title}
                                catagory={project.catagory}
                                color={project.color}/>
                        </a>
                    </div>
                </Fade>
            )
        })
        return (
            <div className="projects">
                <div className="image-wrapper">
                    <div className="image-container">
                        <ImgBox img={this.state.img}/>
                    </div>
                    <div className="title-wrapper">
                        <Fade right>
                            <SectionHeading>My Works</SectionHeading>
                        </Fade>
                    </div>
                </div>
                <div className="project-wrapper">
                    <div className="title-wrapper">
                        <Fade bottom>
                            <SectionHeading>Projects</SectionHeading>
                        </Fade>
                    </div>
                    <div className="project-inner">
                        <div className="row">
                            {project}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Projects;