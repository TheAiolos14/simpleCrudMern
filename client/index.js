import React from 'react';
import ReactDOM from 'react-dom';
import '../src/index.css';
import App from '../client/components/App';
import Routes from './routes'

ReactDOM.render(
    <HashRouter>
        <Routes />
    </HashRouter>, document.getElementById('root')
);