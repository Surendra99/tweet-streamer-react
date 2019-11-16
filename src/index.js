import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {ActionCableProvider} from 'react-actioncable-provider';
import * as serviceWorker from './serviceWorker';
import { API_WS_ROOT } from './constants';
import actionCable from 'actioncable';

const cableApp = {}
cableApp.cable = actionCable.createConsumer(API_WS_ROOT)
ReactDOM.render(<App cableApp={cableApp}/>, document.getElementById('root'));
serviceWorker.unregister();
