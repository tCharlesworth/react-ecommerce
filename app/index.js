import React    from 'react';
import ReactDOM from 'react-dom';

var styles = require('./styles/styles.scss');

var routes = require('./routes')

ReactDOM.render(routes, document.getElementById('app'));