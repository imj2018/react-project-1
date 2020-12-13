import React from 'react'; 
import ReactDOM from 'react-dom'; /* interacts with the DOM */
import './index.css';

import App from './App'; /* from App.js */ 

import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root')); /* grab an element from the html
with the Id root in the index.html and replace/inject with the App.js stuff
*/

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
