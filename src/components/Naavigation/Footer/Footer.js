import React, { Component } from 'react';
import './footer.css';
import SocialLink from '../UI/SocialLinks/SocialLinks';
import FooterLinks from './FooterLinks/FooterLinks';
import Address from '../../UI/address/address';

class Footer extends Component {
    state = {
        footerPara: {
            title: 'Lets talk about',
            para: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts',
        },
        footerlinks: [
            {
                title: 'Links',
                para: ['Home', 'About', 'Skills', 'Projects', 'Contact']
            },
            {
                title: 'Navs',
                para: ['Home', 'About', 'Skills', 'Projects', 'Contact']
            }
        ],
        question: {
            title: 'Have a question?',
            address: 'Choclate Factory Road, BTM, Bangalore',
            phone: '+918248742693',
            email: 'animeshpaul.unofficial@gmail.com',
        },
        about: {
            title: 'Lets talk about',
            para: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
        },
        socials: [
            {
               social : 'fab fa-github',
                url: 'https://github.com/animeshpaul123',
            },
            {
                social: 'fab fa-facebook',
                url: 'https://facebook.com/paulayush.animesh',
            },
            {
                
                social: 'fab fa-instagram',
                url: 'https://instagram.com/paul_ani_mesh',
            }
        ]
    }
    render() {
        return (
            <footer>
                <div className="container">
                    <div className="row mb-5">
                        <div className="col-md">
                            <div className="footer-widget mb-4">
                                <h2 className="ftco-heading-2">{this.state.about.title}</h2>
                                <p>{this.state.about.para}</p>
                                <ul className="footer-social list-unstyled float-md-left mt-5 d-flex justify-content-center">
                                    {this.state.socials.map(item => {
                                        return (
                                            <SocialLink icon={item.social} link={item.url}/>
                                        )
                                    })}
                                </ul>
                            </div>
                        </div>
                        {this.state.footerlinks.map(footerlink => {
                            return (
                                <div className="col-md">
                                    <FooterLinks links={footerlink}/>
                                </div>
                            )
                        })}
                        <div className="col-md">
                            <div className="footer-widget-address mb-4">
                                <h2 className="ftco-heading-2">{this.state.question.title}</h2>
                                <Address address={this.state.question.address}
                                    phone={this.state.question.phone}
                                    email={this.state.question.email}/>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer;