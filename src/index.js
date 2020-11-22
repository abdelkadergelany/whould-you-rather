import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import 'bootstrap/dist/css/bootstrap.css';
import reducers from './reducers';
import middleware from './middleware';
import { Provider } from 'react-redux';
import { compose, createStore } from 'redux';

const store = createStore(reducers,compose(middleware,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
)
ReactDOM.render(
  <Provider store={store}>
    <App />
    </Provider >,
  document.getElementById('root')
);


