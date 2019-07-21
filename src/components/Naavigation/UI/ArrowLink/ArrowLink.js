import React from 'react';
import './ArrowLink.css';
import { Link } from 'react-router-dom';

const arrowLink = (props) => (
    <li className="arrow-li"><Link to={props.url}><i className="arrow-right fas fa-long-arrow-alt-right mr-2"></i>{props.children}</Link></li>
)

export default arrowLink;