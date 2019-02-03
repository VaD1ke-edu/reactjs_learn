import React from 'react';
import ReactDom from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

import DefaultLayout from './app/layouts/Default';
import HomePage from './app/pages/Home';
import AboutPage from './app/pages/About';
import CommentListPage from './app/pages/comment/List';
import CommentViewPage from './app/pages/comment/View';
import UserListPage from './app/pages/user/List';
import PostListPage from './app/pages/post/List';
import NoRoute from './app/pages/NoRoute';

import './app/styles/common.less';


ReactDom.render(
    <Router history={browserHistory}>
        <Route path="/" component={DefaultLayout}>
            <IndexRoute component={HomePage}/>
            <Route path="about" component={AboutPage}/>
            <Route path="posts" component={PostListPage}/>
            <Route path="comments/1" component={CommentViewPage}/>
            <Route path="comments" component={CommentListPage}>
            </Route>
            <Route path="users" component={UserListPage}>
            </Route>
            <Route path="*" component={NoRoute}/>
        </Route>
    </Router>,
    document.querySelector('#root')
);
