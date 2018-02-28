import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
//import App from './App.jsx';
import {App,AppStateFul,AppContainer,AppProps,AppDefault,StatePropsCombine,AppPropValidation} from './App.jsx';

//ReactDOM.render(<App/>, document.getElementById('app'));
ReactDOM.render(<App/>, document.getElementById('app'));
ReactDOM.render(<AppStateFul/>, document.getElementById('app2'));
ReactDOM.render(<AppContainer/>, document.getElementById('app3'));
ReactDOM.render(<AppProps headerProps="headerProps ...." contentProps ="contentProps..."/>,
     document.getElementById('app4'));
//default prop mapping    
ReactDOM.render(<AppDefault/>, document.getElementById('app5'));
ReactDOM.render(<StatePropsCombine/>, document.getElementById('app6'));
ReactDOM.render(<AppPropValidation/>, document.getElementById('app7'));

