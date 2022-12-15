import React, {Component} from "react";

import {Link, NavLink, Route} from 'react-router-dom';
import About from "./pages/About/About"; //router component
import Home from "./pages/Home/Home"; //router component
import Header from "./component/Header/Header"; // custom component

//Create component
export default class App extends Component {

    render() {
        return (
            <div>

                    <div className="row">
                    <Header/>
                    </div>
                    <div className="row">
                        <div className="col-xs-2 col-xs-offset-2">
                            <div className="list-group">
                                {/* original routing */}
                                {/*<a className="list-group-item" href="./about.html">About</a>*/}
                                {/*<a className="list-group-item active" href="./home.html">Home</a>*/}

                                {/*router should be applied here*/}

                                <NavLink className="list-group-item" to='/about'>
                                    About
                                </NavLink>
                                <NavLink className="list-group-item" to='/home'>
                                    home
                                </NavLink>
                            </div>
                        </div>
                        <div className="col-xs-6">
                            <div className="panel">
                                <div className="panel-body">
                                    {/*<h3>我是Home的内容</h3>*/}

                                    <Route path='/about' component={About}/>
                                    <Route path='/home' component={Home}/>
                                </div>
                            </div>
                        </div>
                    </div>


            </div>
        );
    }

}

