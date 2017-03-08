import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom'
import Landing from '../containers/Landing/'

class Main extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Route exact path='/' component={Landing} ></Route>
                    <Route path='/about' component={Landing} ></Route>
                    <Route path='/projects' component={Landing} ></Route>
                    <Route path='/contact' component={Landing} ></Route>
                </div>
            </Router>
        )
    }
}

export default Main 