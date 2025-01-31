import React, { Component } from 'react';
import './Home.css';
import Fade from 'react-reveal/Fade';
import Background from './background/background';
import ImgBox from './imgBox/imgBox';
import TitleBox from './titleBox/titleBox';
import homeSvg from '../../images/home.svg';
import happySvg from '../../images/happy.svg';
import SmallAbout from './smallAbout/smallAbout';
import SectionHeading from '../UI/sectionHeading/sectionHeading';
import WhatIDo from './whatIDo/whatIDo';
import cv from '../../documents/cv.pdf'

class Home extends Component {
    state = {
        landing: {
            smallText: 'HELLO',
            bigText: "Animesh Paul",
            mediumText: 'A Front End Developer',
            buttonTxt: 'MY CV',
            mycv: cv,
        },
        landingImg: [homeSvg, happySvg],
        smallAbout: {
            name: 'Animesh Paul',
            role: '-Tablet Design comming soon ! !',
            desc: 'Gale Partners (Front End Developer Intern). Worked in BMO Economics and BMO Commercial projects. Collaborated with different developers, agile environment, transferring quality check',
            heading: 'Short Note about Me',
        },
        whatIDo: [
            {
                title: 'UI/UX',
                desc: 'UI and UX development',
                icon: 'fas fa-compact-disc',
            },
            {
                title: 'Web Design',
                desc: 'Web desigining and UI improvement',
                icon: 'fas fa-palette',
            },
            {
                title: 'Web Development',
                desc: 'Web application development',
                icon: 'fas fa-dumbbell',
            }
        ]


    }
    render () {
        const whatIDoCards = this.state.whatIDo.map(card => {
            return (
                <div className="col-md-4">
                    <WhatIDo title={card.title}
                        desc={card.desc}
                        icon={card.icon}/>
                </div>
            )
        })
        return (
            <div className="home">
                <Background />
                <div className="ti-wrapper">
                    <div className="titleBox-container">
                        <TitleBox smallText={this.state.landing.smallText}
                            bigText={this.state.landing.bigText}
                            mediumText={this.state.landing.mediumText}
                            titleBtn={this.state.landing.buttonTxt}
                            link={this.state.landing.mycv}/>
                    </div>
                    <div className="imgBox-container">
                        <ImgBox img={this.state.landingImg[0]}/>
                    </div>
                </div>
                <div className="small-about-wrapper">
                    <Fade bottom>
                        <SectionHeading>Short Note About Me</SectionHeading>
                        <SmallAbout img={this.state.landingImg[1]}
                        bigText={this.state.smallAbout.name}
                        mediumText={this.state.smallAbout.role}
                        desc={this.state.smallAbout.desc}/>
                    </Fade>
                </div>
                <div className="what-i-do-wrapper">
                    <Fade bottom>
                    <SectionHeading>What I Do</SectionHeading>
                    <div className="row">
                        {whatIDoCards}
                    </div>
                    </Fade>
                </div>
            </div>
        )
    }
}

export default Home;