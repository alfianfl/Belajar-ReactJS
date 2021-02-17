import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import DataPribadi from '../components/DataPribadi'
import ReactAxios from '../pages/ReactAxios'
import DevSchool from '../pages/DevScool'
import Redux from '../pages/Redux'
import Navbar from '../navbar/Navbar'

function Routes() {
    return (
        <div>
            <Router>
                <Navbar/>
                <Switch>
                    <Route path="/" exact component={DataPribadi}></Route>
                    <Route path="/ReactAxios" component={ReactAxios}></Route>
                    <Route path="/redux" component={Redux}></Route>
                    <Route path="/devschool" component={DevSchool}></Route>
                </Switch>
            </Router>
        </div>
    )
}

export default Routes
