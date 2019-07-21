import React, { Component } from 'react';
import classes from './Toolbar.module.css';
import NavigationItems from '../NavigationItems/NavigationItems';
import { Link } from 'react-router-dom';

class Toolbar extends Component {
    state = {
        scrollPos: 0,
        scrollLimit: 170,

      }
      componentDidMount () {
        window.addEventListener('scroll', this.handleScroll)
      }
      componentWillMount () {
          window.removeEventListener('scroll', this.handleScroll)
      }
      handleScroll = () => {
        const scrollpos = window.scrollY
        this.setState({
          scrollPos: scrollpos
        })
      }


    render () {
        const newClass = [classes.Maxwidth]
        if (this.state.scrollPos > this.state.scrollLimit) {
            newClass.push(classes.scrollPos)
        }
        return (
            <header className={newClass.join(' ')}>
                <div className={classes.Toolbar}>
                    <div className={classes.Logo}
                        onClick={this.props.openSideDrawer}>
                            <Link to="/" className={classes.LogoLink}>A .</Link>
                        </div>
                    <nav className={classes.DesktopOnly}>
                            <NavigationItems />
                    </nav>
                    <div className={classes.Toggle} onClick={this.props.clicked}>
                        <span className={classes.span}></span>
                        <span className={[classes.span, classes.spantwo].join(' ')}></span>
                        <span className={[classes.span, classes.spanthree].join(' ')}></span>
                    </div>
                </div>
            </header>
        )
    }
}

export default Toolbar;