import './mui.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Route } from 'react-router-dom';
import axios from 'axios';

ReactDOM.render(<App />,document.getElementById('root'));
registerServiceWorker();