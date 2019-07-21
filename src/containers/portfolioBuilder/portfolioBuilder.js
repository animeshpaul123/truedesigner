import React, { Component } from 'react';
import './portfolioBuilder.css';
import Home from '../../components/Home/Home';
import { Route, Switch } from 'react-router-dom';
import About from '../../components/About/About';
import Skills from '../../components/Skills/Skills';
import Contact from '../../components/Contact/Contact';
import Projects from '../../components/Projects/Projects';
import { withRouter, Redirect } from 'react-router';

class PortfolioBuilder extends Component {
    state = {
        visible: false
    }
    componentDidUpdate (prevProps) {
        if (this.props.location !== prevProps.location) {
            window.scrollTo(0, 0)
        }
    }
    render () {
        return (
            <React.Fragment>
                <Switch>
                    <Route path="/projects" component={Projects} />
                    <Route path="/contact" component={Contact} />
                    <Route path="/skills" component={Skills} />
                    <Route path="/about" component={About} />
                    <Route path="/" exact component={Home}/>
                    <Route path="/home" exact render={() => (<Redirect to="/" />)}/>
                </Switch>
            </React.Fragment>
        )
    }
}

export default withRouter(PortfolioBuilder);