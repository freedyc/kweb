import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import './css/index.css';
import App from './App';
import store from './store';

setInterval(() => {
    store.dispatch({ type: 'SHOW_MESSAGE' });
}, 1000)

store.subscribe(() => {
    console.log(store.getState());
});

const AppRouter = () => {    
    return (
        <Router>
            <Route axact path="/" component={App}/>
        </Router>
    )
};

ReactDOM.render(<AppRouter />, document.getElementById('root'));

registerServiceWorker();
