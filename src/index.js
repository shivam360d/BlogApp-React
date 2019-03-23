import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {  createStore,applyMiddleware } from 'redux'; 
import thunk from 'redux-thunk';
import reducers from './reducers';
import App from './components/App'

var store=createStore(reducers, applyMiddleware(thunk));
//applyMiddleware is used to implement the middleware
ReactDOM.render(
<Provider store={store}>
        <App />
</Provider>,
    document.querySelector('#root')
);