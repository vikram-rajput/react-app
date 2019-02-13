import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route} from 'react-router-dom';
import './stylesheet/index.css';
import App from './container/App';
import * as serviceWorker from './serviceWorker';
import BookDetails from './component/bookDetails';


const routes = (
    <BrowserRouter>
    <div>
    <Route path='/' component={App} exact={true}/>
    <Route path='/detail' component={BookDetails}/>
    </div>
    </BrowserRouter>
    );

ReactDOM.render(routes, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
