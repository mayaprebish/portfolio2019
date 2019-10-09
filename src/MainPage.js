import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";

import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import PageHeader from "./components/PageHeader";

export default class MainPage extends Component {
    render() {
        return (
            <Router>
                <div>
                    <PageHeader/>

                    <Switch>
                        <Route exact path='/' component={About}/>
                        <Route path='/about' component={About}/>
                        <Route path='/portfolio' component={Portfolio}/>
                        <Route path='/contact' component={Contact}/>
                        <Route path='/resume' component={Resume}/>
                    </Switch>
                </div>
            </Router>
        )
    }

}