import React from 'react';
// import './FooterLinks.css';
import ArrowLink from '../../UI/ArrowLink/ArrowLink';

const footerLinks = (props) => {
    return (
        <div className="ftco-footer-widget mb-4 ml-md-4">
            <h2 className="ftco-heading-2">{props.links.title}</h2>
            <ul className="list-unstyled">
                {props.links.para.map(sentence => <ArrowLink url={sentence.toLowerCase()}>{sentence}</ArrowLink>)}
            </ul>
        </div>
    )
}

export default footerLinks;