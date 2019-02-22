import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import './css/index.css';
import App from './App';
import store from './store';

const AppRouter = () => {
    return (
        <Provider store={store}>
            <Router>
                <Route axact path="/" component={App}/>
            </Router>
        </Provider>
    )
};

ReactDOM.render(<AppRouter />, document.getElementById('root'));

registerServiceWorker();
