import React,{Component} from 'react';
import {BrowserRouter as Router, Switch, Route,Link} from 'react-router-dom';
import Home from './Home';
import Login from './Login';

//if Component was not imported we write, ... React.Component{}
class App extends Component{
render(){
    return(
        <Router>
            <div>
                <h2>Welcome to react router tutorial!</h2>
                <ul>
                    <li><Link to = {'/'} >Home </Link></li>
                    <li><Link to = {'/Login'} >Login </Link></li>
                </ul>
                <hr/>
                <Switch>
                    <Route exact path='/' component ={Home}/>
                    <Route exact path='/Login' component ={Login}/>
                </Switch>
            </div>
        </Router>
    );
}
}

export default App;
