import React from 'react';
import ReactDom from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

import DefaultLayout from './app/layouts/Default';
import HomePage from './app/pages/Home';
import AboutPage from './app/pages/About';

// import './style/common.less';


ReactDom.render(
    <Router history={browserHistory}>
        <Route path="/" component={DefaultLayout}>
            <IndexRoute component={HomePage}/>
            <Route path="about" component={AboutPage}/>
        </Route>
    </Router>,
    document.querySelector('#root')
);
