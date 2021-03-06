import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
// window.React = React;
// window.ReactDOM = ReactDOM;
//import App from './App.jsx';

import {
    App,AppStateFul,
    AppContainer,
    AppProps,
    AppDefault,
    StatePropsCombine,
    AppPropValidation,
    AppSetStateHandler,
    AppFormsExample,
    AppEvents,
    AppRefsExample,
    AppKeysExample
    } from './App.jsx';

//--ReactDOM.render(<App/>, document.getElementById('app'));
ReactDOM.render(<App/>, document.getElementById('app'));
ReactDOM.render(<AppStateFul/>, document.getElementById('app2'));
ReactDOM.render(<AppContainer/>, document.getElementById('app3'));
ReactDOM.render(<AppProps headerProps="headerProps ...." contentProps ="contentProps..."/>,
     document.getElementById('app4'));
//default prop mapping    
ReactDOM.render(<AppDefault/>, document.getElementById('app5'));
ReactDOM.render(<StatePropsCombine/>, document.getElementById('app6'));
ReactDOM.render(<AppPropValidation/>, document.getElementById('app7'));
ReactDOM.render(<AppSetStateHandler/>, document.getElementById('app8'));
ReactDOM.render(<AppFormsExample/>, document.getElementById('app9'));
ReactDOM.render(<AppEvents/>, document.getElementById('app10'));
ReactDOM.render(<AppRefsExample/>, document.getElementById('app11'));
ReactDOM.render(<AppKeysExample/>, document.getElementById('app12'));

