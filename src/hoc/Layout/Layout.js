import React, { Component } from 'react';
import Toolbar from '../../components/Naavigation/Toolbar/Toolbar';
import classes from './Layout.module.css';
import Footer from '../../components/Naavigation/Footer/Footer';
import NavigationItems from '../../components/Naavigation/NavigationItems/NavigationItems';

class Layout extends Component {
    state = {
        clicked: false,
    }
    toggleHandler = () => {
        this.setState(prevState => ({
            clicked: !prevState.clicked,
        }))
        
    }
    crossHandler = () => {
        this.setState({clicked: false})
    }
    render () {
        let navMob = this.state.clicked ? (<div className={classes.NavMobile}>
                        <div className={classes.cross} onClick={this.crossHandler}>
                            <span></span>
                            <span></span>
                        </div>
                        <NavigationItems clicked={this.crossHandler}/>
                    </div>) : null
        return (
            <React.Fragment>
                <Toolbar clicked={this.toggleHandler}/>
                <main className={classes.Layout}>
                    {this.props.children}
                </main>
                <Footer />
                {navMob}
            </React.Fragment>
        )
    }
}

export default Layout;