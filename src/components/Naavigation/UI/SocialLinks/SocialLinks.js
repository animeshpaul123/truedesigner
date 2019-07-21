import React from 'react';
import './SocialLinks.css';

const socialLink = (props) => <li className="social-icon"><a href={props.link} target="_blank"><span class={props.icon}></span></a></li>

export default socialLink;