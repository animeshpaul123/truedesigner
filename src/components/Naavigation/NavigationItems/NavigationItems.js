import React from 'react';
import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = (props) => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/" active click={props.clicked}>Home</NavigationItem>
        <NavigationItem link="/about" click={props.clicked}>About</NavigationItem>
        <NavigationItem link="/skills" active click={props.clicked}>Skills</NavigationItem>
        <NavigationItem link="/projects" active click={props.clicked}>Projects</NavigationItem>
        <NavigationItem link="/contact" active click={props.clicked}>Contact</NavigationItem>
    </ul>
)

export default navigationItems;