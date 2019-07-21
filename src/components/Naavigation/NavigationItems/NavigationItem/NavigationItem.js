import React from 'react';
import classes from './NavigationItem.module.css';
import { NavLink } from 'react-router-dom';

const navigationItem = (props) => (
    <li className={classes.NavigationItem}>
        <NavLink to={props.link} exact activeClassName={classes.active} onClick={props.click}>
            <span>
                {props.children}
            </span>
        </NavLink>
    </li>
);

export default navigationItem;