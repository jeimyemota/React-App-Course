import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

//Below is pushing the APP component in the app.js into the Root class in the html file//
//Basically you are calling the root component here.//
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
